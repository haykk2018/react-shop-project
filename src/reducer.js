// some function that received two params - state and action
export function reducer(state, {type, payload}) {

    switch (type) {

        case 'ADD_TO_BASKET': {
            const existItem = state.cartItems.filter(i => i.mainId === payload.mainId);

            let newOrder = null;
            if (existItem.length === 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.cartItems, newItem];
            } else {
                newOrder = state.cartItems.map((orderItem) => {
                    if (orderItem.mainId === existItem[0].mainId) {
                        return {
                            ...orderItem,
                            quantity: existItem[0].quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                cartItems: newOrder,
            };
        }
        default:
            return state;
    }
}