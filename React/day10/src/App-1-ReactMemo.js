import { memo, useMemo, useState } from "react";


//review memo： 由於默認時，只要父組件進行了重新渲染，子組件就會一起渲染。會產生不必要的渲染，通過memo就可以實現僅當props發生變化時（父組件傳來的參數）子組件才重新渲染

//將組件源碼全部放進去
const MemoSon = memo(
  function Son() {      //review 並且無論子組件是否使用了sonNum
    console.log('called son');
    return (
      <div>this son,</div>
    )
  }
)


function App() {
  const [num, setNum] = useState(0)
  const [sonNum, setSonNum] = useState(10)

  // const list = [1, 2, 3]
  // const [stateList] = useState([1, 2, 3])

  const MemoList = useMemo(() => {
    return [1,2,3,4]
  }, [])

  return (
    <div className="App">
      {num} <br></br>
      <button onClick={() => { setNum(num + 1) }}>Father+</button>

      <button onClick={() => { setSonNum(sonNum + 1) }}>Son+</button>


      {/* review 1. props 簡單數據類型: props即這裡的sonNum， 只有sonNum變化才重新渲染子組件 */}
      {/* <MemoSon Num={sonNum} /> */}

      {/* review 2. props 複雜數據類型: 由於重新渲染父組件時，list不再是以前的list了（因為重運行之後分配的內存地址不一樣了，他底層是通過對比 引用 來判斷的 (Object.is)）所有son還是會被多餘地調用*/}
      {/* 非靜態存儲list，會產生多餘調用 */}
      {/* <MemoSon Num={list} /> */}

      {/* review 2的解決方法： 將props存在靜態內存里。 例如利用useMemo的特性（渲染過程中緩存一個值），並且傳入空依賴 or 用一個狀態存起來 */}

      {/* 存在靜態的狀態裡，ok */}
      <MemoSon Num={MemoList} />
      {/* <MemoSon Num={stateList} /> */}



    </div>
  );
}

export default App;
