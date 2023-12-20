import Image from "next/image";

import instagram from "../public/assets/instagram.png";
import logo from "../public/assets/logo.png";
import youtube from "../public/assets/youtube.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-5 bg-black py-10 text-center text-white">
      <Image src={logo} alt="logo" className="h-auto w-80" />
      <section className="flex w-full flex-row items-center justify-center gap-5">
        <div className="h-1 w-[30%] bg-red" />
        <section className="flex w-fit gap-5">
          <a
            href="https://www.instagram.com/jt_izzy/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Image
              src={instagram}
              alt="instagram"
              className="h-8 w-auto duration-300 ease-in-out hover:scale-110"
            />
          </a>
          <a
            href="https://www.youtube.com/@evolve4907"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Image
              src={youtube}
              alt="youtube"
              className="h-8 w-auto duration-300 ease-in-out hover:scale-110"
            />
          </a>
        </section>
        <div className="h-1 w-[30%] bg-red" />
      </section>
      <section>
        <p>
          Design and Development by{" "}
          <a
            href="https://www.borsosmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Borsos Media
          </a>
        </p>
        <p>Evolve - All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
