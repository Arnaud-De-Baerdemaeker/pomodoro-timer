/* eslint-disable global-require */
import React from "react";

const Modal = ({
    isOver,
    setIsOver,
    setMinutes,
    startStop,
    setStartStop,
    isDisabled,
    setIsDisabled,
}) => (
    <div className={"modal__content"}>
        <div className={"modal__text"}>
            <figure className={"modal__image-box"}>
                <img
                    src={require("./../../images/applause.png")}
                    alt={"Applause"}
                    className={"modal__image"}
                />
            </figure>
            <p className={"modal__work"}>
                {"You worked hard during this time !"}
            </p>
            <p className={"modal__rest"}>{"Why not take a little break ?"}</p>
        </div>
        <div className={"modal__buttons"}>
            <button
                // eslint-disable-next-line react/button-has-type
                type={"button"}
                id={"close-modal"}
                onClick={() => {
                    setIsOver(!isOver);
                }}
                className={"modal__close"}>
                {"CLOSE"}
            </button>
            <button
                // eslint-disable-next-line react/button-has-type
                type={"button"}
                id={"close-modal-plus-new-timer"}
                onClick={() => {
                    setIsOver(!isOver);
                    setMinutes(25);
                    setStartStop(!startStop);
                    setIsDisabled(!isDisabled);
                }}
                className={"modal__restart"}>
                {"RESTART"}
            </button>
        </div>
    </div>
);

export default Modal;
