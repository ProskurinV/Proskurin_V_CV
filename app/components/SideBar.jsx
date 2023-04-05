import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsTelegram, BsFillTelephoneFill } from "react-icons/bs";
import profilPic from "../images/Volodymyr_P.jpg";

export const Sidebar = ({ data }) => {
  const { name, role, summary, body, contacts } = data;
  return (
    <div className="bg-cadetblue flex flex-col content-between w-full h-auto  sm:justify-around ">
      <div className="text-white flex flex-col p-10 items-center">
        <Image
          priority
          src={profilPic}
          width={300}
          height={300}
          className="rounded-full h-full mb-6"
          alt="Picture of me"
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-8">{role}</h2>
        <p className="mb-2 text-center">{summary}</p>
        <p className="mb-2">{body}</p>
        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="text-center mb-2">CONTACTS</h3>
          <ul className="flex justify-center gap-4 cursor-pointer text-2xl ">
            {contacts.map((contact, index) => (
              <li key={index}>
                {index === 0 && (
                  <a
                    href={`tel:${contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFillTelephoneFill />
                  </a>
                )}
                {index === 1 && (
                  <a
                    href={`mailto:${contact}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineMail />
                  </a>
                )}
                {index === 2 && (
                  <a
                    href="https://github.com/ProskurinV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                )}
                {index === 3 && (
                  <a
                    href="https://www.linkedin.com/in/volodymyr-proskurin-a85b7b24a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                )}
                {index === 4 && (
                  <a
                    href="https://t.me/p_volodymyr_g"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTelegram />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
