"use client"
import {useRouter}  from "next/navigation";

const Navbar2=()=>{
    const router=useRouter();
    return(
        <div className="navbar">
        <div className="navbar-item1">useRouter</div>
        <div className="navbar-item2">
            <div onClick={()=>{
                router.push("/Home");
            }}>Home</div>
            <div onClick={()=>{
                router.push("/Card");
            }}>Card</div>
            <div onClick={()=>{
                router.push("/Bank");
            }}>Bank</div>
            <div onClick={()=>{
                router.push("/About");
            }}>About</div>
        </div>
        </div>
    )
}
export default Navbar2;