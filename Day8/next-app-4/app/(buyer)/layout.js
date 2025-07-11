import BuyerNavbar from "@/componet/BuyerNavbar";

const BuyerLayout = ({children}) => {
    return(
        <div>
            <BuyerNavbar/>
            {children}
        </div>
    )
}
export default BuyerLayout;