import React from "react";

const AddSeconds = ({minutes, setMinutes, seconds, setSeconds, isDisabled}) => {
    const add = () => {
        if (minutes < 59 || (minutes === 59 && seconds < 50)) {
            if (seconds >= 50) {
                setSeconds(seconds - 50);
                setMinutes(minutes + 1);
            } else {
                setSeconds(seconds + 10);
            }
        } else {
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
            {"+ 10s"}
        </button>
    );
};

export default AddSeconds;
