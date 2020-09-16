import React from "react";

const AddMinutes = ({minutes, setMinutes, isDisabled}) => {
    const add = () => {
        if (minutes < 59) {
            setMinutes(minutes + 1);
        } else if (minutes === 59) {
            setMinutes(0);
        }
    };

    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={"button"}
            id={"add1"}
            className={"timer__set-add-sub"}
            disabled={isDisabled}
            onClick={() => setMinutes(add)}>
            {"+ 1 min"}
        </button>
    );
};

export default AddMinutes;
