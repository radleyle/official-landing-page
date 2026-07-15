"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiSend, FiX } from "react-icons/fi";

const SUGGESTED_PROMPTS = [
  "What's Nguyen's current role?",
  "Summarize his top projects",
  "What research has he published?",
  "What's his full-stack experience?",
];

const WELCOME_MESSAGE = {
  role: "assistant",
  content:
    "Ask me about Nguyen's experience, projects, research, or tech stack. I answer from his portfolio only.",
};

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setError(null);
    const userMessage = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.filter((m) => m.role !== "system"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get a response.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Ask about Nguyen's portfolio"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="w-[calc(100vw-3rem)] sm:w-96 max-h-[min(32rem,70vh)] flex flex-col rounded-2xl border border-border bg-[#0c0c0e]/95 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden"
          >
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div>
              <p className="text-sm font-medium text-foreground">
                Ask about my work
              </p>
              <p className="text-xs text-muted">Powered by portfolio context</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-white/[0.05] transition-colors"
              aria-label="Close chat"
            >
              <FiX size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-[16rem]">
            {messages.map((msg, i) => (
              <div
                key={`${msg.role}-${i}`}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-accent/15 text-foreground border border-accent/20"
                      : "bg-white/[0.04] text-muted border border-border"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-xl px-3.5 py-2.5 bg-white/[0.04] border border-border">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-pulse [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-pulse [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <p className="text-xs text-red-400/90 px-1">{error}</p>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && !isLoading && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="text-xs px-2.5 py-1.5 rounded-lg border border-border text-muted hover:text-foreground hover:border-white/15 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 border-t border-border flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about experience, projects..."
              disabled={isLoading}
              className="flex-1 bg-white/[0.04] border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/40 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-lg bg-accent/15 border border-accent/25 text-accent hover:bg-accent/25 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <FiSend size={16} />
            </button>
          </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-2 px-4 py-3 rounded-full border shadow-lg transition-all duration-200 ${
          isOpen
            ? "bg-white/[0.06] border-border text-muted hover:text-foreground"
            : "bg-[#0c0c0e]/90 border-border text-foreground hover:border-accent/30 hover:bg-white/[0.05] backdrop-blur-md"
        }`}
        aria-label={isOpen ? "Close portfolio chat" : "Open portfolio chat"}
        aria-expanded={isOpen}
      >
        <FiMessageCircle size={18} className={isOpen ? "" : "text-accent"} />
        {!isOpen && (
          <span className="text-sm font-medium pr-0.5">Ask about my work</span>
        )}
      </button>
    </div>
  );
}
