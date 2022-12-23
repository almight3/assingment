import {useState} from 'react';
import axios from "axios";
function Signup() {
  const [formData,setFormData] = useState({
    firstName:"",
    LastName:"",
    email:"",
    password:""
  })
  const[error,setError] = useState('')
  
  const handelFormData =(e)=>{
    const {value,name} = e.target
    setFormData({...formData,[name]:value})
    }
  const handelSubmit = async(e)=>{
        e.preventDefault();
        console.log("function call")
       
        if(formData.firstName){
            formData.firstName.split('').forEach(e=>{
                if(e=="$" || e=="@" || e=="&"){
                    setError("FirstName can not have special charcter")
                }
                
            })
        }

        await axios.post(`http://localhost:3030/signup`,{
          formData
        })  
  }
  console.log(formData)
  return (
    <form className='w-2/5 h-3/5 mt-14	flex flex-col mx-auto bg-slate-300' onSubmit={(e)=>handelSubmit(e)}>
        <label className='ml-5'>FirstName</label>
        <input type="text" className='w-3/4	mx-auto' name="firstName" 
         onChange={(e)=>handelFormData(e)} required/>
        {error.length >2 && <p className='text-red'>{error}</p>} 
        <label className='ml-5'>LastName</label>
        <input type="text"  className='w-3/4 mx-auto' name="lastName"
        onChange={(e)=>handelFormData(e)} required/>
        <label className='ml-5'>Email</label>
        <input type="email"  className='w-3/4 mx-auto' name="email" onChange={(e)=>handelFormData(e)}required/>
        <label className='ml-5'>Password</label>
        <input type="password"  className='w-3/4 mx-auto' name="password" 
        onChange={(e)=>handelFormData(e)} required/>
        <button type='submit' className='bg-black p-3 w-20 text-white mx-auto m-2'>signup</button>
    </form>
  )
}

export default Signup