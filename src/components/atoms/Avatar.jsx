import React from "react"
import styled from "styled-components"
export const UserAvatar = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: #eee;
`
function Avatar({ src, alt }) {
  return <UserAvatar {...{ src, alt }} />
}

export default Avatar
