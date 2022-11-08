import React from "react"
import styled from "styled-components"
import COLORS from "../../utils/Colors"

function IconButton({ type, Icon, onClick, handleChange }) {
  const onClickHandler = (e) => {
    e.stopPropagation()
    onClick && onClick({ type })
  }

  const onChangeHandler = (e) => {
    e.stopPropagation()
    if (e.target.files.length !== 0) {
      handleChange({ type, data: URL.createObjectURL(e.target.files[0]) })
    }
  }
  return (
    <IconWrapper onClick={onClickHandler}>
      <label htmlFor={type}>
        <Icon color="inherit" />
      </label>
      {type === "file" && (
        <input onChange={onChangeHandler} type={type} id={type} name={type} accept="image/png, image/jpeg" />
      )}
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  color: ${COLORS.text};
  background-color: ${COLORS.border};
  padding: 8px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  height: 40px;
  cursor: pointer;
  label {
    cursor: pointer;
  }

  input {
    /* visibility: hidden; */
    display: none;
  }
`

export default IconButton
