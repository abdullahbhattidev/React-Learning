import styles from "./alert.module.css"
interface Props {
    buttonType: string;
    buttonName: string;
    onpressed: ()=> void;
}

function Buttons({ buttonType, buttonName, onpressed}: Props) {
    return (
        <button onClick={()=> {onpressed()}} type="button" className={`btn ${buttonType} `}>
            {buttonName} 
        </button>
    );
}

export default Buttons;