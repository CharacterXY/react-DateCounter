import { useEffect, useState } from "react";
function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(new Date());

  function handleMinus() {
    setCurrentValue((currentValue) => currentValue - 1);
  }

  useEffect(() => {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + currentValue * step);
    setDate(newDate);
  }, [currentValue, step]);

  function handleChange(event) {
    setStep(event.target.value);
  }

  function handleValue(event) {
    console.log(event.target.value);
    setCurrentValue(event.target.value);
  }

  function handlePlus() {
    setCurrentValue((currentValue) => currentValue + 1);
  }

  return (
    <div className="container mt-5 pt-5">
      <label for="customRange1" class="form-label">
        Step
        <span className="text-primary">{step}</span>
      </label>
      <input
        onChange={handleChange}
        type="range"
        class="form-range"
        id="customRange1"
        min="1"
        max="10"
        value={step}
      ></input>
      <div className="input-group mb-3">
        <button onClick={handleMinus} className="btn btn-danger" type="button">
          -
        </button>
        <input
          onChange={handleValue}
          value={currentValue}
          type="text"
          className="form-control text-center"
        />
        <button onClick={handlePlus} className="btn btn-primary" type="button">
          +
        </button>
      </div>

      <div className="text-center mt-3">
        {currentValue < 0}
        <span className="text-center">
          Before {Math.abs(currentValue)} days ago
        </span>
        {date.toDateString()}
      </div>
    </div>
  );
}

export default App;
