"use client"
import { useRouter } from "next/navigation";

const BuyerNavbar=()=>{
    const router=useRouter();
    return(
        <div className="navbar">
            <div className="navbar-item1 navbar-logo">Buyer</div>
            <div className="navbar-item2">
                <div className="nav-item" onClick={()=>{
                    router.push("/homeB");
                }}>Home</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/aboutB");
                }}>About</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/settingB");
                }}>Setting</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/loginB");
                }}>Login</div>
            </div>
        </div>
    )
}
export default BuyerNavbar;