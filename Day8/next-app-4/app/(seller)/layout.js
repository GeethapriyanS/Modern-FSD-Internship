import SellerNavbar from "@/componet/SellerNavbar";

const SellerLayout = ({children}) => {
    return(
        <div>
            <SellerNavbar/>
            {children}
        </div>
    )
}
export default SellerLayout;