import{createSlice} from '@reduxjs/toolkit'

const counterStore =  createSlice({
    name: 'counter',
    initialState:{
        apple: 2,
        count: 1,
    },
    reducers:{
        increment(state){
            state.count++;
            // console.log(state);

        },
        decrement(state){
            state.count--;
            // console.log(state);
        },
    }
})

const {increment, decrement} = counterStore.actions;
const reducer = counterStore.reducer;

export{increment, decrement};
export default reducer; 