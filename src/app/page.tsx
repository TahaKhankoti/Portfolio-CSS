import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="container">
        <div className="content">
          <h1 className="title">
            HELLO I AM <br />
            <span className="name">TAHA KHAN</span>
          </h1>
          <p className="description">
            GENERATIVE AI CHATBOT, FLUTTER MOBILE APP & MERN STACK WEB Developer
          </p>

          <div className="social-icons">
            <a href="https://github.com/TahaKhankoti" target="_blank" rel="noopener noreferrer" className="icon">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/taha-khan-823900291/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaLinkedin size={40} />
            </a>
            <a href="https://www.instagram.com/tk_tahakhan04" target="_blank" rel="noopener noreferrer" className="icon">
              <FaInstagram size={40} />
            </a>
            <a href="https://www.facebook.com/share/15H57tP2QR/" target="_blank" rel="noopener noreferrer" className="icon">
              <FaFacebook size={40} />
            </a>
          </div>

          <div className="cta-buttons">
            <Link href="/assets/Taha_Khan_CV.pdf" className="btn resume-btn">
              <span className="text">Resume </span>
              <FaDownload size={20} />
            </Link>
            <Link href="/Contact" className="btn contact-btn">
              <span className="text">Contact</span>
              <FaPhone size={20} />
            </Link>
          </div>
        </div>

        <section className="profile-section">
          <div className="profile-wrapper">
            <Image width={2000} height={2000} src="/assets/Logo.png" alt="Profile" className="profile-image" />
          </div>
        </section>

        <div className="background-image">
          <Image width={1000} height={1000} src="/assets/Vector 3.png" alt="Vector" className="vector-image" />
        </div>
      </main>
    </>
  );
}