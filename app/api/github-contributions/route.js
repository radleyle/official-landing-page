export async function GET() {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/radleyle?y=last",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return Response.json({ error: "Failed to fetch" }, { status: 502 });
    }

    const data = await res.json();
    return Response.json(data);
  } catch {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
