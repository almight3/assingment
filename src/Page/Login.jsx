import {useState} from 'react';
import axios from "axios";
function Login() {
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   console.log(email,password)
   const handelSubmit = async(e)=>{
      e.preventDefault();
      await axios.post(`http://localhost:3030/users/${email}/login`,{
        password
      });
   }
  return (
    <form className='w-2/5 h-3/5 mt-14	flex flex-col mx-auto bg-slate-300' onSubmit={(e)=>handelSubmit(e)}>
        <label className='ml-5'>Email</label>
        <input type="email"  className='w-3/4 mx-auto' name="email" onChange={(e)=>setEmail(e.target.value)}required/>
        <label className='ml-5'>Password</label>
        <input type="password"  className='w-3/4 mx-auto' name="password" 
        onChange={(e)=>setPassword(e.target.value)} required/>
        <button type='submit' className='bg-black p-3 w-20 text-white mx-auto m-2'>signup</button>
    </form>
  )
}

export default Login