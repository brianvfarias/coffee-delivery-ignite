import { BuyingInfo, CoffeCard, DisplayList, HomeContainer, Intro, ListOfCoffes } from "./styles";
import remarkableIMG from "../../assets/Imagem.svg"
import { useContext } from "react";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react"
import { ProductsContext } from "../../contexts/ProductsContext";



export function Home() {
  const { products } = useContext(ProductsContext)
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
              return (
                <CoffeCard key={product.id}>
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
                  <BuyingInfo>
                    <span className="price">{product.price}</span>
                    <input type="number" name="" id="" />
                    <button>
                      <ShoppingCart size={22} weight="fill" />
                    </button>
                  </BuyingInfo>
                </CoffeCard>
              )
            })
          }
        </ListOfCoffes>
      </DisplayList>
    </HomeContainer>
  )
}