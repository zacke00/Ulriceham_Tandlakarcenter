import "../../Style/Buttons/HeaderButtons.css";

const IButton = (props: { text: string, onClick: () => void }) => {
    return (
        <button onClick={props.onClick} className="headerButton">{props.text}</button>
    );
}



