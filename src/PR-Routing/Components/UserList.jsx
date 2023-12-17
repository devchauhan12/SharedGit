import React from 'react'
import '../Assets/Routing.css'
import { Container } from 'react-bootstrap'


export default function UserList({ data, setData, state, setState }) {
    function deleteData(id) {
        let data = JSON.parse(localStorage.getItem('users'))
        data.splice(id, 1)
        setData(data);
    }
    return (
        <>
            <Container className='mt-5'>
                <h1 className='text-white'>User List</h1>
                <div className='mt-5 rounded-4 overflow-hidden '>
                    <table className="table table-dark mb-0 " >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((e, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.address}</td>
                                            <td>
                                                <button className='m-0 me-1 p-2' onClick={(e) => deleteData(i)} disabled={!state}>Delete</button>
                                                {/* <button className='m-0 p-2' onClick={(e) => editData(i)} disabled={!state}>Edit</button> */}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    )
}
