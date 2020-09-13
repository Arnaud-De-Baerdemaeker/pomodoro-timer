import React from "react";

const AddMinutes = ({minutes, setMinutes}) => {
    const add = () => {
        if (minutes < 60) {
            setMinutes(minutes + 1);
        }

        if (minutes === 59) {
            setMinutes(0);
        }
    };

    return (
        <input
            type={"button"}
            id={"add1"}
            value={"+ 1 min"}
            className={"timerBox__addSub"}
            onClick={() => setMinutes(add)}
        />
    );
};

export default AddMinutes;
