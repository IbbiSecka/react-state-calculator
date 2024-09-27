import "./App.css";
import { useState } from "react";

function App() {
  const [secondNumber, setSecondNumber] = useState(''); 
  const [firstNumber, setFirstNumber] = useState(null); 
  const [operation, setOperation] = useState(null);     
  const [result, setResult] = useState(null);  
  const [storedValue, setStoredValue] = useState(null);  

  const numberClick1 = (number) => {
    setFirstNumber((prev) => (prev === null ? number : prev + number));
  };

  const numberClick2 = (number) => {
    setSecondNumber((prev) => (prev === null ? number : prev + number));
  };

  const operationClick = (o) => {
    setOperation(o);
  };

  const sum = () => {
    if (operation && firstNumber !== null && secondNumber !== '') {
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(secondNumber);

      let calculation;
      switch (operation) {
        case '+':
          calculation = num1 + num2;
          break;
        case '-':
          calculation = num1 - num2;
          break;
        case '*':
          calculation = num1 * num2;
          break;
        case '÷':
          calculation = num1 / num2;
          break;
        default:
          return;
      }
      setResult(calculation);
      setFirstNumber(firstNumber);
      setSecondNumber(secondNumber);
    }
  };

  const storeResult = () => {
    setStoredValue(result);  
  };

  const recallFirst = () => {
    setFirstNumber(storedValue);  
  };

  const recallSecond = () => {
    setSecondNumber(storedValue);  
  };

  const clear = () => {
    setFirstNumber(null);
    setSecondNumber('');
    setOperation(null);
    setResult(null);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber || "0"}</p>
        <div className="numbers">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(num => (
            <button key={num} onClick={() => numberClick1(num)}>{num}</button>
          ))}
          <button onClick={clear}>Clear</button>
          <button onClick={recallFirst}>Recall</button>  
        </div>
      </div>

      <div className="panel">
        <p>{operation || "+"}</p> 
        <div className="numbers">
          <button onClick={() => operationClick('+')}>+</button>
          <button onClick={() => operationClick('-')}>-</button>
          <button onClick={() => operationClick('*')}>*</button>
          <button onClick={() => operationClick('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber || "0"}</p>
        <div className="numbers">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(num => (
            <button key={num} onClick={() => numberClick2(num)}>{num}</button>
          ))}
          <button onClick={clear}>Clear</button>
          <button onClick={recallSecond}>Recall</button>  
        </div>
      </div>

      <div className="panel answer">
        <p>{result !== null ? result : "0"}</p>
        <div>
          <button onClick={sum}>=</button>
          <button onClick={storeResult}>Store</button>  
        </div>
      </div>
    </div>
  );
}

export default App;
