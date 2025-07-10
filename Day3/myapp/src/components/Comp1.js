const Comp1=(props)=>{
    console.log(props)
    return(
        <div>
            <h1>Component 1</h1>
             <h2>{props.a},{props.b}</h2>
        </div>
    )
}
export default Comp1;

export const A=()=>{
    return (
        <div>
            <h1>Component A</h1>
        </div>
    )
}