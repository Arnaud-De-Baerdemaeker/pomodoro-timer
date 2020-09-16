import React from "react";

const AddSeconds = ({minutes, setMinutes, seconds, setSeconds, isDisabled}) => {
    const add = () => {
        if (seconds < 50) {
            setSeconds(seconds + 10);
        } else if (minutes < 59 && seconds === 50) {
            setSeconds(0);
            setMinutes(minutes + 1);
        } else if (minutes === 59 && seconds === 50) {
            setMinutes(0);
            setSeconds(0);
        }
    };

    return (
        <button
            type={"button"}
            id={"add10"}
            className={"timer__set-add-sub"}
            disabled={isDisabled}
            onClick={() => setSeconds(add)}>
            {"+ 10 sec"}
        </button>
    );
};

export default AddSeconds;
