import styled, { css } from "styled-components"
import Image from "next/image"

const Styled = () => {}

Styled.Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 15em;
  row-gap: 4em;

  @media only screen and (max-width: 800px) {
    & {
      align-items: center;
      flex-direction: column-reverse;
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
`

Styled.Title = styled.h1`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.primary.light};
  margin-bottom: 0;
`

Styled.Description = styled.p`
  font-size: 0.875em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: 2em;
`

Styled.Group = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`

Styled.Input = styled.input`
  font-size: 1em;
  padding: 1em;
  border-radius: 4px;
  border: none;
  outline: none;
  height: 2.8125em;
  background-color: ${({ theme }) => theme.colors.gray.light};
  color: ${({ theme }) => theme.colors.gray.dark};
  :hover {
    box-shadow: -5px 5px 15px ${({ theme }) => theme.colors.gray.light};
    outline: 2px solid ${({ theme }) => theme.colors.gray.medium};
  }
  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.light};
  }
`

Styled.TextArea = styled.textarea`
  font-size: 1em;
  padding: 1em;
  border-radius: 4px;
  font-family: Ubuntu;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.gray.light};
  color: ${({ theme }) => theme.colors.gray.dark};
  :hover {
    box-shadow: -5px 5px 15px ${({ theme }) => theme.colors.gray.light};
    outline: 2px solid ${({ theme }) => theme.colors.gray.medium};
  }
  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.light};
  }
`

Styled.Label = styled.label`
  font-size: 0.8em;
  font-weight: 600;
  margin: 1em 0;
`

Styled.GroupButtons = styled.div`
  display: flex;
  gap: 2em;
  margin-top: 1em;
  a {
    width: 100%;
  }
`

Styled.Error = styled.span`
  font-size: 1em;
  font-style: oblique;
  color: red;
  margin: 0.5em 0;
  opacity: ${({ error }) => (error ? 1 : 0)};
`

const Form = () => {}

Form.Container = props => {
  return <Styled.Container>{props.children}</Styled.Container>
}

Form.Figure = props => {
  return <Image {...props} />
}

Form.Title = props => {
  return <Styled.Title>{props.children}</Styled.Title>
}

Form.Description = props => {
  return <Styled.Description>{props.children}</Styled.Description>
}

Form.Group = props => {
  return <Styled.Group {...props}>{props.children}</Styled.Group>
}

Form.Input = props => {
  return (
    <>
      <Styled.Input {...props} />
      <Styled.Error error={props.error}>{props.error}</Styled.Error>
    </>
  )
}

Form.TextArea = props => {
  return (
    <>
      <Styled.TextArea {...props} />
      <Styled.Error error={props.error}>{props.error}</Styled.Error>
    </>
  )
}

Form.Label = props => {
  return <Styled.Label {...props}>{props.children}</Styled.Label>
}

Form.GroupButtons = props => {
  return <Styled.GroupButtons {...props}>{props.children}</Styled.GroupButtons>
}

export default Form
