


import useInViewAnimate from '../hooks/useInViewAnimate';
import brand from '../Images/brand.png';
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

function Footer() {
    const { ref, containerClassName, transitionClassName } = useInViewAnimate({ threshold: 0.2 });

    return (
        <>
            <span className="block w-full h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] animate-gradient"></span>
            <footer
                ref={ref}
                className={`bg-black px-4 md:px-8 lg:px-20 text-white py-10 ${containerClassName} ${transitionClassName}`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Description */}
                        <div className="md:col-span-1">
                            <img src={brand} alt="AI-StarUP Logo" className="w-16 h-16 mb-4" loading="lazy" />
                            <p className="text-sm text-gray-400">
                                Butun dunyo bo'ylab ishlanuvchilarga AI quvvatli yordam bilan kodlashni inqilob qilish.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#5200FF] bg-clip-text text-transparent">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Bosh sahifa</a></li>
                                <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">Biz haqimizda</a></li>
                                <li><a href="#marketing" className="text-gray-400 hover:text-cyan-400 transition-colors">Xususiyatlar</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Aloqa</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#5200FF] bg-clip-text text-transparent">
                                Biz bilan bog'laning
                            </h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                    <FaDiscord size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#5200FF] bg-clip-text text-transparent">
                                Aloqa
                            </h3>
                            <p className="text-sm text-gray-400 mb-2">Email: info@ai-starup.com</p>
                            <p className="text-sm text-gray-400">Phone: +1 (123) 456-7890</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">Copyright © 2024 CodesAi. Barcha huquqlar himoyalangan.</p>
                        <p className="text-sm text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors">
                            Foydalanish shartlari va Maxfiylik siyosati
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;