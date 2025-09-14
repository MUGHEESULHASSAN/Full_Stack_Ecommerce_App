import React from "react";

const NewsLetterBox = () => {
    const onSubmitHandler =(event)=>{
        event.preventDefault();      //Due to this page will not reload after submission of email
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vero,
        magni in iusto cumque ipsum. Neque molestiae vitae qui nihil doloremque
        iste, est possimus repudiandae suscipit earum debitis nobis hic?
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your Email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
