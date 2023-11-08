import { memo, useCallback, useState } from "react";

const MemoSon = memo(
  function Son({fun}) {      
    console.log('called son');
    return (
      <input type="text" onChange={(e)=>{fun(e.target.value);}}/>
    )
  }
)




function App() {
  const [num, setNum] = useState(0)

  // const showChange = (value)=>{console.log(value);}
  const showChange = useCallback((value)=>{console.log(value);},[])   //review useCallBack(),只有當依賴項發生變化時，在會運行，阻止父組件重渲染時創建同名函數
  return (
    <div className="App">
      {num}
      <button onClick={() => { setNum(num + 1) }}>father+</button>
      <br></br>

      <MemoSon fun={showChange} />

    </div>
  );
}

export default App;
