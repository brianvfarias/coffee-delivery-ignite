// import { useContext } from "react";
import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CoffeeOrdersContext, OrdersInCartType } from "../../../../contexts/CoffeeOrdersContexts";
import { OrderType } from "../../../Home/components/CoffeCard";
import { CoffeeOrderedContainer } from "./styles";

interface CoffeeOrderedPropsType {
  order: OrdersInCartType
}

export function CoffeeOrdered({ order }: CoffeeOrderedPropsType) {
  const { handleSubmit } = useForm()
  const { updateCoffeeInOrder, removeCoffeeInOrder } = useContext(CoffeeOrdersContext)

  function subtractCoffeeInOrder() {
    const data: OrderType = {
      coffeeName: order.product!.name,
      amountOfCoffees: order.amount - 1
    }

    if (data.amountOfCoffees > 0) {
      return updateCoffeeInOrder(data)
    }
    removeCoffeeInOrder(data)
  }

  function addCoffeeMoreCoffeeInOrder() {
    const data: OrderType = {
      coffeeName: order.product!.name,
      amountOfCoffees: order.amount + 1
    }

    updateCoffeeInOrder(data)
  }

  function removeCoffeeFromOrder() {
    const data: OrderType = {
      coffeeName: order.product!.name,
      amountOfCoffees: order.amount + 1
    }
    removeCoffeeInOrder(data)
  }

  return (
    <CoffeeOrderedContainer>
      <div className="imgArea"><img src={order.product?.imgFile} /></div>
      <div className="productInfo">
        <span>{order.product?.name}</span>
      </div>
      <span className="price" >{order.product?.price}</span>
      <div className="updateOrder">
        <div className="addOrSubtract">
          <button onClick={handleSubmit(subtractCoffeeInOrder)}><Minus size={14} color={"#8047F8"} /> </button>
          <span>{order.amount}</span>
          <button onClick={handleSubmit(addCoffeeMoreCoffeeInOrder)} ><Plus size={14} color={"#8047F8"} /> </button>
        </div>
        <button className="remove" onClick={handleSubmit(removeCoffeeFromOrder)} > <Trash size={16} color={"#8047F8"} /> REMOVER</button>
      </div>
    </CoffeeOrderedContainer>
  )
}