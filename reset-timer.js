import React from "react";

const ResetTimer = ({setMinutes, setSeconds, isDisabled}) => {
    function reset() {
        setMinutes(0);
        setSeconds(0);
    }

    return (
        <button
            type={"button"}
            id={"reset-timer"}
            className={"timerBox__reset-timer"}
            disabled={isDisabled}
            onClick={reset}>
            {"RESET"}
        </button>
    );
};

export default ResetTimer;
