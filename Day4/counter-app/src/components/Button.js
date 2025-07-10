const Button = (props) => {
    return (
        <>
            <button onClick={props.func.inc}>Increment</button>
            <button onClick={props.func.dec}>Decrement</button>
            <button onClick={props.func.res}>Reset</button>
        </>
    );
};

export default Button;