import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        const existingIndex = state.items.findIndex(
            (item) => item.card.info.id === action.payload.card.info.id
          );
    
          if (existingIndex >= 0) {
            state.items[existingIndex] = {
              ...state.items[existingIndex],
              cartQuantity: state.items[existingIndex].cartQuantity + 1,
            };
            toast.info("Increased product quantity", {
              position: "top-left",
              autoClose:"200"
            });
          } else {
            let tempProductItem = { ...action.payload, cartQuantity: 1 };
            state.items.push(tempProductItem);
            toast.success("Product added to cart", {
              position: "top-left",
            });
          }
      
    },

    clearCart: (state) => {
      state.items.length = 0;
    },

    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.items = state?.items?.filter(
        (card) => card?.card?.info?.id !== itemId
      );
    },
  },
});
export const { addItem, clearCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
