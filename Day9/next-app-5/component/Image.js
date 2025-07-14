import Image from "next/image";

const Image1=()=>{
    return(
         <>
         <img src="/globe.svg" style={{width:"100px",height:"100px"}}></img>
         <Image src="/globe.svg" width={100} height={100}/>
         </>
    )
}
export default Image1;