import React from "react";

const StartStopTimer = ({
    startStop,
    setStartStop,
    isDisabled,
    setIsDisabled,
}) => {
    const changeStatus = () => {
        setStartStop(!startStop);
        setIsDisabled(!isDisabled);
    };

    return (
        <button
            type={"button"}
            id={"start-stop"}
            className={"timerBox__start-stop"}
            onClick={changeStatus}>
            {"START / STOP"}
        </button>
    );
};

export default StartStopTimer;
