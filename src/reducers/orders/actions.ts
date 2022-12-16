import { OrderType } from "../../pages/Home/components/CoffeCard";
import { OrdersInCartType } from "./reducer";

export enum OrderActionTypes {
  ADD_COFFEE_TO_ORDER = "ADD_COFFEE_TO_ORDER",
  UPDATE_COFFEE_IN_ORDER = "UPDATE_COFFEE_IN_ORDER",
  REMOVE_COFFEE_FROM_ORDER = "REMOVE_COFFEE_FROM_ORDER",
}

export function addCoffeeToOrderAction(product: OrdersInCartType) {
  return {
    type: OrderActionTypes.ADD_COFFEE_TO_ORDER,
    payload: {
      product,
    },
  };
}

export function updateCoffeeInOrderAction(data: OrderType) {
  return {
    type: OrderActionTypes.UPDATE_COFFEE_IN_ORDER,
    payload: {
      product: data,
    },
  };
}

export function removeCoffeeInOrderAction(data: OrderType) {
  return {
    type: OrderActionTypes.REMOVE_COFFEE_FROM_ORDER,
    payload: {
      product: data,
    },
  };
}
