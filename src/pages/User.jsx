import React from 'react';
import { useContext } from 'react';
import { Globalcontext } from './Globalcontext';

const User = () => {
   const {globalState , setGlobalState} = useContext(Globalcontext);
   console.log(setGlobalState);
  return (
    <div>
       <div>{globalState.username}</div>
       <div>Plaese login to Admin account to view all users.</div>
       <div>Adimin details, <br />
       username: admin <br />
       password: 1234
       </div>
    </div>
  )
}

export default User