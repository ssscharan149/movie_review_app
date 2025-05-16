import "./Register.css"
import {useForm} from "react-hook-form"
import axios from "axios"

function Register() {
  const { register, handleSubmit,formState:{errors}} = useForm();

  let addNewUser=(userCredObj)=>{
    axios.post("http://localhost:3000/register",userCredObj)
    .then((response)=>{
      console.log(response)
    })
    .catch()
  }

  return (
    <div className="container">
      <h1 className="text-center display-4 heading">Sign Up</h1>
      <form className="form" onSubmit={handleSubmit(addNewUser)}>
        <div className="">
          <label htmlFor="us" className="form-label display-6 label">Username</label>
          <input type="text" {...register("username",{required:true})} id="us" className="form-control"/>
          {errors.username?.type==="required" && <p className="text-danger">* username is required</p>}
        </div>
        <div className="">
          <label htmlFor="pw" className="form-label display-6 label">Password</label>
          <input type="password" {...register("password",{required:true})} id="pw" className="form-control"/>
          {errors.password?.type==="required" && <p className="text-danger">* password is required</p>}
        </div>
        <button type="submit" className="btn reg">Register</button>
      </form>
    </div>
  )
}
export default Register