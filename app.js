import React, {useState} from "react";
import ReactDOM from "react-dom";
import StartStopTimer from "./start-stop-timer.js";
import ResetTimer from "./reset-timer.js";
import AddMinutes from "./add-minutes.js";
import SubMinutes from "./sub-minutes.js";
import AddSeconds from "./add-seconds.js";
import SubSeconds from "./sub-seconds.js";

const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return (
        <div className={"timer"}>
            <h1 className={"timer__title"}>{"Pomodoro Timer"}</h1>
            <div>
                <div>
                    {minutes}
                    {":"}
                    {seconds}
                </div>
            </div>
            <div>
                <StartStopTimer />
                <ResetTimer
                    minutes={minutes}
                    setMinutes={setMinutes}
                    seconds={seconds}
                    setSeconds={setSeconds}
                />
            </div>
            <div>
                <AddMinutes minutes={minutes} setMinutes={setMinutes} />
                <SubMinutes minutes={minutes} setMinutes={setMinutes} />
            </div>
            <div>
                <AddSeconds seconds={seconds} setSeconds={setSeconds} />
                <SubSeconds seconds={seconds} setSeconds={setSeconds} />
            </div>
        </div>
    );
};

ReactDOM.render(<Timer />, document.querySelector("#root"));
