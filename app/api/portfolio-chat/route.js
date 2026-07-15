import {
  buildPortfolioContext,
  PORTFOLIO_CHAT_SYSTEM_PROMPT,
} from "../../../lib/portfolio-context";

const MAX_MESSAGES = 20;
const MAX_HISTORY = 10;

export async function POST(request) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return Response.json(
      {
        error:
          "Portfolio chat is not configured. Add OPENROUTER_API_KEY to your environment.",
      },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { messages } = body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: "Messages are required." }, { status: 400 });
  }

  if (messages.length > MAX_MESSAGES) {
    return Response.json(
      { error: "Too many messages in this session." },
      { status: 400 }
    );
  }

  const validMessages = messages
    .filter(
      (m) =>
        m &&
        typeof m.content === "string" &&
        m.content.trim().length > 0 &&
        (m.role === "user" || m.role === "assistant")
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role,
      content: m.content.trim().slice(0, 2000),
    }));

  if (validMessages.length === 0) {
    return Response.json({ error: "No valid messages provided." }, { status: 400 });
  }

  const context = buildPortfolioContext();
  const model =
    process.env.PORTFOLIO_CHAT_MODEL || "google/gemini-2.5-flash";

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer":
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Nguyen Le Portfolio",
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: `${PORTFOLIO_CHAT_SYSTEM_PROMPT}\n\n--- PORTFOLIO CONTEXT ---\n${context}`,
          },
          ...validMessages,
        ],
        max_tokens: 500,
        temperature: 0.3,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("OpenRouter error:", res.status, errText);
      return Response.json(
        { error: "Failed to get a response. Please try again." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      return Response.json(
        { error: "Empty response from model." },
        { status: 502 }
      );
    }

    return Response.json({ message: reply.trim() });
  } catch (error) {
    console.error("Portfolio chat error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
