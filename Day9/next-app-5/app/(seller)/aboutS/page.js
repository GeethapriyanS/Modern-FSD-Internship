const AboutS =async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <h1 className="loading">AboutS for Seller</h1>
        </div>
    )
}
export default AboutS;