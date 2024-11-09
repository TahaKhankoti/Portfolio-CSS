import Link from 'next/link';
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link href={'/'} className="navbar-brand">
                    <span className="navbar-title">TAHA-KHAN-PORTFOLIO</span>
                </Link>
                <nav className="navbar-menu">
                    <Link href={'/'} className="navbar-link">Home</Link>
                    <Link href={'/About'} className="navbar-link">About</Link>
                    <Link href={'/Contact'} className="navbar-link">Contact</Link>
                </nav>
                <a href="/assets/Taha_Khan_CV.pdf" download>
                    <button className="navbar-button">
                        <span className="navbar-button-text">Resume</span>
                        <FaDownload size={20} />
                    </button>
                </a>
            </div>
        </header>
    )};
