// import axios from "axios";
import { Facebook, Github, Instagram } from "lucide-react";
// import { useState } from "react";

export const ContactSection = () => {
  // const [subject, setSubject] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [message, setMessage] = useState<string>("");
  // const [isSubmit , setIsSubmit] = useState<boolean>(false);
  // const apiUrl = import.meta.env.VITE_API_URL;

  // const handleSendEmail = async () => {
  //   if (!subject || !email || !message) {
  //     return;
  //   }
  //   setIsSubmit(true)
  //   const payload = {
  //     subject: subject,
  //     email: email,
  //     message: message,
  //   };

  //   const res = await axios.post(`${apiUrl}/mail/contactMe`, payload);
  //   if(res){
  //     setIsSubmit(false)
  //   }
  // };

  return (
    <div className="flex flex-col p-4 rounded-lg    gap-4 winky-sans">
      <fieldset className=" flex flex-col bg-white justify-center gap-2 font-normal text-black rounded-md card-section  border">
        <legend className="font-semibold ml-auto text-2xl  ">My Contact</legend>
        <div className="text-black flex flex-col gap-2 p-4">
          <a className="flex gap-2 items-center" href="https://github.com/PadThaicreator" target="_blank" >
            <Github size={36} className=" rounded-full p-2 bg-gray-200" />
            <div>PadThaicreator</div>
          </a>
          <a className="flex gap-2 items-center" href="https://www.facebook.com/PPNA62" target="_blank">
            <Facebook
              size={36}
              className="rounded-full p-2 bg-blue-200 text-blue-500"
            />
            <div> Poonnawit Poosakul</div>
          </a>
          <a className="flex gap-2 items-center" href="https://www.instagram.com/pp_namo/" target="_blank">
            <Instagram
              size={36}
              className="rounded-full p-2 bg-pink-200 text-pink-500"
            />
            <div> pp_namo</div>
          </a>
        </div>
      </fieldset>
      
    </div>
  );
};
