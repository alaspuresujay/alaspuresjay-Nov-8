import React, { useState } from "react"
import PublicIcon from "@mui/icons-material/Public"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { ButtonWrapper, Button } from "./style.btn"
import OptionPopup from "../atoms/OptionPopup"

const options = [
  { value: "public", label: "Public", Icon: PublicIcon, content: "Visible to Everyone" },
  { value: "private", label: "Private", Icon: LockOutlinedIcon, content: "Visible to your followers" },
]

function VisibilityButton() {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (option) => {
    if (option) setSelectedOption(option)
    setIsOpen(false)
  }
  return (
    <ButtonWrapper>
      <Button
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
      >
        <selectedOption.Icon color="inherit" />
        <p className="text">{selectedOption.label}</p>
        <ExpandMoreIcon color="inherit" />
      </Button>
      {isOpen && <OptionPopup {...{ selectedOption, options, handleOptionClick }} />}
    </ButtonWrapper>
  )
}

export default VisibilityButton
