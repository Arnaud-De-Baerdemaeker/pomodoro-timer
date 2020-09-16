import React from "react";

const SubMinutes = ({minutes, setMinutes, isDisabled}) => {
    const substract = () => {
        if (minutes >= 0) {
            setMinutes(minutes - 1);
        }

        if (minutes === 0) {
            setMinutes(59);
        }
    };

    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={"button"}
            id={"sub1"}
            className={"timer__set-add-sub"}
            disabled={isDisabled}
            onClick={() => setMinutes(substract)}>
            {"- 1 min"}
        </button>
    );
};

export default SubMinutes;
