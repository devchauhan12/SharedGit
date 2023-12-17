import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './PR-Routing/Components/Home';
// import About from './PR-Routing/Components/About';
// import AddUser from './PR-Routing/Components/AddUser';
// import { useEffect, useState } from 'react';
// import UserList from './PR-Routing/Components/UserList';

export default function BackUp() {
    // const [data, setData] = useState([])
    // const [state, setState] = useState(true)
    // useEffect(() => {
    //   const localUsers = JSON.parse(localStorage.getItem('users'))
    //   if (localUsers && localUsers.length > 0) {
    //     setData(localUsers)
    //   } else {
    //     localStorage.setItem('users', JSON.stringify([]))
    //   }
    // }, [])
    // useEffect(() => {
    //   localStorage.setItem('users', JSON.stringify(data))
    // }, [data])
    return (
        <>
            {/* <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/addUser' element={<AddUser data={data} setData={setData} state={state} setState={setState} />} />
                    <Route path='/User-List' element={<UserList data={data} setData={setData} state={state} setState={setState} />} />
                </Routes>
            </BrowserRouter> */}
        </>
    )
}
