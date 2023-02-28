import React,{useEffect,useState}from'react'
import axios from 'axios'

const Fetch=()=>
{
    let[data,setData]=useState("")
    let[Id,setId]=useState("")
    let[btn,setBtn]=useState("")

    useEffect(()=>{
       axios.get('http://localhost:8082/user/${btn}')
        .then((resp)=>{
        setData(resp.data.body);
       })
    },[btn])

    let formHandle=()=>{
    setBin(id)
}
return(
    <div>
     <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}}/>
<button onClick={formHandle}>Submit</button>
{data.name}
  </div>
)
}

export default Fetch