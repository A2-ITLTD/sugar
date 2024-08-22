import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import linkedin from '../Images/linkedin.png';
import pinterest from '../Images/pinterest.png';
import twitter from '../Images/twitter.png';
import whatsapp from '../Images/whatsapp.png';
import youtube from '../Images/youtube.png';
import alibaba from '../Images/alibaba_logo.png';
const Footer = () => {
    return (
        <div className="w-full mt-16">
           <footer className="footer bg-base-200 text-base-content py-10 px-5 md:px-28">
            <nav>
                <h6 className="footer-title text-[#045364] text-xl">Services</h6>
                <a className="link link-hover">Brown Sugar</a>
                <a className="link link-hover">Refined Sugar</a>
                <a className="link link-hover">Renuka</a>
                <a className="link link-hover">Mitr Phol Pure Refined Sugar</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#045364] text-xl">Company</h6>
                <a className="link link-hover">Privacy & Policy</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#045364] text-xl">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-5 md:px-28 py-4">
            <aside className="grid-flow-col items-center">
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current text-orange-400">
                <path
                    d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                </svg>
                <p>
                ACME Industries Ltd.
                <br />
                © Copyright 2024 | Sugar Factory | All Rights Reserved
                </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                    <img src={facebook} className='w-10' />
                    <img src={instagram} className='w-10' />
                    <img src={twitter} className='w-10' />
                    <img src={whatsapp} className='w-10' />
                    <img src={pinterest} className='w-10' />
                    <img src={linkedin} className='w-10' />
                    <img src={youtube} className='w-10' />
                    <img src={alibaba} className='w-10' />
                </div>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;