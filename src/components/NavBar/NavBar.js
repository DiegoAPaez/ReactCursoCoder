import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <div className='barra'>
                <a href='#'><h1>MasaMadre Store</h1></a>
                <nav className='navegacion'>
                    <li><a className='navegacion__enlace' href='#'>Insumos</a></li>
                    <li><a className='navegacion__enlace' href='#'>Bazar</a></li>
                    <li><a className='navegacion__enlace' href='#'>Cursos</a></li>
                </nav>
            </div>
        </div>
    )
}
export default NavBar