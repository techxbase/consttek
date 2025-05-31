"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ role: "bot", content: "How can I assist with compliance today?" }]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    setInput("");

    const res = await fetch("/api/chatbot", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();

    setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
  };

  return (
    <div className="fixed bottom-10 right-10 bg-[#0f172a] text-white p-4 rounded-xl w-[90vw] md:w-[400px] h-[500px] flex flex-col shadow-2xl border border-white/10">
      <div className="flex-1 overflow-y-auto space-y-2 mb-2">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-2 rounded-md max-w-[85%] ${msg.role === "user" ? "bg-purple-600 self-end" : "bg-slate-700 self-start"}`}
          >
            {msg.content}
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 px-3 py-2 rounded-md bg-slate-800 text-white"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="bg-purple-600 px-4 py-2 rounded-md">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
