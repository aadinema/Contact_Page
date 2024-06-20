import React, { useState } from "react";

const SupportForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="main flex items-center  justify-between w-full">
      <div className="form-content w-1/2 m-40 ">
        <div className="button text-white font-bold text-xl mb-8">
          <button className="p-5 mr-20  bg-orange-600 rounded-xl">
          <i class="ri-chat-3-line"></i> via support chat
          </button>
          <button className=" bg-orange-600 p-5 rounded-xl"> <i class="ri-customer-service-fill"></i> via call</button>
        </div>
         
        <form onSubmit={handleSubmit} className="text-white">
          <label htmlFor="name" className="">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="text"
            className="w-full bg-orange-700 p-3"
          />
          <br /> <br />
          <label htmlFor="email">E-Mail:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="w-full bg-orange-800 p-3 "
          />
          <br /> <br />
          <label htmlFor="text">TEXT:</label>
          <br /> <br />
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="type something"
            className="w-full bg-orange-950 p-3 mb-4" 
          />
         <button type="button" className="uppercase bg-orange-800 p-5 rounded-xl ml-96 hover:animate-spin">submit</button>
          
        </form>
      </div>

      <div className="w-1/2 p-5 mr-10">
        <img
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=626&ext=jpg"
          alt="contactUsImage"
          className="rounded-2xl drop-shadow-2xl contrast-100 hover:rotate-180 transition duration-700 ease-in-out delay-300"
        />
      </div>
    </div>
  );
};

export default SupportForm;
