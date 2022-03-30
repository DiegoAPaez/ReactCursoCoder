import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div>
            <div className='flex flex-row bg-white pt-1 justify-between max-w-full bg-orange-300'>
                <a href='#'><h1 className='text-3xl italic font-bold p-4'>MasaMadre<span className='normal-case text-base font-light'>STORE</span></h1></a>
                <nav className='list-none flex self-center mr-5'>
                    <li><a className='p-3 text-lg font-semibold' href='#'>Insumos</a></li>
                    <li><a className='p-3 text-lg font-semibold' href='#'>Bazar</a></li>
                    <li><a className='p-3 text-lg font-semibold' href='#'>Cursos</a></li>
                    <CartWidget/>
                </nav>
            </div>
        </div>
    )
}
export default NavBar