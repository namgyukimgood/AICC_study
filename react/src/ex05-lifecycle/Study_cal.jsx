import { useState } from "react";

const Allcount = (props) => {
    return (
      <div>
        <h4>계산 횟수: {props.count}</h4>
      </div>
    );
  }



function Cal(){
    const [num1, setnum1]=useState(0);
    const [num2, setnum2]=useState(0);
    const [result, setResult]=useState(0);
    const [count, setCount]=useState(0);

    const num1handle= (event)=>{
        console.log(event.target.value);
        setnum1(parseFloat(event.target.value));
    }

    const num2handle= (event)=>{
        console.log(event.target.value);
        setnum2(parseFloat(event.target.value));
    }

    const addhandle=()=>{
        setResult(num1+num2);
        setCount(count+1);
    }
    const subhandle=()=>{
        setResult(num1-num2);
        setCount(count+1);
    }
    const mulhandle=()=>{
        setResult(num1*num2);
        setCount(count+1);
    }
    const divhandle=()=>{
        if(num2!==0){
          setResult(num1/num2);
          setCount(count+1);
        }else{
          setResult('0으로 나눌수 없습니다');
        }
    }

    return(
        <div>
            <h1>간단한 계산기</h1>
            <div> 
                <input type='number' value={num1} onChange={num1handle}/>
                <input type='number' value={num2} onChange={num2handle}/>
                <div>
                   <button onClick={addhandle}>+</button>
                   <button onClick={subhandle}>-</button>
                   <button onClick={mulhandle}>*</button>
                   <button onClick={divhandle}>/</button> 
                </div>
                <div>
                    <h2>결과:{result}</h2>
                </div>
            </div>
            < Allcount count={count}/>
        </div>
    )
}
export default Cal;             