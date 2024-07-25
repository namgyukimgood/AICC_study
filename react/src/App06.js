import logo from './logo.svg';
import './App.css';
import Ex01useState from './ex06-hooks/Ex01useState';
import Ex02useEffect from './ex06-hooks/Ex02useEffect'; 
import ParentComponent from './ex06-hooks/ParentComponent';
import Ex03useRefVariable from './ex06-hooks/Ex03useRefVariable';
import Ex03useRefDOM from './ex06-hooks/Ex03useRefDOM';
import Ex04useContextParent from './ex06-hooks/Ex04useContextParent';
import Ex05useReducer from './ex06-hooks/Ex05useReducer';
import Ex06useMemoParent from './ex06-hooks/Ex06useMemoParent';
import Ex07useCallbackBefore from './ex06-hooks/Ex07useCallbackBefore';
import Ex07useCallbackAfter from './ex06-hooks/Ex07useCallbackAfter';

function App() {
  return (
    <div className="App">
      {/* <Ex01useState /> */}
      {/* <Ex02useEffect /> */}
      {/* <ParentComponent /> */}
      {/* <Ex03useRefVariable /> */}
      {/* <Ex03useRefDOM /> */}
      {/* <Ex04useContextParent /> */}
      {/* <Ex05useReducer /> */}
      {/* <Ex06useMemoParent /> */}
      <Ex07useCallbackBefore />
      <Ex07useCallbackAfter />
    </div>
  );
}

export default App;
