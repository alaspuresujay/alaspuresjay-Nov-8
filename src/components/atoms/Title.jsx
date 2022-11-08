import React from "react"
import styled from "styled-components"
import COLORS from "../../utils/Colors"

const Name = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${COLORS.text};
`

function Title({ name }) {
  return <Name>{name}</Name>
}

export default Title
