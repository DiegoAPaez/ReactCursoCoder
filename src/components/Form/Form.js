import { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')




    const handleSubmit = (e) => {
        e.preventDefault()
        const buyer = {
            name: firstName + " " + lastName,
            phone: phone,
            email: email}
        console.log(buyer)
    }

    const handleKeyDown = (e) => {
        if(e.code === 'Space') {
            e.preventDefault()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Datos del usuario</h2>
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
        </form>
    )
}
export default Form


