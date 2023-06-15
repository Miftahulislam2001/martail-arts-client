import { Link } from "react-router-dom";


const Footer = () => {
    return (
        
<div>
            <footer className="footer p-10 bg-[#2F2F2F] text-[#b6b6ad] font-semibold">
                <div>
                    <Link to='/'><img className='w-40 h-14' src="https://kodesolution.com/html/2018/martialarts-html/demo/images/logo-wide-white.png" alt="" /></Link>
                    <p>Maecenas tristique in ipsum et commodo lorem</p>
                    <label className="label">
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="Email" className="input w-full pr-16" />
                        <button className="btn bg-[#d3294e] text-white absolute top-0 right-0  rounded-l-none">Subscribe</button>
                    </div>
                </div>
                <div>
                    <span className="footer-title">About Us</span>
                    <a href="/" className="link link-hover">Home</a>
                    <a href="/gallery" className="link link-hover">Gallery</a>
                    <a href="/classes" className="link link-hover">Classes</a>
                    <a href="/instructor" className="link link-hover">Instructor</a>
                </div>
                <div>
                    <span className="footer-title">Transaction</span>
                    <a href="/contact" className="link link-hover">Content</a>
                    <a href="/payment" className="link link-hover">Payment</a>
                    <a href="/blog" className="link link-hover">Blog</a>

                </div>
                <div>
                <span className="footer-title">Contact</span>
                    <a href="/AllToys" className="link link-hover">Awal Road, Dhaka</a>
                    <a href="/AddToys" className="link link-hover">+088 0195476897</a>
                    <a href="/MyToys" className="link link-hover">userinfo@gmail.com</a>
                 
                </div>
            </footer>

            <footer className="footer footer-center p-4 bg-[#1A1A1A] text-[#686666]">
                <div>
                    <p>Copyright © 2023 - All right reserved by Miftahul islam</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;