import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const billStore = createSlice({
    name: 'bill',
    initialState:{
        billList: []
    },
    reducers: {
        setBillList(state, action){
            state.billList = action.payload;
        },
        addBillList(state, action){
            state.billList.push(action.payload)
        }
    }
})

const {setBillList, addBillList} = billStore.actions;

const getBillList = ()=>{
    return async (dispatch)=>{
        const response = await axios.get('http://localhost:8000/ka');
        dispatch(setBillList(response.data))
    }
}
const submitBillList = (data)=>{
    return async (dispatch)=>{
        const response = await axios.post('http://localhost:8000/ka', data);
        dispatch(addBillList(response.data))
        // console.log(response);
    }
}

export {getBillList, submitBillList}

const billReducer = billStore.reducer;
export default billReducer;