import React from "react";

const ContactForm = () => {
  return (
    <div id="contact" className="relative bg-gray-100 py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto bg-whit shadow-md bg-white  overflow-hidden">
        <div className="p-10 flex flex-col justify-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            Feel free to drop me a message and I’ll get back to you as soon as
            possible.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="border-b-2 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-500 transition duration-300"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
                className="border-b-2 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-500 transition duration-300"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="border-b-2 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-500 transition duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
