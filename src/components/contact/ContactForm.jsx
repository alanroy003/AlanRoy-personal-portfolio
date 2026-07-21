import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    errorMessage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({
      loading: true,
      success: false,
      error: false,
      errorMessage: "",
    });

    // Retrieve environment variables from Vite .env
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Safety check: Ensure keys are loaded from .env
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS Error: Missing environment variables. Ensure your .env file is properly configured and restart your Vite dev server.",
      );
      setStatus({
        loading: false,
        success: false,
        error: true,
        errorMessage: "Configuration error: Missing API keys in .env file.",
      });
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (response) => {
        console.log("EmailJS Success:", response.status, response.text);
        setStatus({
          loading: false,
          success: true,
          error: false,
          errorMessage: "",
        });
        setFormData({
          first_name: "",
          last_name: "",
          user_email: "",
          message: "",
        });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus({
          loading: false,
          success: false,
          error: true,
          errorMessage:
            error?.text || "Failed to send message. Please try again later.",
        });
      },
    );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-white/20 backdrop-blur-md border border-white/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-4"
    >
      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs sm:text-sm font-bold text-neutral-900 tracking-wide">
            First Name <span className="text-orange-500">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-black/10 focus:border-orange-500 focus:bg-white text-neutral-900 text-xs sm:text-sm font-medium focus:outline-none transition-all duration-200 placeholder:text-neutral-400"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs sm:text-sm font-bold text-neutral-900 tracking-wide">
            Last Name <span className="text-orange-500">*</span>
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-black/10 focus:border-orange-500 focus:bg-white text-neutral-900 text-xs sm:text-sm font-medium focus:outline-none transition-all duration-200 placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs sm:text-sm font-bold text-neutral-900 tracking-wide">
          Email Address <span className="text-orange-500">*</span>
        </label>
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/60 border border-black/10 focus:border-orange-500 focus:bg-white text-neutral-900 text-xs sm:text-sm font-medium focus:outline-none transition-all duration-200 placeholder:text-neutral-400"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs sm:text-sm font-bold text-neutral-900 tracking-wide">
          Message <span className="text-orange-500">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/60 border border-black/10 focus:border-orange-500 focus:bg-white text-neutral-900 text-xs sm:text-sm font-medium focus:outline-none transition-all duration-200 placeholder:text-neutral-400 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.loading}
        className="mt-2 w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
      >
        {status.loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>

      {/* Status Notifications */}
      {status.success && (
        <div className="flex items-center gap-2 text-emerald-700 bg-emerald-500/20 border border-emerald-500/40 p-3 rounded-xl text-xs sm:text-sm font-semibold mt-2">
          <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      )}

      {status.error && (
        <div className="flex items-center gap-2 text-rose-700 bg-rose-500/20 border border-rose-500/40 p-3 rounded-xl text-xs sm:text-sm font-semibold mt-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{status.errorMessage || "Failed to send message."}</span>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
