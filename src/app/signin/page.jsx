'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";



  

const page = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) =>{ 
    const { data:res, error } = await authClient.signUp.email({
    name:  data.name,
    email: data.email,
    password: data.password,
   
   
});
    console.log(data)}

  console.log(watch("example"))
    return (
       <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
        
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body text-black">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" {...register("name")} className="input" placeholder="name" />
          <label className="label">Email</label>
          <input type="email"  {...register("email")} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password"  {...register("password")} className="input" placeholder="Password" />
          <div><Link href={'/login'} className="link link-hover">Already a user? click here ...</Link></div>
          <button type="submit" className="btn btn-neutral mt-4">Sign in</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
       </form>
    );
};

export default page;