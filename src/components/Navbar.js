import { useState, useRef } from 'react';
import AnchorLinks from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage, className = "", closeMenu = null }) => {
    const lowercasePage = page.toLowerCase();
    return (
        <AnchorLinks 
            href={`#${lowercasePage}`}
            onClick={() => {
                setSelectedPage(lowercasePage);
                if (closeMenu) closeMenu();
            }}
            className={`${selectedPage === lowercasePage ? "text-purple-700 font-bold" : "text-gray-100 hover:text-yellow-400"} transition duration-300 ${className}`}
        >
            {page}
        </AnchorLinks>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width:748px)");
    const navbarBackground = isTopOfPage ? "bg-transparent" : "bg-deep-blue shadow-lg";
    const menuRef = useRef(null);

    const closeMenu = () => setIsMenuToggled(false);

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6 transition-all duration-300`}>
            <div className='flex items-center justify-between mx-auto w-[90%]'>
                <h4 className='font-playfair text-3xl font-bold text-white'>MS</h4>
                
                {isAboveSmallScreen ? (
                    <div className='flex justify-between gap-16 font-opensans text-lg font-semibold'>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />                    
                    </div>
                ) : (
                    <div className='flex items-center'>
                        <button 
                            className='rounded-full bg-purple-600 p-2 hover:bg-purple-700 transition-colors duration-300 shadow-md'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                            aria-label="Toggle menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z" fill="white"/>
                            </svg>
                        </button>
                        
                        {!isAboveSmallScreen && isMenuToggled && (
                            <div 
                                ref={menuRef} 
                                className='fixed right-0 bottom-0 h-full bg-gradient-to-b from-purple-900 to-gray-900 w-full md:w-72 shadow-xl transition-all duration-500 ease-in-out transform translate-x-0 opacity-100'
                            >
                                <div className='flex justify-end p-6'>
                                    <button 
                                        onClick={closeMenu}
                                        className="p-2 rounded-full hover:bg-purple-800 transition-colors duration-300"
                                        aria-label="Close menu"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className='flex flex-col gap-8 px-12 text-xl text-white'>
                                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className='py-2 border-b border-purple-700' closeMenu={closeMenu} />
                                    <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className='py-2 border-b border-purple-700' closeMenu={closeMenu} />
                                    <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className='py-2 border-b border-purple-700' closeMenu={closeMenu} />
                                    <Link page="Experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className='py-2 border-b border-purple-700' closeMenu={closeMenu} />
                                    <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} className='py-2 border-b border-purple-700' closeMenu={closeMenu} />  
                                    <div className="mt-8 flex justify-center space-x-4">
                                        <a className="w-8 h-8 hover:scale-105 hover:shadow-sm hover:shadow-purple-600 transition duration-500" href="https://www.linkedin.com/in/ranvijay-kumar-825457255/" target="_blank" rel="noreferrer">
                                            <img alt="linkedin-link" src="/linkedin.png" />
                                        </a>                                        
                                        <a className="transition hover:scale-105 hover:shadow-sm hover:shadow-purple-600 duration-500" href="https://www.github.com/rvk7021" target="_blank" rel="noreferrer">
                                            <img alt="github-link" src="/github.jpeg" className="w-8 h-8 md:hover:scale-110 rounded-md" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
