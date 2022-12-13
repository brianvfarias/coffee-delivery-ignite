import { useForm, FormProvider } from "react-hook-form"
import { CheckoutContainer, ClientForm, PaymentMethods, OrderInfo, SubmitOrderBtn, OrderSide } from "./styles"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { useContext } from "react";
import { CoffeeOrdersContext } from "../../contexts/CoffeeOrdersContexts";
import { CoffeeOrdered } from "./components/CoffeeOrdered";

export function Checkout() {
  const { ordersToCart, orderFullPrice } = useContext(CoffeeOrdersContext)
  const { register, handleSubmit } = useForm();

  const formContext = { register, handleSubmit }
  const thereAreOrdersInCart = ordersToCart.length > 0 ? true : false
  const deliveryPrice = 0
  return (
    <CheckoutContainer>
      <ClientForm>
        <form >
          <h3>Complete seu pedido</h3>
          <header>
            <MapPinLine size={22} color={"#C47F17"} />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </header>
          <div>
            <input type="text" placeholder="CEP" {...register("CEP")} />
          </div>
          <input type="text" placeholder="Rua"  {...register("street")} />
          <div className="details-address">
            <input type="number" placeholder="Número" {...register("number")} />
            <input type="text" placeholder="Complemento"  {...register("complement")} />
          </div>
          <div className="macro-address">
            <input type="text" placeholder="Bairro"  {...register("block")} />
            <input type="text" placeholder="Cidade"  {...register("city")} />
            <input type="text" placeholder="UF"  {...register("UF")} />
          </div>
          <PaymentMethods>
            <header>
              <CurrencyDollar size={22} color={"#8047F8"} />
              <div>
                <h3>Pagamento</h3>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </header>
            <div className="methods">
              <button type="button"> <CreditCard size={16} color={"#8047F8"} /> CARTÃO DE CRÉDITO</button>
              <button type="button"> <Bank size={16} color={"#8047F8"} /> CARTÃO DE DÉBITO</button>
              <button type="button"> <Money size={16} color={"#8047F8"} /> DINHEIRO</button>
            </div>
          </PaymentMethods>
        </form>
      </ClientForm>

      <OrderSide>
        <h3>Cafés selecionados</h3>
        <div className="displayOrder">
          {thereAreOrdersInCart ?
            ordersToCart.map(order => {
              return (
                <CoffeeOrdered key={order.product?.name} order={order} ></CoffeeOrdered>
              )
            })
            : <div className="noOrder">
              <h1>Não há pedidos ainda</h1>
            </div>
          }
          <OrderInfo>
            <div>
              <span>Total de itens</span>
              <span>R$ {orderFullPrice?.toFixed(2).replace(".", ",")}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {deliveryPrice.toFixed(2).replace(".", ",")}</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>R$ {(orderFullPrice! + deliveryPrice).toFixed(2).replace(".", ",")}</span>
            </div>
          </OrderInfo>
          <SubmitOrderBtn>Confirmar pedido</SubmitOrderBtn>
        </div>
      </OrderSide>
    </CheckoutContainer >
  )
}