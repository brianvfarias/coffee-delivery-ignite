import { CartWrapper, DisplayInfo, HeaderContainer, LocationWrapper } from "./styles";
import logo from "../../assets/Logo.svg"
import { ShoppingCart, MapPin } from "phosphor-react"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <DisplayInfo>
        <LocationWrapper>
          <MapPin size={22} weight="fill" />
          <span>Baturité, CE</span>
        </LocationWrapper>
        <CartWrapper>
          <ShoppingCart size={22} weight="fill" />
        </CartWrapper>
      </DisplayInfo>
    </HeaderContainer>
  )
}