import React from "react";

const SubSeconds = ({minutes, setMinutes, seconds, setSeconds, isDisabled}) => {
    const substract = () => {
        if (seconds < 10) {
            if (minutes === 0) {
                setSeconds(seconds + 50);
                setMinutes(59);
            } else {
                setSeconds(seconds + 50);
                setMinutes(minutes - 1);
            }
        } else {
            setSeconds(seconds - 10);
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
