import React from "react";

const SubSeconds = ({minutes, setMinutes, seconds, setSeconds, isDisabled}) => {
    const substract = () => {
        if (seconds > 0) {
            setSeconds(seconds - 10);
        } else if (seconds === 0 && minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(50);
        } else if (minutes === 0 && seconds === 0) {
            setMinutes(59);
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
