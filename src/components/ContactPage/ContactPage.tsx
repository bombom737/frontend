import { validationErrors } from '@/app/types/types';
import { validateMessage } from '@/hooks/validateMessage';
import { sendEmail } from '@/lib/resend';
import React, { useState, useRef }  from 'react'

function ContactPage() {

  const [errors, setErrors] = useState<validationErrors>({
    name: false,
    subject: false,
    email: false,
    phoneNumber: false,
    message: false
  });
  
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(
    e: React.MouseEvent<HTMLAnchorElement>,
    nameRef:React.RefObject<HTMLInputElement | null >,
    subjectRef:React.RefObject<HTMLInputElement | null >, 
    emailRef:React.RefObject<HTMLInputElement | null >, 
    phoneNumberRef:React.RefObject<HTMLInputElement | null >, 
    messageRef:React.RefObject<HTMLTextAreaElement | null >,
  ) {
    e.preventDefault();
    setErrors(validateMessage(nameRef, subjectRef, emailRef, phoneNumberRef, messageRef));

    if (Object.values(errors).every((error) => !error)) {
      sendEmail(emailRef.current!.value, subjectRef.current!.value, messageRef.current!.value)
      
      console.log("Email sent!");
      
    }
  };

  return (
    <div className='flex w-[100vw] h-[100vh] bg-[#2c2c2c] overflow-x-hidden !mr-[19rem]'>
      <div className='flex flex-col !pt-40 !pl-40 w-[50%]'>
        <h1 className='text-[#ffffff] text-5xl'>Contact Shimon!</h1>
        <p className='!pt-5 text-xl text-white'>Inquire about Shimon, painting prices, or anything else!</p>
        <div className='!pt-10 grid grid-cols-2 w-full'>
          <div className="w-full h-[100px]">
            <p className='text-white font-bold text-xl pb-2'>Name</p>
            <input
              ref={nameRef} 
              type="text" 
              placeholder='Your name' 
              className='border border-[#6d6d6d] rounded h-[40px] w-[90%] p-5 text-white bg-transparent
                focus:outline-none focus:border-white hover:border-white 
                transition-colors duration-500 ease-in-out'
              />
              {errors.name && 
              <div className='w-[70%]'>
                <p className='text-red-600 pt-1 w-full'>Please enter a name.</p> 
              </div>}
          </div>
          <div className="w-full h-[100px]">
            <p className='text-white font-bold text-xl pb-2'>Subject</p>
            <input
              ref={subjectRef} 
              type="text" 
              placeholder='Subject' 
              className='border border-[#6d6d6d] rounded h-[40px] w-[90%] p-5 text-white bg-transparent
                focus:outline-none focus:border-white hover:border-white 
                transition-colors duration-500 ease-in-out'
              />
              {errors.subject && 
              <div className='w-[70%]'>
                <p className='text-red-600 pt-1 w-full'>Please enter your subject.</p> 
              </div>}
          </div>
          <div className="w-full h-[100px]">
            <p className='text-white font-bold text-xl pb-2'>Email</p>
            <input
              ref={emailRef} 
              type="email" 
              placeholder='Your Email' 
              className='border border-[#6d6d6d] rounded h-[40px] w-[90%] p-5 text-white bg-transparent
                focus:outline-none focus:border-white hover:border-white 
                transition-colors duration-500 ease-in-out'
              />
              {errors.email && 
              <div className='w-[70%]'>
                <p className='text-red-600 pt-1 w-full'>Please enter a valid email.</p> 
              </div>}
          </div>
          <div className="w-full h-[100px]">
            <p className='text-white font-bold text-xl pb-2'>Phone Number</p>
            <input
              ref={phoneNumberRef} 
              type="tel" 
              placeholder='Phone Number'
              maxLength={15} 
              className='border border-[#6d6d6d] rounded h-[40px] w-[90%] p-5 text-white bg-transparent
                focus:outline-none focus:border-white hover:border-white 
                transition-colors duration-500 ease-in-out'
              />
              {errors.phoneNumber && 
              <div className='w-[70%]'>
                <p className='text-red-600 pt-1 w-full'>Please enter a phone number.</p> 
              </div>}
          </div>
        </div>
        <div className="w-full h-[20%]">
          <p className='text-white font-bold text-xl pb-2'>Message</p>
          <textarea 
            ref={messageRef}
            placeholder='Write your message here' 
            className='resize-none border border-[#6d6d6d] rounded h-full w-[95%] p-5 text-white bg-transparent
              focus:outline-none focus:border-white hover:border-white 
              transition-colors duration-500 ease-in-out'
            />
            {errors.message && 
            <div className='w-[70%]'>
              <p className='text-red-600 pt-1 w-full'>Please enter your message.</p> 
            </div>}
        </div>
        <div className="w-[200px] h-[70px] flex mt-20">
          <a
            className="rounded-md bg-[#2ba6ec] flex items-center justify-center h-full w-full font-bold transition-all duration-500 ease-in-out hover:bg-[#ffffff]"
            onClick={(e) => handleSubmit(e, nameRef, subjectRef, emailRef, phoneNumberRef, messageRef)}
          >
            <span className='text-white text-2xl h-full w-full flex justify-center items-center transition-all duration-500 ease-in-out hover:text-black'>Submit</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage