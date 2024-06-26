import React, { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
const Contact = () => {
  let email = useRef(null);
  let name = useRef(null);
  const form = useRef();
  let message = useRef(null);



  useEffect(() => emailjs.init("ZrZSmiQ9CBQjW12aZ"), []);
  const sendEmail = (e) => {
    e.preventDefault();

 emailjs
 .sendForm('service_n44c4yf', 'template_18q3xej', form.current, {
   publicKey: 'ZrZSmiQ9CBQjW12aZ',
 })
 .then(
   () => {
    toast.success("Email sent Successfully", {
      position: "top-left",
    });
  
   },
   (error) => {
    toast.warning("Error !  to send email", {
      position: "top-left",
    });
   },
 );
 e.target.reset()
  };

  return (
    <div>
      <div className="min-h-full mt-[6%]">
        <form ref={form}
          onSubmit={sendEmail}
          className=" md:w-4/12 p-12 bg-black  justify-center mx-auto left-0 right-0 my-36 rounded-lg text-white bg-opacity-80"
        >
          <h1 className="text-yellow-500 mb-6 text-center">Contact Us</h1>
          <input
           ref={name}
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-700 rounded-lg"
          />
          <input
             ref={email}
            placeholder="Email"
            className="p-2 m-2 w-full bg-gray-700 rounded-lg"
          />
          <input
            ref={message}
            placeholder="Message"
            className="p-2 pb-12 m-2 w-full bg-gray-700 rounded-lg"
          />
          <button
            className="m-2  p-2 w-full bg-yellow-600 text-white rounded-lg"
          
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
