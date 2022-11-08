import React, { useRef, useState } from "react"
import { BodyContent, CardBody, CardBodyTop, CardFooter, CardHeader, CardWrapper } from "./style.card"
import CloseIcon from "@mui/icons-material/Close"
import Avatar from "../atoms/Avatar"
import Title from "../atoms/Title"
import VisibilityButton from "../VisibilityButton"
import IconButton from "../atoms/IconButton"
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto"
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions"
import Button from "../atoms/Button"
import DisplayImage from "../atoms/DisplayImage"
import TextArea from "../atoms/TextArea"

function Card() {
  const inputRef = useRef()
  const [postData, setPostData] = useState({
    content: "",
    file: "blob:http://localhost:3000/2f0e180c-a98b-4e4e-bf3f-a51a6a5679ef",
  })

  const handlePostData = ({ type, data }) => {
    setPostData((prev) => ({ ...prev, [type]: data }))
  }

  const handlePost = () => {
    console.log({ ...postData, content: inputRef.current.value })
  }

  return (
    <CardWrapper>
      <CardHeader>
        <Title name="Create a new post" />
        <CloseIcon />
      </CardHeader>

      <CardBody>
        <Avatar src="https://avatars.dicebear.com/api/pixel-art/ssa.svg?size=100" alt="random" />
        <BodyContent>
          <CardBodyTop>
            <Title name="Elon Musk" />
            <VisibilityButton />
          </CardBodyTop>
          <TextArea ref={inputRef} />
          {postData.file && (
            <DisplayImage onRemove={() => setPostData((prev) => ({ ...prev, file: "" }))} src={postData.file} />
          )}
        </BodyContent>
      </CardBody>

      <CardFooter>
        <div className="action-holder">
          <IconButton handleChange={handlePostData} type="file" Icon={InsertPhotoIcon} />
          <IconButton type="emoji" Icon={EmojiEmotionsIcon} />
        </div>
        <Button onClick={handlePost} />
      </CardFooter>
    </CardWrapper>
  )
}

export default Card
