import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { ProductsContextProvider } from "./contexts/ProductsContext"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter >
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

