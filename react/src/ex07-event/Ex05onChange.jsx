import { useState } from 'react';

function Ex05onChange(){
  //input 
  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");

  //checkbox
  const [checked, setChecked] = useState(false);

  //radio
  const [radio, setRadio] = useState("E");

  //dropdown
  const [option, setOption] = useState("a");

  const handle1 = (event) => {
    //이벤트가 발생된 객체 참조(event)
    if(event.target.name === 'A'){
      setvalue1(event.target.value);
    }else if(event.target.name === 'B'){
      setvalue2(event.target.value);
    }
  }

  const handle2 = (e) => {
    setChecked(e.target.checked);
  }

  const handle3 = (e) => {
    setRadio(e.target.value);
  }

  const handle4 = (e) => {
    setOption(e.target.value);
  }

  return (
    <div>
      <h1>onChange Example</h1>
      A<input name="A" type="text" value={value1} onChange={handle1} />
      B<input name="B" type="text" value={value2} onChange={handle1} />
      <p>현재 값: {value1}, {value2}</p>
      <hr></hr>
      <label>
        동의
        <input type="checkbox" checked={checked} onChange={handle2}/>
      </label>
      <p>{checked ? "동의함" : "동의 안 함"}</p>
      <hr></hr>
      E<input checked={radio === 'E'} type="radio" value="E" name="mbti" onChange={handle3}/>
      I<input checked={radio === 'I'} type="radio" value="I" name="mbti" onChange={handle3}/>
      <p>선택한 값: {radio}</p>
      <hr></hr>
      <select value={option} onChange={handle4}>
      <option value="a">옵션1</option>
      <option value="b">옵션2</option>
      <option value="c">옵션3</option>
      </select>
      <p>선택한 옵션: {option}</p>
    </div>
  )
}
export default Ex05onChange;