import { validationErrors } from "@/app/types/types";
import { validateEmail } from "./validateEmail";

export function validateMessage(
  nameRef:React.RefObject<HTMLInputElement | null >,
  subjectRef:React.RefObject<HTMLInputElement | null >, 
  emailRef:React.RefObject<HTMLInputElement | null >, 
  phoneNumberRef:React.RefObject<HTMLInputElement | null >, 
  messageRef:React.RefObject<HTMLTextAreaElement | null >,
  ){

  const validateInput = (value: string, validationFn: (value: string) => boolean) => {
    return validationFn(value);
  }

  const conditions = {
    name: (value: string) => value.trim() !== "",
    subject: (value: string) => value.trim() !== "",
    email: (value: string) => value.trim() !== "",
    phoneNumber: (value: string) => value.trim() !== "" && value.length >= 7 && value.length <= 15,
    message: (value: string) => value.trim() !== "",
  };

  const newErrors: validationErrors = {
    name: !validateInput(nameRef.current?.value || "", conditions.name),
    subject: !validateInput(subjectRef.current?.value || "", conditions.subject),
    email: validateEmail(emailRef.current?.value || "") === null, 
    phoneNumber: !validateInput(phoneNumberRef.current?.value || "", conditions.phoneNumber),
    message: !validateInput(messageRef.current?.value || "", conditions.message),      
  }
  
  return newErrors;
}