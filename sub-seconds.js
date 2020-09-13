import React from "react";

const SubSeconds = ({seconds, setSeconds}) => {
    const substract = () => {
        if (seconds >= 0) {
            setSeconds(seconds - 10);
        }

        if (seconds === 0) {
            setSeconds(50);
        }
    };

    return (
        <input
            type={"button"}
            id={"sub10"}
            value={"- 10 sec"}
            className={"timerBox__addSub"}
            onClick={() => setSeconds(substract)}
        />
    );
};

export default SubSeconds;
