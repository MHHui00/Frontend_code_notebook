import { useReducer } from "react";


//review useReducer: 功能和useState類似，可以處理比較複雜情況？
function App() {

  //review 10.1 建立reducer 函數
  function reducer(state, action){
    switch (action.type) {
      case 'INC':
        //return 什麼。新的state就是什麼 =》觸發組件渲染
        return state + 1;
      case 'DEC':
        return state - 1;
      case 'SET':
        return action.payload
      default:
        return state;
    }
  }

  //review 10.2 使用useReducer，傳入已有的reducer函數以及state的初始值，數組結構出state本身以及 修改state的函數dispatch
  const [Num, NumDispatch] = useReducer(reducer, 0)

  return (
    <div className="App">
      app
      <br></br>
      <button onClick={()=>{NumDispatch({type: 'DEC'})}}>-</button>
      {Num}
      <button onClick={()=>{NumDispatch({type: 'INC'})}}>+</button>

      <button onClick={()=>{NumDispatch({type: 'SET', payload: 100})}}>setTo100</button>

    </div>
  );
}

export default App;
