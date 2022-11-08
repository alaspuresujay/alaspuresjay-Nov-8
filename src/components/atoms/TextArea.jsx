import React, { useState } from "react"
import styled from "styled-components"
import COLORS from "../../utils/Colors"

const TextArea = React.forwardRef((props, ref) => {
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <InputWrapper>
      <textarea
        ref={ref}
        value={input}
        onChange={handleChange}
        rows="5"
        type="text"
        maxLength="250"
        placeholder="What's happening?"
      />
      <p className="count">{input.length}/250</p>
    </InputWrapper>
  )
})

const InputWrapper = styled.div`
  .count {
    text-align: right;
    color: ${COLORS.text};
  }
`

export default TextArea
