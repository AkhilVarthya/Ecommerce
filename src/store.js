import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./feature/cart-slice"
import productsReducer from "./feature/product-slice"
import categoriesrReducer from "./feature/categories-slice"
import checkoutReducer from "./feature/checkout-slice"

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        products:productsReducer,
        categories:categoriesrReducer,
        checkout:checkoutReducer,
    }
})