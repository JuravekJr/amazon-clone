export const initialState = {
    name: "John",
    sum: "",
    productAll: [],
    user: null
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_SUM":
            return{
                ...state,
                sum: action.sum
            }
        case "ADD_PRODUCTS":
            return{
                ...state,
                productAll: action.product
            }
        case "ADD_USER":
            return{
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default reducer;




