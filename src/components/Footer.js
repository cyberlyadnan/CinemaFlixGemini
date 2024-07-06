import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 text-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-4 lg:mb-0">
                        <h4 className="text-lg font-bold mb-4">Company</h4>
                        <ul>
                            <li><Link to="/" className="hover:text-gray-400">About</Link></li>
                            <li><Link to="/" className="hover:text-gray-400">Jobs</Link></li>
                            <li><Link to="/" className="hover:text-gray-400">Press</Link></li>
                            <li><Link to="/" className="hover:text-gray-400">Legal</Link></li>
                            <li><Link to="/" className="hover:text-gray-400">Privacy</Link></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-4 lg:mb-0">
                        <h4 className="text-lg font-bold mb-4">Account</h4>
                        <ul>
                            <li><Link to="/" className="hover:text-gray-400">Account</Link></li>
                            <li><Link to="/" className="hover:text-gray-400">Redeem Gift Cards</Link></li>
                            <li><Link to="/" className="hover:text-gray-400">Privacy</Link></li>
                            <li><Link to="/" className="hover:text-gray-400">Speed Test</Link></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-4 lg:mb-0">
                        <h4 className="text-lg font-bold mb-4">Media Center</h4>
                        <ul>
                            <li><Link to="/" className="hover:text-gray-400">Help Center</Link></li>
                            <li><Link to="/" className="hover:text-gray-400">Investor Relations</Link></li>
                            <li><Link to="/" className="hover:text-gray-400">Terms of Use</Link></li>
                            <li><Link to="/" className="hover:text-gray-400">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-4 lg:mb-0">
                        <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
                        <ul>
                            <li><Link to="https://github.com/cyberlyadnan" className="hover:text-gray-400">GitHub</Link></li>
                            <li><Link to="https://leetcode.com/u/cyberlyadnan/" className="hover:text-gray-400">Leetcode</Link></li>
                            <li><Link to="https://www.linkedin.com/in/adnanahmad9334/" className="hover:text-gray-400">LinkedIn</Link></li>
                            <li><Link to="https://www.instagram.com/cyberlyadnan/" className="hover:text-gray-400">Instagram</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
