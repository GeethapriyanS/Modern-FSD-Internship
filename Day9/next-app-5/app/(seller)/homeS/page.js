const HomeS =async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <h1 className="loading">HomeS for Seller</h1>
        </div>
    )
}
export default HomeS;