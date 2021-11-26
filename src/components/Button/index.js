import styled, { css } from "styled-components"
import { faCog } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Styled = () => {}

const ButtonStyles = css`
  width: ${({ size }) => (size ? size : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: Ubuntu;
  font-size: 1.1em;
  font-weight: 600;
  /* padding: 1em 2em; */
  height: 2.8125em;
  padding: 2em 2em;
  cursor: pointer;
  transition: 0.2s ease;
  border-radius: 8px;
  :hover {
    /* opacity: 0.9; */
  }
  :active {
    opacity: 0.7;
  }
  .marginRight {
    margin-right: 1em;
  }
`

Styled.Button = styled.button`
  ${ButtonStyles}
  position:relative;
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.white};
  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    left: 0;
    top: 0;
    border-radius: 8px;
    box-shadow: 0 0 0 ${({ theme }) => theme.colors.primary.light};
    transition: 0.2s ease;
  }
  :hover {
    /* background-color: ${({ theme }) => theme.colors.primary.medium}; */
    :after {
      box-shadow: -5px 5px 15px ${({ theme }) => theme.colors.primary.light};
    }
  }
`

Styled.InvertedButton = styled.button`
  ${ButtonStyles}
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary.light};
  box-shadow: 0 0 0 ${({ theme }) => theme.colors.primary.light};
  :hover {
    background-color: ${({ theme }) => theme.colors.gray.light};
  }
`

export default function Button({
  children,
  variant,
  isLoading,
  loadingText = "Carregando",
  type,
  href,
  size,
  ...rest
}) {
  function getButton() {
    if (variant === "secondary") {
      return <Styled.InvertedButton {...rest}>{children}</Styled.InvertedButton>
    }
    return (
      <Styled.Button size={size} {...rest}>
        {isLoading && (
          <FontAwesomeIcon
            icon={faCog}
            width={15}
            height={15}
            className="fa-spin"
          />
        )}
        {isLoading ? " " + loadingText : children}
      </Styled.Button>
    )
  }
  return getButton()
}

Button.Link = ({ children, href }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}
