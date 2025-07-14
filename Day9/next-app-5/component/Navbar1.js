import Link from "next/link";
const Navbar1=()=>{
    return(
        <div className="navbar">
        <div className="navbar-item1">Link</div>
        <div className="navbar-item2">
            <div><Link href="/Home">Home</Link></div>
            <div><Link href="/Card">Card</Link></div>
            <div><Link href="/Bank">Bank</Link></div>
            <div><Link href="/About">About</Link></div>
        </div>
        </div>
    )
}
export default Navbar1;