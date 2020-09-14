import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import StartStopTimer from "./start-stop-timer.js";
import ResetTimer from "./reset-timer.js";
import TimerAt25 from "./timer-at-25.js";
import AddMinutes from "./add-minutes.js";
import SubMinutes from "./sub-minutes.js";
import AddSeconds from "./add-seconds.js";
import SubSeconds from "./sub-seconds.js";

const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [startStop, setStartStop] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

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
            }
        }
    });

    return (
        <div className={"timer"}>
            <h1 className={"timer__title"}>{"Pomodoro Timer"}</h1>
            <div>
                <div>
                    {minutes < 10 ? "0" : ""}
                    {minutes}
                    {":"}
                    {seconds < 10 ? "0" : ""}
                    {seconds}
                </div>
            </div>
            <div>
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
            <div>
                <TimerAt25
                    setMinutes={setMinutes}
                    setSeconds={setSeconds}
                    isDisabled={isDisabled}
                />
            </div>
            <div>
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
            <div>
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
                    setIsDisabled={setIsDisabled}
                />
            </div>
        </div>
    );
};

ReactDOM.render(<Timer />, document.querySelector("#root"));
