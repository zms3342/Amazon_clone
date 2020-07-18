//data initial state store is an object
export const initialState = {
	basket: [],
};

//action ex.) add item to basket
//mutable updates
const reducer = (state,action) => {
	console.log(action)
	switch(action.type) {
		case 'ADD_TO_BASKET':
		//logic to add to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case 'REOMVE_FROM_BASKET':
		//logic to remove from basket
			return {state};

		default: 
		//return state that we started with
			return state;
	}
} 

export default reducer;

