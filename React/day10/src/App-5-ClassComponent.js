import { Component } from "react";

//review 類組件的定義：1. 最基礎的類組件
// class App extends Component {
//     render() {
//         return (
//             <div>this is a class componnent</div>
//         )
//     }
// }

//review 2.包含狀態的類組件
// class App extends Component {
//     //狀態(一個類)（類的變量成員）
//     state = {   //!！必須叫state
//         count: 0
//     };

//     //狀態的reducer （類的函數）
//     changeState = () => {
//         this.setState({     //！！必須使用serState改變state，傳入一個類，屬性為要修改的state
//             count: this.state.count+=1
//         })
//     };

//     render() {
//         return (
//             <div>this is a class componnent
//                 <button onClick={this.changeState}>{this.state.count}</button>
//             </div>
//         )
//     };
// }


//review 3.類組件的 （構造和析構函數）
class App extends Component{
    //review 3.1 組件渲染完成後運行一次的function（相當於構造）。相當於空依賴的useEffect，用來發送異步請求
    componentDidMount(){
        console.log('rander finished');
    }

    //review 3.2 組件卸載時調用的函數 一般來清除一些組件遺留下來的對象，例如定時器（相當於析構函數）
    componentWillUnmount(){
        console.log('component uninstalled');
    }


    render(){
        return(
            <div>App</div>
        )
    }
}

export default App;