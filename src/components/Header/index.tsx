import { CartWrapper, DisplayInfo, HeaderContainer, LocationWrapper, OrderAmount } from "./styles";
import logo from "../../assets/Logo.svg"
import { ShoppingCart, MapPin } from "phosphor-react"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeeOrdersContext } from "../../contexts/CoffeeOrdersContexts";

export function Header() {
  const { ordersToCart } = useContext(CoffeeOrdersContext)
  return (
    <HeaderContainer>
      <img src={logo} />
      <DisplayInfo>
        <LocationWrapper>
          <MapPin size={22} weight="fill" />
          <span>Baturité, CE</span>
        </LocationWrapper>
        <NavLink to={ordersToCart.length > 0 ? "/checkout" : ""}>
          <CartWrapper  >
            {ordersToCart.length > 0 ?
              <OrderAmount>{ordersToCart.length}</OrderAmount>
              : ""
            }
            <ShoppingCart size={22} weight="fill" />

          </CartWrapper>
        </NavLink>
      </DisplayInfo>
    </HeaderContainer >
  )
}