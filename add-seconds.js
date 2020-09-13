import React from "react";

const AddSeconds = ({seconds, setSeconds}) => {
    const add = () => {
        if (seconds < 60) {
            setSeconds(seconds + 10);
        }

        if (seconds === 59) {
            setSeconds(0);
        }
    };

    return (
        <input
            type={"button"}
            id={"add10"}
            value={"+ 10 sec"}
            className={"timerBox__addSub"}
            onClick={() => setSeconds(add)}
        />
    );
};

export default AddSeconds;
