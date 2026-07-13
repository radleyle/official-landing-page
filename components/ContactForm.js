"use client";

import { useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email"
          : "";
      case "message":
        return value.length < 10 ? "Message must be at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send(
        "service_rktt5wd",
        "template_zy65p5g",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "qd5ITCkiP5AhQAHxi"
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Email send failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full pl-10 pr-4 py-3 bg-white/[0.02] border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-white/20 transition-colors";

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center">
        <h3 className="text-lg font-medium text-accent mb-2">Message sent</h3>
        <p className="text-muted text-sm">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-5">
      <div>
        <label className="block text-sm text-muted mb-2">Name</label>
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm text-muted mb-2">Email</label>
        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm text-muted mb-2">Message</label>
        <div className="relative">
          <FiMessageSquare className="absolute left-3 top-4 text-muted" size={16} />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Tell me about your project or just say hello"
          />
        </div>
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiSend size={16} />
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
