import { useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const selector = useSelector(state => state.calculator);
  console.log(selector);
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={value} onChange={(e) => {
          setValue(e.target.value)
        }} /> 만큼을
        <button>더할게요</button> <button>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{selector}</p>
      </div>
    </div>
  );
}

export default App;
