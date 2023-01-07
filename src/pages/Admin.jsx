import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { Globalcontext } from './Globalcontext';

const Admin = () => {
    const [list , setList] = useState([]);
    const {globalState , setGlobalState} = useContext(Globalcontext);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/user',{},{
            Headers:{
                token: 'bearer '+globalState.accessToken
            }
        }).then((res)=>{
            setList(res)
        })
    },[globalState.accessToken])
    console.log(setGlobalState);
  return (
    <>
    <div>Welcome Admin</div>
    <div>User details</div>
    <div>{JSON.stringify(list)}</div>
    <div></div>
    </>
  )
}

export default Admin