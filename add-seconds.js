import React from "react";

const AddSeconds = ({seconds, setSeconds, isDisabled}) => {
    const add = () => {
        if (seconds < 60) {
            setSeconds(seconds + 10);
        }

        if (seconds === 59) {
            setSeconds(0);
        }
    };

    return (
        <button
            type={"button"}
            id={"add10"}
            className={"timerBox__addSub"}
            disabled={isDisabled}
            onClick={() => setSeconds(add)}>
            {"+ 10 sec"}
        </button>
    );
};

export default AddSeconds;
