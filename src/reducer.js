// some function that received two params - state and action
export function reducer(state, {type, payload}) {

    switch (type) {

        case 'ADD_TO_BASKET': {
            let exist_same = false;

            let updatedCartItems = state.cartItems.map((ci) => {
                    // ci.mainId === item.mainId ? {...ci, quantity: ci.quantity + 1} : ci
                    if (ci.mainId === payload.mainId) {
                        exist_same = true;
                        return {...ci, quantity: ci.quantity + 1};
                    } else {
                        return ci
                    }
                }
            )

            //if there aren't cartItems
            // or there isn't item with current.mainId in cartItems, we need to add new item else update only
            if (state.cartItems.length === 0 || !exist_same) {

                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                updatedCartItems = [...state.cartItems, newItem]
            }

            return {
                ...state,
                cartItems: updatedCartItems,
            };
        }
        case 'REMOVE_FROM_BASKET': {
            const updatedCartItems = state.cartItems.filter(i => i.mainId !== payload.id);
            return {
                ...state,
                cartItems: updatedCartItems,
            };
        }
        case 'INCREMENT_QUANTITY': {

            const updatedCartItems = state.cartItems.map(ci =>
                ci.mainId === payload.id ? {...ci, quantity: ci.quantity + 1} : ci
            )

            return {
                ...state,
                cartItems: updatedCartItems,
            };

        }
        case 'DECREMENT_QUANTITY': {

            const updatedCartItems = state.cartItems.map(ci =>
                ci.mainId === payload.id ? {...ci, quantity: ci.quantity - 1} : ci
            )
            return {
                ...state,
                cartItems: updatedCartItems,
            };
        }
        default:
            return state;
    }
}