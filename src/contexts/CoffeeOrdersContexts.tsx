import { createContext, ReactNode, useContext, useState } from "react";
import { OrderType } from "../pages/Home/components/CoffeCard";

import { products } from "../database/productsDB"

export type Product = {
  id: number;
  imgFile: string;
  categories: string[];
  name: string;
  description: string;
  price: string;
}


interface CoffeeOrdersContextType {
  products: Product[]
  ordersToCart: OrdersInCartType[]
  orderFullPrice: number | undefined
  addCoffeeToOrder: (data: OrderType) => void;
  updateCoffeeInOrder: (data: OrderType) => void
  removeCoffeeInOrder: (data: OrderType) => void
}


export const CoffeeOrdersContext = createContext({} as CoffeeOrdersContextType);

interface CoffeeOrderContextProviderProps {
  children: ReactNode
}

export interface OrdersInCartType {
  product: Product | undefined
  amount: number
  price: number | undefined;
}

export function CoffeeOrderContextProvider({ children }: CoffeeOrderContextProviderProps) {

  const [ordersToCart, setOrdersToCart] = useState<OrdersInCartType[]>([])

  const orderFullPrice = ordersToCart
    .reduce((acc, order) => {
      return acc + order.price!
    }, 0)

  function addCoffeeToOrder(data: OrderType) {
    const newProductToCart = products.find(product => product?.name === data?.coffeeName)

    const productToCart: OrdersInCartType = {
      product: newProductToCart,
      amount: data.amountOfCoffees,
      price: data.amountOfCoffees * Number(newProductToCart?.price.replace("R$", ""))
    }

    if (productToCart) {
      setOrdersToCart(state => [...state, productToCart])
    }
  }

  function updateCoffeeInOrder(data: OrderType) {
    setOrdersToCart(state => {
      return state.map(order => {
        if (order.product?.name === data.coffeeName) {
          const newPrice = data.amountOfCoffees * Number(order?.product.price.replace("R$", ""))

          return { ...order, amount: data.amountOfCoffees, price: newPrice }
        }
        return order
      })
    })
  }

  function removeCoffeeInOrder(data: OrderType) {
    setOrdersToCart(state => {
      const orderToRemove = state
        .find(order => order.product?.name === data.coffeeName)

      return state.filter(order => order !== orderToRemove)
    })
  }

  return (
    <CoffeeOrdersContext.Provider value={{ addCoffeeToOrder, ordersToCart, products, orderFullPrice, updateCoffeeInOrder, removeCoffeeInOrder }}>
      {children}
    </CoffeeOrdersContext.Provider>
  )
}
