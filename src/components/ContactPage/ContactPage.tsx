import { validationErrors } from '@/app/types/types';
import { validateMessage } from '@/hooks/validateMessage';
import { sendEmail } from '@/lib/resend';
import { Mail, PhoneCall, Map } from 'lucide-react';
import React, { useState, useRef }  from 'react'

function ContactPage() {

  const [errors, setErrors] = useState<validationErrors>({
    name: false,
    subject: false,
    email: false,
    phoneNumber: false,
    message: false
  });

  const [emailSuccess, setEmailSuccess] = useState<boolean>(false);
  
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
    const errors = validateMessage(nameRef, subjectRef, emailRef, phoneNumberRef, messageRef);
    setErrors(errors);

    if (Object.values(errors).every((error) => !error)) {
      sendEmail(emailRef.current!.value, nameRef.current!.value,  subjectRef.current!.value, messageRef.current!.value)
      setEmailSuccess(true);
      setTimeout(() => {
        setEmailSuccess(false);
      }, 5000)
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
              placeholder='Your email' 
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
              type="number" 
              placeholder='Phone number'
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
        <div className="w-[200px] h-[110px] flex flex-col mt-20">
          <a
            className="rounded-md bg-[#2ba6ec] flex items-center justify-center h-[70px] w-full font-bold transition-all duration-500 ease-in-out hover:bg-[#ffffff]"
            onClick={(e) => handleSubmit(e, nameRef, subjectRef, emailRef, phoneNumberRef, messageRef)}
          >
            <span className='text-white text-2xl h-full w-full flex justify-center items-center transition-all duration-500 ease-in-out hover:text-black'>Submit</span>
          </a>
          {emailSuccess && <p className='text-green-500 pt-3 pl-1'>Email sent successfully!</p>} 
        </div>
      </div> 
      <div className='!pt-40 !pl-10 !mr-[19rem] w-[22%]'> 
      <h1 className='text-5xl text-white'>Contact Information</h1>
        <div className='pt-10 grid grid-rows-1'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-row'>
              <a 
              href="https://maps.app.goo.gl/hA7jcmaRN1jqnrY36"
              className='!text-white hover:!text-black !transition-colors ease-in !duration-300'
              >
                <div className='w-[50px] h-[50px] rounded-[100%] bg-[#2ba6ec] relative
                hover:bg-white !transition-colors ease-in !duration-300'>
                  <Map className='absolute top-[28%] left-[25%]'/>
                </div>
              </a>
              <div className='pl-3'>
                <p className='text-white'>Studio Address</p>
                <p className='text-white'>Shvil Hameretz 1, Tel Aviv</p>
              </div>
            </div>
            <div className='flex flex-row'>
              <a 
              href="https://wa.me/972526298770"
              className='!text-white hover:!text-black !transition-colors ease-in !duration-300'
              >
                <div className='w-[50px] h-[50px] rounded-[100%] bg-[#2ba6ec] relative
                hover:bg-white !transition-colors ease-in !duration-300'>
                  <PhoneCall className='absolute top-[28%] left-[25%]'/>
                </div>
              </a>
              <div className='pl-3'>
                <p className='text-white'>Contact Phone</p>
                <p className='text-white'>+972-52-629-8770</p>
              </div>
            </div>
            <div className='flex flex-row'>
              <a 
              href="mailto:s@pintoart.com"
              className='!text-white hover:!text-black !transition-colors ease-in !duration-300'
              >
                <div className='w-[50px] h-[50px] rounded-[100%] bg-[#2ba6ec] relative
                hover:bg-white !transition-colors ease-in !duration-300'>
                  <Mail className='absolute top-[28%] left-[25%]'/>
                </div>
              </a>
              <div className='pl-3'>
                <p className='text-white'>Contact Email</p>
                <p className='text-white'>s@pintoart.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className='!text-white !pt-9'>
            Designed and built by{' '}
            <a
              href='https://www.linkedin.com/in/ilan-pinto-b27097346/'
              className='!text-[#2ba6ec] hover:!text-white !transition-colors ease-in !duration-300'
            >
              Ilan Pinto
            </a>{' '}
            and{' '}
            <a
              href='https://www.linkedin.com/in/uri-henig/'
              className='!text-[#2ba6ec] hover:!text-white !transition-colors ease-in !duration-300'
            >
              Uri Henig
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage