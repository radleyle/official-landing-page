"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_rktt5wd', // Replace with your EmailJS service ID
        'template_zy65p5g', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'qd5ITCkiP5AhQAHxi' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Email send failed:', error);
      // You could add error handling here
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 rounded-3xl bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-green-500/30 shadow-2xl"
        style={{
          backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0]
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-6xl mb-4"
        >
          ✨
        </motion.div>
        <h3 className="text-2xl font-bold text-green-400 mb-2">Thank you!</h3>
        <p className="text-foreground/70">Your message has been sent successfully. I&apos;ll get back to you soon!</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto p-8 rounded-3xl bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 shadow-2xl"
      style={{
        backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
        WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
    >
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-70 pointer-events-none"></div>
      
      <div className="relative z-10 space-y-6">
        <h3 className="text-2xl font-bold text-center mb-8">Let's Connect</h3>
        
        {/* Name Field */}
        <div className="relative">
          <label className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40" size={16} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white/[0.05] backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300 interactive"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
              placeholder="Your name"
            />
          </div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1"
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div className="relative">
          <label className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40" size={16} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white/[0.05] backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300 interactive"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
              placeholder="your@email.com"
            />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Message Field */}
        <div className="relative">
          <label className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-foreground/40" size={16} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full pl-10 pr-4 py-3 bg-white/[0.05] backdrop-blur-xl border border-white/30 dark:border-white/20 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300 resize-none interactive"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
              placeholder="Tell me about your project or just say hello!"
            />
          </div>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-xl border border-white/30 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed interactive shadow-2xl hover:shadow-3xl"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        >
          <div className="flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                <FiSend size={16} />
                Send Message
              </>
            )}
          </div>
        </motion.button>
      </div>
    </motion.form>
  );
}