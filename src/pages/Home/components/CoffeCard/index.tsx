import { Card, BuyingInfo } from "./styles";
import { ProductType } from "../../../../contexts/CoffeeOrdersContexts"
import { ShoppingCart } from "phosphor-react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react";
import { CoffeeOrdersContext } from "../../../../contexts/CoffeeOrdersContexts";

interface CoffeCardProps {
  product: ProductType
}

const NewOrderSchema = z.object({
  coffeeName: z.string(),
  amountOfCoffees: z.number().min(1, { message: "Defina a quantidade" })
})

export type OrderType = z.infer<typeof NewOrderSchema>



export function CoffeCard({ product }: CoffeCardProps) {
  const { addCoffeeToOrder, ordersToCart, updateCoffeeInOrder } = useContext(CoffeeOrdersContext)
  const { register, handleSubmit, reset } = useForm<OrderType>({
    resolver: zodResolver(NewOrderSchema),
    defaultValues: {
      coffeeName: '',
      amountOfCoffees: 0
    }
  })

  function handleNewOrderAmount(data: OrderType) {
    data.coffeeName = product.name

    const alredyOrdered = ordersToCart
      .some(order => order.product?.name === data.coffeeName)

    if (alredyOrdered) {
      updateCoffeeInOrder(data)
      reset()
      return
    }
    addCoffeeToOrder(data)
    reset()
  }
  return (
    <Card>
      <img src={product.imgFile} alt="" />
      <span className="categories">
        {product.categories.map(category => {
          return (
            <span key={category} className="category">{category.toUpperCase()}</span>
          )
        })}
      </span>
      <h3>{product.name}</h3>
      <span className="description">{product.description}</span>
      <BuyingInfo onSubmit={handleSubmit(handleNewOrderAmount)}>
        <span className="price">{product.price}</span>
        <input type="number" {...register("amountOfCoffees", { valueAsNumber: true })} />
        <button type="submit">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </BuyingInfo>
    </Card>
  )
}