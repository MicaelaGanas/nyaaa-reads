"use client"

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email directly.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2bd5d5]/30 blur-xl rounded-full" />
              <img src="/cat.ico" alt="NyaaReads Logo" className="relative w-20 h-20 object-contain" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#2bd5d5] via-[#19bfbf] to-[#2bd5d5] bg-clip-text text-transparent mb-3">
            Contact Developer
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#2bd5d5] to-transparent rounded-full" />
        </div>

        <div className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2bd5d5]/10 to-[#19bfbf]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-[rgba(10,10,10,0.6)] backdrop-blur-sm border border-[#2bd5d5]/20 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2bd5d5] mb-6">Get In Touch</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a 
                  href="https://github.com/MicaelaGanas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-[#2bd5d5]/5 hover:bg-[#2bd5d5]/10 border border-[#2bd5d5]/20 rounded-lg transition-all group/link"
                >
                  <svg className="w-6 h-6 text-[#2bd5d5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div className="flex-1">
                    <div className="text-sm text-[#93a9a9]">GitHub</div>
                    <div className="text-[#2bd5d5] font-semibold group-hover/link:underline">@MicaelaGanas</div>
                  </div>
                </a>

                <a 
                  href="https://www.facebook.com/mikyeonie13/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-[#2bd5d5]/5 hover:bg-[#2bd5d5]/10 border border-[#2bd5d5]/20 rounded-lg transition-all group/link"
                >
                  <svg className="w-6 h-6 text-[#2bd5d5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div className="flex-1">
                    <div className="text-sm text-[#93a9a9]">Facebook</div>
                    <div className="text-[#2bd5d5] font-semibold group-hover/link:underline">Micaela Ganas</div>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/leblaine_reset/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-[#2bd5d5]/5 hover:bg-[#2bd5d5]/10 border border-[#2bd5d5]/20 rounded-lg transition-all group/link"
                >
                  <svg className="w-6 h-6 text-[#2bd5d5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div className="flex-1">
                    <div className="text-sm text-[#93a9a9]">Instagram</div>
                    <div className="text-[#2bd5d5] font-semibold group-hover/link:underline">@leblaine_reset</div>
                  </div>
                </a>

                <a 
                  href="mailto:myganas@mcm.edu.ph"
                  className="flex items-center gap-3 p-4 bg-[#2bd5d5]/5 hover:bg-[#2bd5d5]/10 border border-[#2bd5d5]/20 rounded-lg transition-all group/link"
                >
                  <svg className="w-6 h-6 text-[#2bd5d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="flex-1">
                    <div className="text-sm text-[#93a9a9]">Email</div>
                    <div className="text-[#2bd5d5] font-semibold group-hover/link:underline break-all">myganas@mcm.edu.ph</div>
                  </div>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2bd5d5] mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/40 border border-[#2bd5d5]/30 rounded-lg text-white placeholder-[#93a9a9] focus:outline-none focus:border-[#2bd5d5] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#2bd5d5] mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/40 border border-[#2bd5d5]/30 rounded-lg text-white placeholder-[#93a9a9] focus:outline-none focus:border-[#2bd5d5] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#2bd5d5] mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-black/40 border border-[#2bd5d5]/30 rounded-lg text-white placeholder-[#93a9a9] focus:outline-none focus:border-[#2bd5d5] transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2bd5d5] mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-black/40 border border-[#2bd5d5]/30 rounded-lg text-white placeholder-[#93a9a9] focus:outline-none focus:border-[#2bd5d5] transition-colors resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {status === "success" && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#2bd5d5] to-[#19bfbf] hover:from-[#19bfbf] hover:to-[#2bd5d5] text-black font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
