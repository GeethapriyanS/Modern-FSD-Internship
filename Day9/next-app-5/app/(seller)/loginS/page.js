import Login from "@/componet/Login";

const LoginS=async()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <Login/>
        </div>
    )
}
export default LoginS;