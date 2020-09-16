import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import StartStopTimer from "./components/start-stop-timer.js";
import ResetTimer from "./components/reset-timer.js";
import TimerAt25 from "./components/timer-at-25.js";
import AddMinutes from "./components/add-minutes.js";
import SubMinutes from "./components/sub-minutes.js";
import AddSeconds from "./components/add-seconds.js";
import SubSeconds from "./components/sub-seconds";
import Modal from "./components/modal.js";

const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [startStop, setStartStop] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isOver, setIsOver] = useState(false);

    useEffect(() => {
        let timer;

        if (startStop) {
            if (seconds > 0) {
                timer = setTimeout(() => {
                    setSeconds(seconds - 1);
                }, 1000);
            } else if (seconds === 0 && minutes > 0) {
                timer = setTimeout(() => {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }, 1000);
            } else {
                clearTimeout(timer);
                setStartStop(!startStop);
                setIsDisabled(!isDisabled);
                setIsOver(!isOver);
            }
        }
    });

    return (
        <div>
            <h1 className={"timer__title"}>{"Pomodoro Timer"}</h1>
            <div className={"timer__display"}>
                {minutes < 10 ? "0" : ""}
                {minutes}
                {":"}
                {seconds < 10 ? "0" : ""}
                {seconds}
            </div>
            <div className={"timer__start-stop-reset"}>
                <StartStopTimer
                    startStop={startStop}
                    setStartStop={setStartStop}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                />
                <ResetTimer
                    setMinutes={setMinutes}
                    setSeconds={setSeconds}
                    isDisabled={isDisabled}
                />
            </div>
            <div className={"timer__timer-at-25"}>
                <TimerAt25
                    setMinutes={setMinutes}
                    setSeconds={setSeconds}
                    isDisabled={isDisabled}
                />
            </div>
            <div className={"timer__add-sub-minutes"}>
                <AddMinutes
                    minutes={minutes}
                    setMinutes={setMinutes}
                    isDisabled={isDisabled}
                />
                <SubMinutes
                    minutes={minutes}
                    setMinutes={setMinutes}
                    isDisabled={isDisabled}
                />
            </div>
            <div className={"timer__add-sub-seconds"}>
                <AddSeconds
                    minutes={minutes}
                    setMinutes={setMinutes}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    isDisabled={isDisabled}
                />
                <SubSeconds
                    minutes={minutes}
                    setMinutes={setMinutes}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    isDisabled={isDisabled}
                />
            </div>
            <div className={isOver ? "modal--visible" : "modal--hidden"}>
                <Modal
                    isOver={isOver}
                    setIsOver={setIsOver}
                    setMinutes={setMinutes}
                    startStop={startStop}
                    setStartStop={setStartStop}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                />
            </div>
        </div>
    );
};

ReactDOM.render(<Timer />, document.querySelector("#root"));
