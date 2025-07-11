import Login from "@/componet/Login";

const LoginB=async()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <Login/>
        </div>
    )
}
export default LoginB;