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
            // eslint-disable-next-line react/button-has-type
            type={"button"}
            id={"sub10"}
            className={"timer__set-add-sub"}
            disabled={isDisabled}
            onClick={() => setSeconds(substract)}>
            {"- 10s"}
        </button>
    );
};

export default SubSeconds;
