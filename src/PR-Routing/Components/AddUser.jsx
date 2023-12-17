import React, { useEffect, useState } from 'react'
import '../Assets/Routing.css'

export default function AddUser({ data, setData, state, setState }) {
    const initial = {
        name: '',
        email: '',
        address: ''
    }
    const [input, setInput] = useState(initial)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const localUsers = JSON.parse(localStorage.getItem('users'))
        if (localUsers && localUsers.length > 0) {
            setData(localUsers)
        } else {
            localStorage.setItem('users', JSON.stringify([]))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(data))
    }, [data])

    function validate() {
        let error = {}
        if (input.name.length < 1) {
            error.name = 'Enter Your Name'
        }
        if (input.email.length < 1) {
            error.email = 'Enter Your Email'
        }
        if (input.address.length < 1) {
            error.address = 'Enter a Address'
        }
        return error;
    }
    const show = (e) => {
        e.preventDefault()
        const checkErrors = validate()
        if (Object.keys(checkErrors).length > 0) {
            setErrors(checkErrors)
        } else {
            setErrors({})
            setData([...data, input])
            setInput(initial)
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }
    function editData(id) {
        if (state) {
            setState(false)
            let data = JSON.parse(localStorage.getItem('users'))
            setInput(data[id]);
        } else {
            let data = JSON.parse(localStorage.getItem('users'))
            let i = data.findIndex(x => x.email === input.email);
            data.splice(i, 1, input)
            setData(data);
            setState(true)
            setInput(initial)
        }
    }

    return (
        <div className="container1">
            <div className="inputbox">
                <input type="text" name='name' value={input.name} onChange={handleChange} autoComplete="off" />
                <span>Username</span>
                <i></i>
            </div>
            <p>{errors.name}</p>
            <div className="inputbox">
                <input type="email" name='email' value={input.email} onChange={handleChange} />
                <span>Email</span>
                <i></i>
            </div>
            <p>{errors.email}</p>
            <div className="inputbox">
                <textarea name='address' value={input.address} onChange={handleChange} />
                <span>Address</span>
                <i></i>
            </div>
            <p>{errors.address}</p>
            {
                state ? <button onClick={show} >Submit</button> :
                    <button onClick={editData} >Update</button>
            }
        </div>
    )
}
