
const pi = 3.14;
function getX() { return 'x'; }

function Button() {
  //3.
  //review 模塊一般為首字母大寫的函數
  const Click = (e) => {
    console.log('Clicked', e);
  }
  const Click2 = (e) => {
    console.log('Clicked', e);
  }
  const Click3 = (para, e) => {
    console.log('Clicked', para, e);
  }
  return <div>
    <button onClick={Click}>click</button>

    {/* review 點擊時傳遞參數 */}
    <button onClick={() => Click2('para')}>click2</button>

    {/* review 點擊時傳遞參數以及點擊對象 */}
    <button onClick={(e) => Click3('para', e)}>click3</button>
  </div>
}

function App() {
  const list = [
    { key: 1, name: 'qwe' },
    { key: 2, name: 'asd' },
    { key: 3, name: 'zxc' }
  ]


  return (
    //1.
    //review jsx: html的格式，運行js表達式，必須是表達式。 變量，字符串，函數，方法，對象
    // <div className="App">
    //   {'Pi = '}
    //    {pi}
    //    {getX()}
    //    {new Date().getDate()}
    //   <div style={{ color: 'red', backgroundColor: 'gray' }}>red text</div>
    // </div>

    //2
    // <div>
    //   {/* review 在map的時候對重複標籤加 key值，可以提高react性能（否則他會報警告） */}
    //   {list.map(ele=> (<p key={ele.key}>{ele.name}</p>) )}
    // </div>

    // 3.
    <Button />  //自閉和方式
    // <Button></Button>

    // 4.

  );
}
// function App4() {
//   //review useState
//   const [count, setCount] = useState(0);
//   return (
//     <button>{count}</button>
//   );
// }
export default App;
