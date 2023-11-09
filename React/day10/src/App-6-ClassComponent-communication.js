import { Component } from "react";
//review class 組件之間數據傳輸

//review 父傳子：
// class Son extends Component {
//     render() {
//         return (
//             <div>
//                 this is son:{this.props.msg}
//             </div>
//         )
//     }
// }

// class Parent extends Component {
//     state={
//         msg: 'msg from parent'
//     }
//     render() {
//         return (
//             <div>
//                 this is parent
//                 <Son msg={this.state.msg}/>
//             </div>
//         )
//     }
// }

//review 子傳父：
class Son extends Component {
    render() {
        return (
            <div>
                this is son
                <button onClick={()=>{this.props.onSendMsg('lalalaalla')}}>send parent msg</button>
            </div>
        )
    }
}

class Parent extends Component {
    getSonMsg(msg){
        console.log(msg);
    }

    render() {
        return (
            <div>
                this is parent
                <Son onSendMsg= {this.getSonMsg}/>
            </div>
        )
    }
}

class App extends Component {

    render() {
        return (
            <Parent />
        )
    }
}

export default App;