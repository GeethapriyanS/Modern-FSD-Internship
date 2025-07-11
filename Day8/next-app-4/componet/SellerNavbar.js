"use client"
import { useRouter } from "next/navigation";

const SellerNavbar=()=>{
    const router=useRouter();
    return(
        <div className="navbar">
            <div className="navbar-item1 navbar-logo">Seller</div>
            <div className="navbar-item2">
                <div className="nav-item" onClick={()=>{
                    router.push("/homeS");
                }}>Home</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/aboutS");
                }}>About</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/settingS");
                }}>Setting</div>
                <div className="nav-item" onClick={()=>{
                    router.push("/loginS");
                }}>Login</div>
            </div>
        </div>
    )
}
export default SellerNavbar;