import React from "react"
import styled from "styled-components"
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined"
import COLORS from "../../utils/Colors"

function OptionPopup({ selectedOption, handleOptionClick, options }) {
  return (
    <PopupWrapper onBlur={handleOptionClick}>
      {options.map((option) => (
        <OptionItem
          {...option}
          handleOptionClick={handleOptionClick}
          isSelected={selectedOption.label === option.label}
        />
      ))}
    </PopupWrapper>
  )
}

function OptionItem({ Icon, label, content, isSelected, handleOptionClick }) {
  return (
    <OptionItemWrapper isSelected={isSelected} onClick={() => handleOptionClick({ Icon, label, content })}>
      <Icon fontSize="10px" />
      <div className="content">
        <p className="label">{label}</p>
        <p className="desc">{content}</p>
      </div>
      {isSelected && <CheckOutlinedIcon />}
    </OptionItemWrapper>
  )
}

export default OptionPopup

const PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid ${COLORS.border};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  padding: 8px;
  position: absolute;
  width: max-content;
  right: 0;
  top: calc(100% + 8px);
`
const OptionItemWrapper = styled.div`
  display: flex;
  color: ${(props) => (props.isSelected ? COLORS.primary : COLORS.text)};
  padding: 8px 8px;
  gap: 10px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.border};
  }
  .content {
    /* margin-left: 8px; */
    display: flex;
    flex-direction: column;

    .desc {
      opacity: 0.6;
    }
  }
`
