import React, { useState } from "react";
import "./App.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import CountUp, { useCountUp } from "react-countup";

function App() {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    duration: 5,
    end: 10000,
  });

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div ref={countUpRef} />
          <button onClick={start}>Start</button>
          <button onClick={reset}>Reset</button>
          <button onClick={pauseResume}>Pause/Resume</button>
          <button onClick={() => update(2000)}>Update to 2000</button>
        </div>

        <Tooltip
          title="Welcome to React"
          position="left"
          trigger="mouseenter"
          arrow
        >
          <button>ToolTips</button>
        </Tooltip>

        {/* countup component */}

        {/* <CountUp end={200} duration={5.75}></CountUp>
        <CountUp end={200} duration={5.75} prefix="$"></CountUp>
        <CountUp end={200} duration={5.75} suffix="CLP" decimals={2}></CountUp> */}
      </header>
    </div>
  );
}

export default App;
