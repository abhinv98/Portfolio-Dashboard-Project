import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Log to verify environment variables are loaded
    console.log("Environment Variables Check:", {
      serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID
        ? "Present"
        : "Missing",
      templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID
        ? "Present"
        : "Missing",
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ? "Present"
        : "Missing",
    });

    // Initialize EmailJS
    if (process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }
  }, []);

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
      // Verify values before sending
      if (
        !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
        !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
        !process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error("EmailJS configuration is missing");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Abhinav Rai",
        reply_to: formData.email,
      };

      // Log the actual values being used
      console.log("Sending with:", {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        params: templateParams,
      });

      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("Success:", response);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Detailed error:", err);
      setError(
        `Error: ${err.message || "Failed to send message"}. Please email directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Get in Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        Have a question or want to work together? Feel free to reach out!
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Or email directly at{" "}
        <a
          href="mailto:98abrai@gmail.com"
          className="text-primary-500 hover:text-primary-600 underline"
        >
          98abrai@gmail.com
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
            <User
              size={18}
              className="text-primary-500 group-hover:text-primary-600 transition-colors"
            />
            <span>Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800/90 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-700"
            placeholder="Your name"
          />
        </div>

        <div className="group">
          <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
            <Mail
              size={18}
              className="text-primary-500 group-hover:text-primary-600 transition-colors"
            />
            <span>Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800/90 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-700"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="group">
          <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
            <MessageSquare
              size={18}
              className="text-primary-500 group-hover:text-primary-600 transition-colors"
            />
            <span>Message</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800/90 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent
                     transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-700
                     resize-none"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 
                   bg-primary-500 hover:bg-primary-600 active:bg-primary-700
                   text-white rounded-lg shadow-sm hover:shadow
                   transition-all duration-200 disabled:opacity-50
                   disabled:hover:bg-primary-500 disabled:cursor-not-allowed"
        >
          <Send
            size={18}
            className={`transition-all duration-300 ${
              isSubmitting ? "animate-pulse" : "animate-none"
            }`}
          />
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        </button>

        {submitStatus === "success" && (
          <div
            className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 
                      p-4 rounded-lg mt-4 text-center animate-fade-in flex items-center justify-center gap-2
                      border border-green-200 dark:border-green-800"
          >
            <span className="flex-shrink-0">✓</span>
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {error && (
          <div
            className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 
                      p-4 rounded-lg mt-4 text-center animate-fade-in flex items-center justify-center gap-2
                      border border-red-200 dark:border-red-800"
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
