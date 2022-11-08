import styled from "styled-components"
import COLORS from "../../utils/Colors"

export const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin: 16px;
  min-width: 700px;
  min-height: 500px;
  display: grid;
  grid-template-rows: max-content auto max-content;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e7ebed;

  .title {
    font-size: 1.2 rem;
  }
`

export const CardBody = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: max-content auto;
  flex: 1;
`

export const BodyContent = styled.div`
  padding-left: 1rem;

  textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
    font-size: 18px;
    color: ${COLORS.text};

    &::placeholder {
      color: #d1d6d9;
    }

    &:focus {
      outline: none;
    }
  }
`

export const CardBodyTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #e7ebed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .action-holder {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`
