//reducer function that assigns state and action that switches between two cases of delete & add 
export default (state, action) => {
    switch(action.type) {

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) //filtering transactions based on id if they don't match with each other
            }

        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]  //adding new transactions 
            }    
        default:
            return state;
    }
}