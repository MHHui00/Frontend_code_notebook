//review 父模塊想子模塊傳遞參數, 子模塊不可修改傳來的內容
function Son(props) {
    console.log(props);
    return (
        <div>
            <p>a message from {props.name}</p>
            <p>{props.jsx}</p>
            <p>{props.children}</p>
        </div>
    )
}

function App() {
    const abc = 'abc'
    return (
        <Son
            name='father'
            age={23}
            list= {[1,2,3,4]}
            obj= {{name: 'qwe', age: 23}}
            isTrue= {true}
            callBack= {()=> console.log('called')}
            jsx= {<span>this is a span</span>}
        >
            <span>the 'children' attribute will save this dom in son's props </span>
            <p>{abc}</p>
        </Son>
    )
}

export default App;