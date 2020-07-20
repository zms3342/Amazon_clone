//data initial state store is an object
export const initialState = {
	basket: [],
	user:null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price +amount, 0);

//action ex.) add item to basket
//mutable updates
const reducer = (state,action) => {
	console.log(action)
	switch(action.type) {
		case 'SET_USER': 
			return {
				...state, 
				user: action.user
			}
		case 'ADD_TO_BASKET':
		//logic to add to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case 'REMOVE_FROM_BASKET':
		//logic to remove from basket
			//clone basket
			let newBasket = [...state.basket]
			//find the index we want to remove
			const index = state.basket.findIndex(
				(basketItem)=>basketItem.id === action.id);
			if (index >= 0 ){
				//item exists get rid of it
				newBasket.splice(index,1);
			}
			else{
				console.log('cant remove');
			}

			return {
				...state,
				 basket: newBasket,
				};

		default: 
		//return state that we started with
			return state;
	}
} 

export default reducer;

