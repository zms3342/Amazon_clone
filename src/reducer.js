//data initial state store is an object
export const initialState = {
	basket:[],
};

//action ex.) add item to basket
//mutable updates
function reducer(state,action){
	switch(action.type) {
		case 'ADD_TO_BASKET':
		//logic to add to basket
		break; 

		case 'REOMVE_FROM_BASKET':
		//logic to remove from basket
		break;

		default: 
		//return state that we started with
			return state;
	}
} 

export default reducer;

