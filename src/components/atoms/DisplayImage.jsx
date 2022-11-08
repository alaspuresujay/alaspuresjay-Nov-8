import React from "react"
import styled from "styled-components"
import CloseIcon from "@mui/icons-material/Close"

function DisplayImage({ src, onRemove }) {
  return (
    <CardImageWrapper>
      <div className="close" onClick={onRemove}>
        <CloseIcon />
      </div>
      <CardImage src={src} />
    </CardImageWrapper>
  )
}

const CardImageWrapper = styled.div`
  position: relative;

  border-radius: 10px;
  border: 1px solid #e0e0e0;
  .close {
    position: absolute;
    top: 4px;
    left: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 4px;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    z-index: 100;
  }
`

const CardImage = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`

export default DisplayImage
