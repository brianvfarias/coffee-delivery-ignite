import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { CoffeeOrderContextProvider } from "./contexts/CoffeeOrdersContexts"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter >
        <CoffeeOrderContextProvider>
          <Router />
        </CoffeeOrderContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

