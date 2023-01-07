import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [uname, setUname] = useState();
    const [pass, setPass]=useState();
    const [mail, setMail] = useState();
    const [mob, setMob] = useState('');
    const [ctry, setCtry] = useState('');
    const [st , setSt] = useState('');
    const [des , setDes] = useState('');
    const [img, setImg] = useState('');
    const [status , setStatus] = useState(false);
    const [fail ,setFail] = useState(false);
    function submitClick (){
       axios.post('http://localhost:5000/api/auth/register',{
          username:uname,
          email:mail,
          password:pass,
          mobile:mob,
          country:ctry,
          state:st,
          Description:des,
          image:img

       }).then(async (res)=>{
          if(res.data){
            setStatus(true);
            setFail(false);
            document.getElementById('loginclick').click();
          }else{
            setFail(true);
          }

       }).catch((err)=>{
          setFail(true);
          console.log(err)});
    }
    return (
      <div id='register'>
         <form>
         <label htmlFor="uname">Username</label><br />
         <input type="text" id='uname' onChange={e=>setUname(e.target.value)} required/><br /><br />
         <label htmlFor="email">Email</label><br />
         <input type="text" id='email' onChange={e=>setMail(e.target.value)} required/><br /><br />
         <label htmlFor="pass">Password</label><br />
         <input type="password" id='pass'  onChange={e=>setPass(e.target.value)} required/><br />
         <label htmlFor="mob">Mobile Number</label><br />
         <input type="text" id='mob' className='field' onChange={e=>setMob(e.target.value)} required/><br /><br />
         <label htmlFor="ctry">Country</label><br />
         <input type="text" id='ctry' className='field' onChange={e=>setCtry(e.target.value)} required/><br /><br />
         <label htmlFor="st">State</label><br />
         <input type="text" id='st' className='field' onChange={e=>setSt(e.target.value)} required/><br /><br />
         <label htmlFor="des">Description</label><br />
         <input type="text" id='des' className='field' onChange={e=>setDes(e.target.value)} required/><br /><br />
         <label htmlFor="img">Image url</label><br />
         <input type="text" id='img' className='field' onChange={e=>setImg(e.target.value)} required/><br /><br />

         <div id='ls' onClick={submitClick}>Rgister</div>
         
         </form>
         {status && (<><span>Registration Sucessfull</span></>)}
         {fail && <span style={{color:'red'}}>Registration failed, Try again</span>}
         <Link to='/' id='loginclick'></Link>
      </div>
    )
}

export default Register