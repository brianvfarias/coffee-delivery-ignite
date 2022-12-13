import { DisplayList, HomeContainer, Intro, ListOfCoffes } from "./styles";
import remarkableIMG from "../../assets/Imagem.svg"
import { useContext } from "react";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react"
import { CoffeCard } from "./components/CoffeCard";
import { CoffeeOrdersContext } from "../../contexts/CoffeeOrdersContexts";


export function Home() {
  const { products } = useContext(CoffeeOrdersContext)
  return (
    <HomeContainer>
      <Intro >
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

          <ul>
            <li> <span className="shoppingCart">
              <ShoppingCart size={16} weight="fill" />
            </span> Compra simples e segura</li>
            <li> <span className="package">
              <Package size={16} weight="fill" />
            </span> Embalagem mantém o café intacto</li>
            <li> <span className="timer">
              <Timer size={16} weight="fill" />
            </span> Entrega rápida e rastreada</li>
            <li> <span className="coffee">
              <Coffee size={16} weight="fill" />
            </span> O café chega fresquinho até você</li>
          </ul>
        </div>
        <img src={remarkableIMG} alt="" />
      </ Intro>
      <DisplayList>
        <h2>Nossos cafés</h2>
        <ListOfCoffes>
          {
            products.map(product => {
              return <CoffeCard key={product.id} product={product} />
            })
          }
        </ListOfCoffes>
      </DisplayList>
    </HomeContainer>
  )
}