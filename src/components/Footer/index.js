import styled, { css } from "styled-components"

const Footer = styled.div`
  margin-top: auto;
  text-align: center;
  padding: 0.5em 0;
  background: ${({ theme }) => theme.colors.primary.light};
  p {
    color: ${({ theme }) => theme.colors.white};
  }
`

export default function Header() {
  return (
    <Footer>
      <p>RedLight Hotel - 2025 todos os direitos reservados</p>
    </Footer>
  )
}
