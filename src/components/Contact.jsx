import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setError(null);

    try {
      // Replace these with your actual EmailJS service details
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Your Name", // Customize this
        reply_to: formData.email,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error("Email sending failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Get in Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
            <User size={18} />
            <span>Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-colors duration-200"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
            <Mail size={18} />
            <span>Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-colors duration-200"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
            <MessageSquare size={18} />
            <span>Message</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-colors duration-200"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 
                   bg-primary-500 hover:bg-primary-600 text-white rounded-lg
                   transition-colors duration-200 disabled:opacity-50"
        >
          <Send size={18} />
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        </button>

        {submitStatus === "success" && (
          <div
            className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 
                      p-4 rounded-lg mt-4 text-center animate-fade-in flex items-center justify-center gap-2"
          >
            <span className="flex-shrink-0">✓</span>
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {error && (
          <div
            className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 
                      p-4 rounded-lg mt-4 text-center animate-fade-in flex items-center justify-center gap-2"
          >
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
