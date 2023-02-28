import axios from "axios";
import React,{useEffect,useState}from "react";
import{Link,useNavigate,useParams}from "react-router-dom";
function EditUser(){
    let navigate=useNavigate();
    const{id}=useParams();
    const[user,setUser]=useState({
        name: "",
        username: "",
        email: "",
    });

 const{name,username,email}=user;

 const onInputChange=(e) =>{
    setUser({...user,[e.target.name]:e.target.value});
};
useEffect(()=>{
    loadUser();

},[]);


const onSubmit=async(e) =>{
    e.preventDefault();
    await axios.put('http://localhost:8081/user/${id}',user);
    navigate("/");

};

const loadUser=async() =>
{
    const result=await axios.get('http://localhost:8081/user/$(id)');
    setUser(result.data);
};
return (
    <div className="container">
        <div className="row">
            <div className="col-mid- offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit User</h2>

            
            <form onSubmit={(e)=> onSubmit(e)}>
                <div className="mb-3">
                    <label htmlfor="Name" className="for-label">
                        Name
                    </label>
                <input
                   type={"text"}
                   className="form-control"
                   placeholder="Enter your name "
                   name="name"
                   value={name}
                     onChange={(e)=>onInputChange(e)}
                />
                </div>
                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">
                         Username
                    </label>
                     <input
                       type={"text"}
                       className="form-control"
                       placeholder="Enter Your username"
                       name="username"
                       value={username}
                       onChange={(e) => onInputChange(e)}
                          />
                     
                </div>
                <div ClassName="mb-3">
                    <label htmlFor="Email" className="for-label">
                        E-mail
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeHolder="Enter Your e-mail address"
                        name="email"
                        value="{email}"
                        onChange={(e) => onInputChange(e)}
                        />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link ClassName="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
            </form>
            </div>
        </div>
    </div>
);

}
export default EditUser;







