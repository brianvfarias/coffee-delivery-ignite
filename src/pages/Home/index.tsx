import { HomeContainer, Intro } from "./styles";
import remarkableIMG from "../../assets/Imagem.svg"
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react"

export function Home() {
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
    </HomeContainer>
  )
}