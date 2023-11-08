import { forwardRef, useImperativeHandle, useRef } from "react";

//review 如何用useRef，refer到子組件的函數。也就是實現在父組件調用子組件的函數

//review 但凡涉及跨層ref，子組件就不能用普通function了，而是 forwardRef的一個實例
const Son = forwardRef(({ placeholder: text }, ref) => {

  //eg：一個在子組件內部實現自己foucs自己的function
  const inputRef = useRef(null)
  const foucusSelfInput = () => { inputRef.current.focus() }

  //review useImperativeHandle: 把函數暴露給父組件。第一個參數：父組件來的ref， 第二個參數：一個return對象的回調函數，對象內包含想要暴露的函數
  useImperativeHandle(ref, () => {
    return {
      foucusSelfInput
    }
  })

  return (
    <input type="text" placeholder={text} ref={inputRef} />
  )
})




function App() {
  const placeholder = 'text from father'

  const crossLayerRef = useRef(null)  //跨層ref

  return (
    <div className="App">
      app
      <br></br>
      <Son ref={crossLayerRef} placeholder={placeholder} />
      <button onClick={() => { crossLayerRef.current.foucusSelfInput() }}>focus son input dom</button>
    </div>
  );
}

export default App;
