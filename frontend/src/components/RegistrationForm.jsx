import React, { useState } from "react";
import { useToast } from "../context/ToastContext";
import axios from "axios";

const validate = ({ name, email, phone }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Full name is required.";
  else if (name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";

  if (!email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address.";

  if (!phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[6-9]\d{9}$/.test(phone.replace(/\s/g, "")))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";

  return errors;
};

const Field = ({ label, id, error, children }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
      {label} <span className="text-brand-rose" aria-hidden="true">*</span>
    </label>
    {children}
    {error && (
      <p role="alert" className="mt-1.5 text-xs text-brand-rose flex items-center gap-1">
        <span aria-hidden="true">⚠</span> {error}
      </p>
    )}
  </div>
);

const Spinner = () => (
  <svg
    aria-hidden="true"
    className="animate-spin w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const RegistrationForm = () => {
  const { addToast } = useToast();

  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${backendUrl}/api/enquiry`,
        form
      );

      if (response.data.success) {
        setSubmitted(true);
        addToast("You're enrolled! We'll be in touch soon. 🎉", "success");
      } else {
        addToast(
          response.data.message || "Something went wrong.",
          "error"
        );
      }
    } catch (err) {
      addToast("Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section
        id="register"
        aria-label="Registration success"
        className="py-20 sm:py-24 bg-gray-50"
      >
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-10 sm:p-14">
            <div className="text-6xl mb-4 animate-float inline-block">🎉</div>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-gray-900 mb-3">
              You're on the list!
            </h2>
            <p className="text-gray-500 mb-6">
              Thanks for registering,{" "}
              <strong className="text-gray-800">{form.name}</strong>! We've
              received your enquiry and will send workshop details to{" "}
              <strong className="text-brand-violet">{form.email}</strong> within
              24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", email: "", phone: "" });
              }}
              className="text-sm text-brand-violet hover:underline"
            >
              Register another student
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      aria-label="Workshop registration form"
      className="py-20 sm:py-24 bg-gray-50"
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-brand-violet font-semibold text-sm uppercase tracking-widest mb-2">
            Register Now
          </p>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-gray-900">
            Secure your child's spot
          </h2>
          <p className="mt-3 text-gray-500">
            Limited seats — only 25 students per batch. Fill in your details
            and we'll confirm your enrollment within 24 hours.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
          {/* Price callout */}
          <div className="flex items-center justify-between bg-gradient-to-r from-brand-violet/10 to-brand-cyan/10 rounded-2xl px-5 py-4 mb-8">
            <div>
              <p className="text-xs text-gray-500 font-medium">Total fee</p>
              <p className="font-display font-800 text-2xl text-brand-violet">
                ₹2,999
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-medium">Starts</p>
              <p className="font-semibold text-gray-800">15 July 2026</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Student registration"
          >
            <div className="flex flex-col gap-5">
              {/* Full Name */}
              <Field label="Full Name" id="name" error={errors.name}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Love Sharma"
                  autoComplete="name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200
                    ${errors.name ? "border-brand-rose focus:ring-brand-rose/30" : "border-gray-300 focus:border-brand-violet focus:ring-brand-violet/20"}
                    focus:outline-none focus:ring-4 bg-gray-50 focus:bg-white`}
                />
              </Field>

              {/* Email */}
              <Field label="Email Address" id="email" error={errors.email}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="parent@example.com"
                  autoComplete="email"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200
                    ${errors.email ? "border-brand-rose focus:ring-brand-rose/30" : "border-gray-300 focus:border-brand-violet focus:ring-brand-violet/20"}
                    focus:outline-none focus:ring-4 bg-gray-50 focus:bg-white`}
                />
              </Field>

              {/* Phone */}
              <Field label="Phone Number" id="phone" error={errors.phone}>
                <div className="flex">
                  <span className="inline-flex items-center px-4 py-3 rounded-l-xl border border-r-0 border-gray-300 bg-gray-100 text-gray-500 text-sm select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    autoComplete="tel"
                    maxLength={10}
                    className={`flex-1 px-4 py-3 rounded-r-xl border text-sm transition-colors duration-200
                      ${errors.phone ? "border-brand-rose focus:ring-brand-rose/30" : "border-gray-300 focus:border-brand-violet focus:ring-brand-violet/20"}
                      focus:outline-none focus:ring-4 bg-gray-50 focus:bg-white`}
                  />
                </div>
              </Field>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full flex items-center justify-center gap-3 bg-brand-violet text-white font-bold py-4 rounded-2xl
                  hover:bg-brand-indigo active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed
                  transition-all duration-200 shadow-lg hover:shadow-xl text-base"
              >
                {loading ? (
                  <>
                    <Spinner />
                    <span>Submitting…</span>
                  </>
                ) : (
                  "Reserve My Spot 🚀"
                )}
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-xs text-gray-400">
            By registering, you agree to our{" "}
            <span className="underline cursor-pointer">Terms</span> and{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
