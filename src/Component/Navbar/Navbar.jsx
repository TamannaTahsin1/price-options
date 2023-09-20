import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    // useState
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav className="bg-sky-300 p-6">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true 
                    ?
                    <AiOutlineClose></AiOutlineClose> 
                    : 
                    <AiOutlineMenu className="text-xl "></AiOutlineMenu>
                }

            </div>
            <ul className={`md:flex gap-5 absolute ${open ? 'top-14' : '-top-60 md:static'} duration-1000 bg-sky-300 text-black px-6`}>
            {
                routes.map(route => <Link  key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;