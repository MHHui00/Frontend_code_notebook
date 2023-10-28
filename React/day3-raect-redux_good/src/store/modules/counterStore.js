import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'fk_u',
    initialState: {
        Num: 0,
        // count: 10,
    },
    reducers: {
        increase(state){
            state.Num ++;
            console.log(state.Num);

        },
        decrease(state){
            state.Num --;
            console.log(state.Num);
        },
        setTo100(state){
            state.Num = 100;
            console.log(state.Num);
        },
        setToX(state,action){
            state.Num = action.payload;
            console.log(state.Num);
        }
    }
})

//review ！？ 為什麼這裡一部分要按需導出，一部分要默認導出？一次性導出所有不好嗎？還是說action和reducer分開導出便於區分？
//review 還有，使用export導出 是什麼’ema？‘標準裡的用法。跟目錄的package.json好像沒有聲明使用了這種標準啊
const {increase, decrease, setTo100, setToX} = slice.actions;
const reducer = slice.reducer;

export {increase, decrease, setTo100, setToX};
export default reducer