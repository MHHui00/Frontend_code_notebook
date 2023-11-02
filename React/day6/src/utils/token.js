//review 封裝
// const tokenKey = 'tokenKey'

const getTokenKey = ()=>{
    return localStorage.getItem('tokenKey')
}

const setTokenKey = (tokenValue)=>{
    localStorage.setItem('tokenKey', tokenValue)
}
const removeItem = ()=>{
    localStorage.removeItem('tokenKey')
}


export {getTokenKey, setTokenKey, removeItem};