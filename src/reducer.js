//data initial state store is an object
export const initialState = {
	basket: [{
			id:"1230973",
			title:"Noam Chomsky - Internationalism or Extinction",
			image:"https://m.media-amazon.com/images/I/511aJcMzPyL._AC_SL520_.jpg",
			price:21.75, 
			rating:4
	}],
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

		case 'REMOVE_FROM_BASKET':
		//logic to remove from basket
			let newBasket = [...state.basket]
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

