import React from "react";

const SubMinutes = ({minutes, setMinutes}) => {
    const substract = () => {
        if (minutes >= 0) {
            setMinutes(minutes - 1);
        }

        if (minutes === 0) {
            setMinutes(59);
        }
    };

    return (
        <input
            type={"button"}
            id={"sub1"}
            value={"- 1 min"}
            className={"timerBox__addSub"}
            onClick={() => setMinutes(substract)}
        />
    );
};

export default SubMinutes;
