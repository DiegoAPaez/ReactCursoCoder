import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <div className='flex flex-row bg-white pt-1 justify-between max-w-full bg-orange-300'>
                <NavLink to='/'><h1 className='text-4xl italic font-bold p-4  m-0'>MasaMadre<span className='normal-case text-base font-light'>STORE</span></h1></NavLink>
                <nav className='list-none flex self-center mr-5'>
                    <li><NavLink to='*' className='p-3 text-lg font-semibold' >Insumos</NavLink></li>
                    <li><NavLink to='*' className='p-3 text-lg font-semibold'>Bazar</NavLink></li>
                    <li><NavLink to='*' className='p-3 text-lg font-semibold' >Cursos</NavLink></li>
                    <CartWidget/>
                </nav>
            </div>
        </div>
    )
}
export default NavBar