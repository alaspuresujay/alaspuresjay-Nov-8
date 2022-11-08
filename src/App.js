import React from "react"
import Card from "./components/Card"
import styled from "styled-components"
import COLORS from "./utils/Colors"

function App() {
  return (
    <AppWrapper>
      <Card />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${COLORS.background};
  width: 100vw;
`
