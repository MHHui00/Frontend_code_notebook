import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { increase, decrease, setTo100, setToX } from "./store/modules/counterStore";
import { fetchChannelList } from "./store/modules/channel";

function App() {
  //review ！！！注意模塊裡initialState的變量名 和 整合Store裡的屬性名 和 useSelector中 state.xxx的名。 這三者之間的關係
  //review 個人理解：state.MustBeSame：   MustBeSame相當於一個標記，找到標記對應的“reducer”， 回到這個“reducer”的模塊，返回他的initialState。 initialState是個類，所以需要解構獲取狀態的值。
  const { Num: abc } = useSelector(state => state.MustBeSame);
  const { channelList } = useSelector(state => state.qwe)

  //review !? 這裡的意義是什麼？ 好像只是在改名？為什麼不可以直接用useDispatch
  const dispatch = useDispatch()

  //review !? 為什麼這裡約束數組放dispatch？
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])

  return (
    <div className="App">
      <button onClick={() => dispatch(decrease())}>-</button>
      {abc}
      <button onClick={() => {
        dispatch(increase());
        // console.log(MustBeSame1);
      }}>+</button>
      <p></p>
      <button onClick={() => dispatch(setTo100())}>set to 100</button>
      <button onClick={() => dispatch(setToX(300))}>set to 300</button>
      <ul>
        {channelList.map((ele) => <li key={ele.id}>{ele.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
