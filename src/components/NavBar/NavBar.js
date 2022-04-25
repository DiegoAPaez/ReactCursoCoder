import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"
import { getCategories } from "../../asyncmock"
import { useState , useEffect} from "react"


const NavBar = () => {
    const [categories , setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return (
        <div>
            <div className='flex flex-row bg-white pt-1 justify-between max-w-full bg-orange-300'>
                <Link to='/'><h1 className='text-4xl italic font-bold p-4  m-0'>MasaMadre<span className='normal-case text-base font-light'>STORE</span></h1></Link>
                <nav className='list-none flex items-center mr-5'>
                    {/* <li><NavLink to='*' className='p-3 text-lg font-semibold' >Insumos</NavLink></li>
                    <li><NavLink to='*' className='p-3 text-lg font-semibold'>Bazar</NavLink></li>
                    <li><NavLink to='*' className='p-3 text-lg font-semibold' >Cursos</NavLink></li> */}
                    { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                    className='p-3 text-lg font-semibold'
                    >{cat.description}</NavLink>)}
                    <CartWidget/>
                </nav>
            </div>
        </div>
    )
}
export default NavBar