import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Validate form fields
    if (!form.name || !form.email || !form.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://us-central1-dust-of-war.cloudfunctions.net/sendContactEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });

        // Hide message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 py-16 px-6 text-white relative"
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 uppercase tracking-wide">
        Contact Us
      </h2>
      <div className="relative max-w-lg mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 relative"
        >
          {/* Display success or error message */}
          {(successMessage || errorMessage) && (
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center rounded-lg z-10">
              <p
                className={`text-2xl font-bold mb-4 ${
                  successMessage ? "text-green-400" : "text-red-400"
                }`}
              >
                {successMessage || errorMessage}
              </p>
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300 flex justify-center items-center"
          >
            {loading ? (
              <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
