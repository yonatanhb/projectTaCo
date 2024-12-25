import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        console.log("Email sent successfully!");
        setForm({ name: "", email: "", message: "" });
        alert("Your message has been sent successfully!");
      } else {
        console.error("Failed to send email");
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 py-16 px-6 text-white"
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 uppercase tracking-wide">
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
