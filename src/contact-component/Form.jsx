// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_feth3xs", // Replace with your actual service ID
        "template_zl0sdh8", // Replace with your actual template ID
        e.target,
        "cVVb5LAcAeB0fjvof" // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log("Message sent successfully!", result);
          setIsSubmitted(true);
          e.target.reset(); // Clear form after successful submission
        },
        (error) => {
          console.error("Email sending error:", error);
          setErrorMessage("Failed to send message. Please try again.");
        }
      );
  };

  const handleReset = () => {
    document.getElementById("contactForm").reset();
    setErrorMessage(""); // Clear error message on reset
  };

  return (
    <div className="bg-black w-full h-screen mb-1 flex justify-center items-center">
      {isSubmitted ? (
        <div className="text-center text-white text-2xl font-bold">
          Thank you! Your message has been sent.
        </div>
      ) : (
        <div className="md:flex block relative justify-center p-6">
          <div className="md:w-1/2 w-full">
            <model-viewer
              alt="laptop"
              src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/b5f434ae4d45d10fe1664d5606ad28e4d9c739af/images/laptop.glb"
              shadow-intensity="1"
              camera-controls
              touch-action="pan-y"
              environment-image="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/b5f434ae4d45d10fe1664d5606ad28e4d9c739af/images/dancing_hall_2k.hdr"
              exposure="1.5"
              disable-zoom
              disable-tap
              camera-orbit="-45deg 60deg 9m"
              autoplay
            ></model-viewer>
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl text-white font-bold pl-8">
              Get in touch
            </h1>

            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            <form
              id="contactForm"
              onSubmit={handleSend}
              className="md:w-full w-full p-8 bg-transparent"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoFocus
                className="w-full bg-white text-black p-4 mb-4 font-bold outline-none border-l-2 transition-all focus:border-l-8 border-[#FF7A01]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-white text-black p-4 mb-4 font-bold outline-none border-l-2 transition-all focus:border-l-8 border-[#FF7A01]"
                required
              />
              <textarea
                name="message"
                placeholder="Say Hello"
                rows="4"
                className="w-full bg-white text-black p-4 mb-4 font-bold outline-none border-l-2 transition-all focus:border-l-8 border-[#FF7A01]"
                required
              ></textarea>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#FF7A01] text-[#001925] p-4 font-bold text-center transition-all hover:bg-transparent hover:text-[#FF7A01] hover:border hover:border-[#FF7A01]"
                >
                  Send
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-1/4 bg-gray-800 text-orange-500 py-2 px-4 font-bold transition-all ease-in-out duration-200 hover:bg-orange-500 hover:text-gray-800"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
