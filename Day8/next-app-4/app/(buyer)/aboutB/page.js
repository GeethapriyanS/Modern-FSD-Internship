const AboutB =async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <h1 className="loading">AboutB for Buyer</h1>
        </div>
    )
}
export default AboutB;