export function weatherReducer(state={data:{}}, {type, newDataWeather}){
    if(type === 'ADD_WEATHER'){
        return{
            ...state,
            data: {...newDataWeather}
        }
    }
    return state || {}
}


