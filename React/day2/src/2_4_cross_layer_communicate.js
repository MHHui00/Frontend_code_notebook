//review 跨層級通訊導入createContext, useContext. 1. 在所有層級之外（全局）聲明createContext。 2.頂層通過 <ctx.Provider> 裝載數據。 3. 底層通過useContext（ctx）獲取數據
import {useState, createContext, useContext} from 'react'

const context = createContext()

function App() {
    const msg = 'msg from root'
    return (
        <div>
            root
            <context.Provider value={msg}>
            <Son/>
            </context.Provider>
        </div>
    )
}

function Son() {
    return (
        <div>
            Son
            <GrandSon/>
        </div> 
    )
}
function GrandSon() {
    const msg = useContext(context);
    return (
        <div>
            GrandSon,{msg}
        </div>
    )
}

export default App;