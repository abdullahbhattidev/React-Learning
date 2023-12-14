import styles from "./alert.module.css";


interface Props {
    onClose: () => void;
}

function Alerts({ onClose }: Props) {
    return (
        <div className={"alert alert-primary alert-dismissible fade show"} role="alert">
            <strong>this is alert!</strong> click cross button to close.
            {/* Set the color in your CSS */}
            <button
                type="button"
                className={`close ${styles.alertCustomStyle}`}
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => {
                    onClose();
                }}
            >
                <span aria-hidden="false">&times;</span>
            </button>
        </div>
    );
}

export default Alerts;
