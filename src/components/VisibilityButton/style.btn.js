import styled from "styled-components"
import COLORS from "../../utils/Colors"

export const ButtonWrapper = styled.div`
  color: ${COLORS.textSelected};
  position: relative;
`

export const Button = styled.div`
  padding: 6px 8px;
  border-radius: 20px;
  background-color: ${COLORS.secondary};
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

export const PopupWrapper = styled.div``
