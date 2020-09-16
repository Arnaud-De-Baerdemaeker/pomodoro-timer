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
            // eslint-disable-next-line react/button-has-type
            type={"button"}
            id={"start-stop"}
            className={!isDisabled ? "timer__start-stop" : "timer__stop-start"}
            onClick={changeStatus}>
            {!isDisabled ? "START" : "STOP"}
        </button>
    );
};

export default StartStopTimer;
