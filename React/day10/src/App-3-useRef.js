import { forwardRef, useRef } from "react";

//review useRef: react 獲取dom元素的方法。

//要換一種寫法了
// function Son (){
//   return (
//     <input type="text" placeholder="lalal"/>
//   )
// }

//review 3，固定寫法！將子元素返回的內容放在一個frowardRef，並綁定dom
const Son = forwardRef(({placeholder: text}, ref) => {
  return (
    <input type="text" placeholder={text} ref={ref} />
  )
})




function App() {
  const placeholder = 'text from father'

  //review 1. 使用鉤子函數實例一個鉤子
  const equalRef = useRef(null) //不跨層的ref
  const crossLayerRef = useRef(null)  //跨層ref

  return (
    <div className="App" ref={equalRef}>
      {/* review  不跨層的ref則直接⬆綁定在dom元素後面 */}
      app
      <button onClick={() => { equalRef.current.style.backgroundColor = 'red' }}>同層ref, turn Red</button>
      <br></br>

      {/* review 2. 跨層ref，傳遞給子 */}
      <Son ref={crossLayerRef} placeholder={placeholder} />
      <button onClick={() => { crossLayerRef.current.focus() }}>focus son input dom</button>
    </div>
  );
}

export default App;
