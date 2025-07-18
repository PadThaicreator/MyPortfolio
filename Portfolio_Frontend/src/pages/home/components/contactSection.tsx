import axios from "axios";
import { Facebook, Github, Instagram } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [subject, setSubject] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmit , setIsSubmit] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSendEmail = async () => {
    if (!subject || !email || !message) {
      return;
    }
    setIsSubmit(true)
    const payload = {
      subject: subject,
      email: email,
      message: message,
    };

    const res = await axios.post(`${apiUrl}/mail/contactMe`, payload);
    if(res){
      setIsSubmit(false)
    }
  };

  return (
    <div className="flex flex-col p-4 rounded-lg    gap-4 winky-sans">
      <fieldset className=" flex flex-col bg-white justify-center gap-2 font-normal text-black rounded-md card-section  border">
        <legend className="font-semibold ml-auto text-2xl  ">My Contact</legend>
        <div className="text-black flex flex-col gap-2 p-4">
          <div className="flex gap-2 items-center">
            <Github size={36} className=" rounded-full p-2 bg-gray-200" />
            <div>PadThaicreator</div>
          </div>
          <div className="flex  gap-2  items-center">
            <Facebook
              size={36}
              className="rounded-full p-2 bg-blue-200 text-blue-500"
            />
            <div> Poonnawit Poosakul</div>
          </div>
          <div className="flex  gap-2  items-center">
            <Instagram
              size={36}
              className="rounded-full p-2 bg-pink-200 text-pink-500"
            />
            <div> pp_namo</div>
          </div>
        </div>
      </fieldset>
      <fieldset className="card-section   rounded-md border p-2 text-black font-normal  gap-2">
        <legend className="mx-auto font-semibold text-2xl">Contact Me</legend>
        <div className="flex  flex-col text-black gap-2">
          <div className="flex flex-1 flex-col gap-2">
            <label>Your Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-lg p-2 border-gray-300 border"
            />
          </div>
          <div className="flex  flex-col gap-2">
            <label>Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-white rounded-lg p-2 border-gray-300 border"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <label>Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white rounded-lg p-2 resize-none border-gray-300 border"
              rows={5}
            >
              {message}
            </textarea>
          </div>
        <div className={`flex items-center justify-center ${isSubmit ? "disabled:true opacity-30" : ""}` } >
            <div
              onClick={handleSendEmail}
              className="bg-amber-500 p-2 px-4 rounded-lg cursor-pointer text-white"
            >
              { isSubmit ? "Submitting" : "Submit"}
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
