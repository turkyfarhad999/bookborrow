'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";



  

const page = () => {
     const router=useRouter()
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
     if(error){
        toast.error(error.message)
     }
     toast.success('Signin in successfully!');
      await authClient.signOut();
  router.push('/login');
    
    router.refresh();
}
    const signInGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
}
const signInGit = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}
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
        <button onClick={signInGoogle} className="btn">signin with Google</button>
        <button onClick={signInGit} className="btn">signin with GitHub</button>
      </div>
    </div>
  </div>
</div>
       </form>
    );
};

export default page;