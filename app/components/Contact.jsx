import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[lenght:90%_auto]'
    >
      <h4 className="text-center mb-2 text-lg fontOvo">Connect with me</h4>
      <h2 className="text-center text-5xl fontOvo">Get in touch </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 fontOvo">
        i'd love to hear from you! if you have any questions , comments , or
        feedback please use the form below.
      </p>
      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name "
            name=""
            id=""
            required
          />
          <input
            type="email"
            placeholder="Enter your email "
            name=""
            id=""
            required
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          name=""
          id=""
        ></textarea>
        <button type="submit">Submit now</button>
      </form>
    </div>
  );
};

export default Contact;
