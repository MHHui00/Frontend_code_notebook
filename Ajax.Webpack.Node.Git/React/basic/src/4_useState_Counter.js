import { useState } from 'react'
import './test.css'

function App4() {
  //review useState(0)，初始化狀態變量為 數字類型的0 返回長度為2的數組，第一個為狀態變量，第二個為修改狀態變量的method。
  //review 狀態變量和普通js變量的不同：狀態變量的改變會引起該組件的刷新
  const [count, setCount] = useState(0);  //結構取值
  const selfAdd = ()=>{
    // count+=1;
    // console.log(count);

    //review 必須通過返回的method才能夠觸發組件的刷新
    setCount(count+1)
  }


  //狀態變量也可以是個對象
  const [form, setForm] = useState({id: 123, name: 'haha'})
  const changeForm = ()=>{
    setForm({
      ...form,    //review 展開運算符。把原來的狀態變量放回來。然後在下面修改有變動的屬性值（會自動覆蓋原有的）。實現僅更新變動屬性，別的保持不變。
      id: form.id+=1,
    })

    
  }

  return (
    <div>
    <button onClick = {selfAdd} className='btn'>{count}</button>
    <button onClick = {changeForm} className='btn'>{form.id}+{form.name}</button>
    </div>
  );
}

export default App4;
