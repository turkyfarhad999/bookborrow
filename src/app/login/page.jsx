'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 
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
   const { data:res, error } = await authClient.signIn.email({
    email: data.email, 
    password: data.password, 
    rememberMe: true,
    
});
if (error) {
      toast.error(error.message || 'Login in failed');
      return;
    }

    toast.success('Login in successfully!');
    router.push('/'); 
    router.refresh(); 
    console.log(data)}
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
        
    <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body text-black">
        <fieldset className="fieldset">
          
          <label className="label">Email</label>
          <input type="email"  {...register("email")} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password"  {...register("password")} className="input" placeholder="Password" />
          <div><Link href={'/signin'} className="link link-hover">Not a user? click here ...</Link></div>
          <button type="submit" className="btn btn-neutral mt-4">Login in</button>
        </fieldset>
         <button onClick={signInGoogle} className="btn">Login with Google</button>
        <button onClick={signInGit} className="btn">Login with GitHub</button>
      </div>
    </div>
  </div>
</div>
       </form>
    );
};

export default page;