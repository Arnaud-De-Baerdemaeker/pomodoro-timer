import React from "react";

const TimerAt25 = ({setMinutes, setSeconds, isDisabled}) => {
    function setAt25() {
        setMinutes(25);
        setSeconds(0);
    }

    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={"button"}
            id={"timer-at-25"}
            className={"timer__set-timer-at-25"}
            disabled={isDisabled}
            onClick={setAt25}>
            {"Set to 25 mins"}
        </button>
    );
};

export default TimerAt25;
