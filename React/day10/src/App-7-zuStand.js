import { create } from 'zustand'

//review zustand: 語法較簡單的一個狀態管理包。！！同時異步邏輯寫法也簡單

//1. 创建store
// 语法容易出错
// 1. 函数参数必须返回一个对象 对象内部编写状态数据和方法
// 2. set是用来修改数据的专门方法必须调用它来修改数据
// 语法1：参数是函数 需要用到老数据的场景
// 语法2：参数直接是一个对象

set({ count: 100 })
const zustandStore = create((set) => {
    return {
        count: 0,
        inc: () => {
            set((state) => ({ count: state.count += 1 }))
        }
    }
})

function App() {
    const { count, inc } = zustandStore()

    return <div>
        <button onClick={inc}>{count}</button>
    </div>
}

export default App;