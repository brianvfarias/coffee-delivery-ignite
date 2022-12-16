import { produce } from "immer";
import { ProductType } from "../../contexts/CoffeeOrdersContexts";
import { OrderActionTypes } from "./actions";

export interface OrdersInCartType {
  product: ProductType | undefined;
  amount: number;
  price: number | undefined;
}

export function ordersReducer(state: OrdersInCartType[], action: any) {
  switch (action.type) {
    case OrderActionTypes.ADD_COFFEE_TO_ORDER:
      // return [...state, action.payload.product];
      return produce(state, (draft) => {
        draft.push(action.payload.product);
      });
    case OrderActionTypes.UPDATE_COFFEE_IN_ORDER:
      // return state.map((order) => {
      //   if (order.product?.name === action.payload.product.coffeeName) {
      //     const newPrice =
      //       action.payload.product.amountOfCoffees *
      //       Number(order.product?.price.replace("R$", ""));

      //     return {
      //       ...order,
      //       amount: action.payload.product.amountOfCoffees,
      //       price: newPrice,
      //     };
      //   }
      //   return order;
      // });
      const orderToUpdateIndex = state.findIndex(
        (order) => order.product?.name === action.payload.product.coffeeName
      );

      if (orderToUpdateIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft[orderToUpdateIndex].amount =
          action.payload.product.amountOfCoffees;
        const newPriceOfCoffeeInOrder =
          action.payload.product.amountOfCoffees *
          Number(draft[orderToUpdateIndex].product?.price.replace("R$", ""));
        draft[orderToUpdateIndex].price = newPriceOfCoffeeInOrder;
      });
    case OrderActionTypes.REMOVE_COFFEE_FROM_ORDER:
      return state.filter(
        (order) => order.product?.name !== action.payload.product.coffeeName
      );
    // I guess it doesn't make sense to use immer in this case...
    // const orderToRemoveIndex = state.findIndex(
    //   (order) => order.product?.name === action.payload.product.coffeeName
    // );
    // return produce(state, (draft) => {
    //   draft[orderToRemoveIndex].
    // });
    default:
      return state;
  }
}
