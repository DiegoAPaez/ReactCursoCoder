import { useState } from 'react'

const Form = ({setUserInfo}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [showForm, setShowForm] = useState(true)




    const handleSubmit = (e) => {
        e.preventDefault()
        const buyer = {
            name: firstName + " " + lastName,
            phone: phone,
            email: email
        }
        setUserInfo(buyer);
        setShowForm(false)
    }

    const handleKeyDown = (e) => {
        if(e.code === 'Space') {
            e.preventDefault()
        }
    }

    const formChange = () => {
        setShowForm(true)
    }

    return (
        <div>
            {showForm && <form onSubmit={handleSubmit}>
                <h2>Datos del comprador</h2>
                <fieldset>
                    <div className='my-2 text-left'>
                        <label className='px-2' htmlFor="firstName">Nombre:</label>
                        <input id="firtsName" type="text" 
                        onChange={(e) => setFirstName(e.target.value)}
                        onKeyDown={handleKeyDown}></input>
                    </div>
                    <div className='my-2 text-left'>
                        <label className='px-2' htmlFor="lastName">Apellido:</label>
                        <input id="lastName" type="text" 
                        onChange={(e) => setLastName(e.target.value)}
                        onKeyDown={handleKeyDown}></input>
                    </div>
                    <div className='my-2 text-left'>
                        <label className='px-2' htmlFor="phone">Telefono:</label>
                        <input id="phone" type="text" 
                        onChange={(e) => setPhone(e.target.value)}
                        onKeyDown={handleKeyDown}></input>
                    </div>
                    <div className='my-2 text-left'>
                        <label className='px-2' htmlFor="email">Email:</label>
                        <input id="email" type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={handleKeyDown}></input>
                    </div>  
                </fieldset>
                <button className="text-center border-solid text-white bg-blue-500 p-2 mx-3 mb-5 rounded" type='submit'>Confirmar Datos</button>
            </form>}
            {!showForm && <div>
                <h2 className='mx-2'>Datos del comprador</h2>
                <p className='my-2 ml-2 text-left'>Nombre: {firstName}</p>
                <p className='my-2 ml-2 text-left'>Apellido: {lastName}</p>
                <p className='my-2 ml-2 text-left'>Telefono: {phone}</p>
                <p className='my-2 ml-2 text-left'>Email: {email}</p>
                <button className="text-center border-solid text-white bg-red-500 p-2 mx-3 mb-5 rounded" onClick={formChange}>Modificar Datos</button>
            </div>}
        </div>
    )
}
export default Form


