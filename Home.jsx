

import React,{useEffect,useState}from'react'
import axios from "axios"

const Home=() => {
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[role,setRole]=useState("")
    let[branch_id,setBranch_Id]=useState("")
    let[password,setPassword]=useState("")

    let formHandle=(e) =>{
        e.preventDefault()
        let payload={name,email,role,branch_id,password}
        axios.post("http://localhost:8080/user",payload)
        .then(()=>{
            console.log("Data has been added")
            
        })
    }
    return (
        <div>
                 <form action="">

                     <label>Name</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>

                     <label >Email</label>
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />

                    <label htmlFor="role">role</label>
                     <input type="text" value={role} onChange={(e)=>{setRole(e.target.value)}}  />

                   <label htmlFor="">branch_Id</label>
                   <input type="number" value={branch_id} onChange={(e)=>{setBranch_Id(e.target.value)}} />
 
                   <label>Password</label>
                   <input type="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <input type="submit" value="Register" onCLick={formHandle}/>

        </form>
        </div>
    )
}
export default Home
