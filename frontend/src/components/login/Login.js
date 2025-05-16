import "./Login.css"
import {useForm} from "react-hook-form"
function Login() {
  const { register, handleSubmit,formState:{errors}} = useForm();
  return (
    <div className="container">
      <h1 className="text-center display-4 login">Log In</h1>
      <form className="form" onSubmit={handleSubmit()}>
        <div className="">
          <label htmlFor="us" className="form-label display-6 ll ">Username</label>
          <input type="text" {...register("username",{required:true})} id="us" className="form-control"/>
          {errors.username?.type==="required" && <p className="text-danger">* username is required</p>}
        </div>
        <div className="">
          <label htmlFor="pw" className="form-label display-6 ll ">Password</label>
          <input type="password" {...register("password",{required:true})} id="pw" className="form-control"/>
          {errors.password?.type==="required" && <p className="text-danger">* password is required</p>}
        </div>
        <button type="submit" className="btn log">Login</button>
      </form>
    </div>
  )
}
export default Login