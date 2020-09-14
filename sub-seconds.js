import React from "react";

const SubSeconds = ({seconds, setSeconds, isDisabled}) => {
    const substract = () => {
        if (seconds >= 0) {
            setSeconds(seconds - 10);
        }

        if (seconds === 0) {
            setSeconds(50);
        }
    };

    return (
        <button
            type={"button"}
            id={"sub10"}
            className={"timerBox__addSub"}
            disabled={isDisabled}
            onClick={() => setSeconds(substract)}>
            {"- 10 sec"}
        </button>
    );
};

export default SubSeconds;
