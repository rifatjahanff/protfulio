import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import img from "../../assets/suport.png";

const Contact = () => {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const fullMessage = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/8801955070835?text=${fullMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Container>
      <div className="mt-[100px] mb-[100px]">
        <Heading
          text={"My Contact Information"}
          as={"p"}
          className={"text-[20px] mt-[10px] text-white text-center"}
        />
        <Heading
          text={"Contact With Me"}
          as={"h1"}
          className={"text-[50px] mt-[10px] text-white text-center pb-[50px]"}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 pb-[100px]">
        {/* Left - Form */}
        <div className="w-full lg:w-[70%]">
          <div
            className="rounded-xl py-16 px-4 sm:px-10 text-white bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/src/assets/Contact_walpeper_one.png')",
            }}
          >
            <h2 className="text-[22px] sm:text-[30px] lg:text-[35px] mb-2 font-semibold text-center">
              Send Me a Message
            </h2>

            <form
              className="w-full max-w-3xl mx-auto mt-6 space-y-6"
              onSubmit={handleWhatsAppSubmit}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="flex-1 p-4 rounded-md bg-[#0C0C22] border border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="flex-1 p-4 rounded-md bg-[#0C0C22] border border-gray-600 text-white placeholder-gray-400"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-md bg-[#0C0C22] border border-gray-600 text-white placeholder-gray-400"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="w-full p-4 rounded-md bg-[#0C0C22] border border-gray-600 text-white placeholder-gray-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 rounded-md bg-[#0C0C22] border border-gray-600 text-white resize-none placeholder-gray-400"
                required
              ></textarea>

              <button
                type="submit"
                className="inline-block bg-[#93F2FF] text-black text-base sm:text-xl px-5 py-3 mt-2 rounded-xl hover:bg-white hover:text-red-500 transition duration-300 text-center"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Right - Info */}
        <div className="w-full lg:w-[30%]">
          <div
            className="rounded-xl px-6 py-10 text-white flex flex-col gap-12 sm:px-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/src/assets/Contact_walpeper_two.png')",
            }}
          >
            {/* Support Section */}
            <div>
              <img src={img} alt="support" className="w-[40px] h-[35px] mb-3" />
              <Heading
                text={"Get Support"}
                as={"p"}
                className={"text-[22px] sm:text-[25px]"}
              />
              <Heading
                text={
                  <p>
                    If you want to communicate live, please{" "}
                    <span className="text-red-500">WhatsApp</span> me.
                  </p>
                }
                as={"p"}
                className={"text-[16px] sm:text-[18px] mt-2"}
              />
              <Heading
                text={"Phone Number: +8801955070835"}
                as={"p"}
                className={"text-[16px] sm:text-[18px] mt-2"}
              />
            </div>

            {/* Email Section */}
            <div>
              <img src={img} alt="support" className="w-[40px] h-[35px] mb-3" />
              <Heading
                text={"Communication With Mail"}
                as={"p"}
                className={"text-[22px] sm:text-[25px]"}
              />
              <p className="text-[16px] sm:text-[18px] mt-2">
                Please submit your message via email — I’ll respond as soon as
                possible.
              </p>
              <p className="text-[14px] mt-2">
                Email 01: jahanrifat953@gmail.com
              </p>
              <p className="text-[14px]">Email 02: rifatjahanrume@gmail.com</p>
            </div>

            {/* WhatsApp Chat */}
            <div>
              <img src={img} alt="support" className="w-[40px] h-[35px] mb-3" />
              <Heading
                text={"Want to Chat Now?"}
                as={"p"}
                className={"text-[22px] sm:text-[25px]"}
              />
              <p className="text-[16px] sm:text-[18px] mt-2">
                Chat with me live to get more information or help quickly.
              </p>
              <a
                href="https://wa.me/8801713729101"
                className="inline-block bg-[#93F2FF] text-black text-base sm:text-xl px-5 py-3 mt-4 rounded-xl hover:bg-white hover:text-red-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Chat With Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
