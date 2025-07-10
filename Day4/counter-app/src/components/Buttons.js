import Button from "./Button";
const Buttons = (props) => {
    return (
        <div className="counter">
            <Button func={props}/>
        </div>
    );
};
export default Buttons;