import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    const serviceID = "service_feth3xs"; // Replace with your actual service ID
    const publicKey = "cVVb5LAcAeB0fjvof"; // Replace with your actual public key

    // 💌 1️⃣ Send Auto-Reply to User
    emailjs
      .sendForm(serviceID, "template_zl0sdh8", e.target, publicKey)
      .then((result) => {
        console.log("✅ Auto-reply sent to User!", result);

        // 💌 2️⃣ Send Email to Admin
        emailjs
          .send(serviceID, "template_0kjnemo", {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
          }, publicKey)
          .then((adminResult) => {
            console.log("✅ Message sent to Admin!", adminResult);
            setIsSubmitted(true);
            e.target.reset();

            // Hide the message and show the form again after 30 seconds
            setTimeout(() => {
              setIsSubmitted(false);
            }, 30000);
          })
          .catch((adminError) => {
            console.error("❌ Error sending to Admin:", adminError);
            setErrorMessage("Failed to send message to Admin.");
          });

      })
      .catch((error) => {
        console.error("❌ Error sending auto-reply:", error);
        setErrorMessage("Failed to send message. Please try again.");
      });
  };

  const handleReset = () => {
    document.getElementById("contactForm").reset();
    setErrorMessage(""); // Clear error message on reset
  };

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      {isSubmitted ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="text-center text-white text-2xl font-bold">
            Thank you! Your message has been sent.
          </div>
        </div>
      ) : (
        <div className="block w-full h-full md:flex">
          {/* Model Viewer - Left Half */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-6">
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
              className="w-full h-auto"
            ></model-viewer>
          </div>

          {/* Contact Form - Right Half */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-6">
              Get in touch
            </h1>

            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}

            <form
              id="contactForm"
              onSubmit={handleSend}
              className="w-full bg-transparent"
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
