import React from "react"
import styled from "styled-components"
import SendIcon from "@mui/icons-material/Send"

import COLORS from "../../utils/Colors"

function Button({ onClick }) {
  const clickHandler = (e) => {
    e.stopPropagation()
    onClick()
  }
  return (
    <ButtonWrapper onClick={clickHandler}>
      Send Post
      <SendIcon />
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  background-color: ${COLORS.primary};
  padding: 10px 12px;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

export default Button
