import React from "react";

const TimerAt25 = ({setMinutes, setSeconds, isDisabled}) => {
    function setAt25() {
        setMinutes(25);
        setSeconds(0);
    }

    return (
        <button
            type={"button"}
            id={"timer-at-25"}
            className={"timerBox__set-timer"}
            disabled={isDisabled}
            onClick={setAt25}>
            {"Set to 25 mins"}
        </button>
    );
};

export default TimerAt25;
