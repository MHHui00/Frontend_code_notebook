import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './modules/counterStore'

const store =  configureStore({
    reducer:{
        count: counterReducer
    }
})

export default store; 