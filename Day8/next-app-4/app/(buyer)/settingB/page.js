const SettingB =async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <h1 className="loading">SettingB for Buyer</h1>
        </div>
    )
}
export default SettingB;