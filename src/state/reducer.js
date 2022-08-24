export const initialstate = {
    profile: null,
    // carts: null,
    // cartproduct_complete: null,
    // cartproductf_incomplete: null,
    // reloadpage: null,
}

const reducer = (state, action) => {
    // console.log(action.type);
    switch (action.type) {
        case "ADD_PROFILE":
            return {
                ...state,
                profile: action.profile,
            }
        // case "ADD_CART":
        //     return {
        //         ...state,
        //         carts: action.carts,
        //     }
        // case "ADD_CARTPRODUCT_COMPLETE":
        //     return {
        //         ...state,
        //         cartproduct_complete: action.cartproduct_complete
        //     }
        // case "ADD_CARTPRODUCT_INCOMPLETE":
        //     return {
        //         ...state,
        //         cartproductf_incomplete: action.cartproductf_incomplete
        //     }
        // case "ADD_RELOADPAGE_DATA":
        //     return {
        //         ...state,
        //         reloadpage: action.reloadpage
        //     }
        default:
            return state;
    }
}

export default reducer;