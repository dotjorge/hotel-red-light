import styled, { css } from "styled-components"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import Reserve from "../Reserve"

const Styled = () => {}

Styled.Sticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  /* position: fixed;
  width: 100%; */
  overflow: hidden;
  backdrop-filter: blur(20px);
  :before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.85;
    background: ${({ theme }) => theme.colors.white};
  }
`

Styled.Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  padding: 1em 0;
  padding: 1em;
  // Testando menu na outra linha
  flex-flow: wrap;

  @media only screen and (max-width: 800px) {
    & {
      align-items: center;
      flex-direction: row;
      img {
        width: 200px;
        height: 200px;
      }
    }
    & > div:nth-of-type(1) {
      order: 2;
    }
    & > div:nth-of-type(2) {
      order: 1;
    }
    & > div:nth-of-type(3) {
      order: 1;
    }
  }
`

Styled.MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  transition: max-height 0.2s ease;

  @media only screen and (max-width: 800px) {
    & {
      width: 100%;
      flex-direction: column;
      max-height: 0;
      overflow: hidden;
    }
  }
`

Styled.Logo = styled(Image)`
  width: 100%;
  flex: 0;
`

Styled.Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  @media only screen and (max-width: 800px) {
    & {
      width: 100%;
      flex-direction: column;
      padding: 5px;
    }
  }
`

Styled.Item = styled.a`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.gray.dark};
  padding: 0.6em 1.4em;
  outline: 2px solid transparent;
  font-weight: 500;

  ${({ selected, theme }) =>
    selected
      ? css`
          outline: 2px solid ${({ theme }) => theme.colors.primary.light};
          color: ${theme.colors.white};
          background: ${theme.colors.primary.light};
        `
      : css`
          :hover {
            outline: 2px solid ${({ theme }) => theme.colors.primary.light};
            color: ${({ theme }) => theme.colors.primary.light};
          }
        `}
`

Styled.UserDropdownMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;

  :hover {
    > div {
      max-height: 400px;
    }
  }

  > div {
    transition: 0.2s ease;
    max-height: 0;
    position: absolute;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    right: 0;
    overflow: hidden;
    top: 100%;
    width: auto;
    white-space: pre;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    > span {
      color: ${({ theme }) => theme.colors.primary.light};
      padding: 0.8em;
      :hover {
        background: ${({ theme }) => theme.colors.primary.light};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`

Styled.LoginOrRegister = styled.div`
  color: ${({ theme }) => theme.colors.primary.light};
  font-weight: bold;
  font-size: 0.9em;

  > span {
    margin: 0 0.5em;
  }

  @media only screen and (max-width: 800px) {
    & {
      /* display: none; */
      margin-left: auto;
      margin-right: 1em;
    }
  }
`

Styled.Hamburguer = styled.div`
  position: relative;
  display: none;
  width: 40px;
  height: 40px;

  > div {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    transition: 0.2s ease;
  }

  > div > span {
    width: 40px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  b {
    opacity: 0;
    width: 20px;
    height: 20px;
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5em;
    color: ${({ theme }) => theme.colors.primary.light};
    transition: 0.2s ease;
  }

  @media only screen and (max-width: 800px) {
    & {
      display: flex;
    }
  }
`

export default function Header() {
  const router = useRouter()
  const user = true

  return (
    <Styled.Sticky>
      <Styled.Container className="container">
        <Link href="/">
          <a style={{ width: "180px", height: "31px", position: "relative" }}>
            <Logo />
          </a>
        </Link>
        <Styled.MenuContainer id={"toggle-menu"}>
          <Menu />
        </Styled.MenuContainer>
        {/* <LoginOrRegister /> */}
        <Hamburguer />
      </Styled.Container>
      <Reserve show={router.pathname === "/" ? false : false} />
    </Styled.Sticky>
  )
}

function Logo() {
  return (
    <Styled.Logo src="/svgs/logo.svg" width={180} height={31} layout="fixed" />
  )
}

function Menu() {
  const router = useRouter()

  const MENU_ITEMS = [
    {
      name: "Inicio",
      route: "/#inicio"
    },
    {
      name: "Baixe o app",
      route: "/#baixe-o-app"
    },
    {
      name: "Avaliações",
      route: "/#avaliacoes"
    },
    {
      name: "Contato",
      route: "/#contato"
    }
  ]
  return (
    <Styled.Menu>
      {MENU_ITEMS.map((item, index) => (
        <Link href={item.route} key={index}>
          <Styled.Item
            className="pressable border-radius"
            selected={item.route === "/#baixe-o-app" ? true : false}
          >
            {item.name}
          </Styled.Item>
        </Link>
      ))}
    </Styled.Menu>
  )
}

function UserDropdownMenu() {
  return (
    <Styled.UserDropdownMenu>
      <Image src="/svgs/logo.svg" width={31} height={31} />
      <h3>Nome</h3>
      <div>
        <span className="pressable">Minhas reservas</span>
        <span className="pressable">Minha Conta</span>
        <span className="pressable">Sair</span>
      </div>
    </Styled.UserDropdownMenu>
  )
}

function LoginOrRegister() {
  return (
    <Styled.LoginOrRegister>
      <Link href="/entrar">
        <a>
          <span className="pressable">Entrar</span>
        </a>
      </Link>
      <span>/</span>
      <Link href="/cadastrar">
        <a>
          <span className="pressable">Register</span>
        </a>
      </Link>
    </Styled.LoginOrRegister>
  )
}

function Hamburguer() {
  function handleToggle() {
    const toggleMenu = document.getElementById("toggle-menu")
    const closeIcon = document.getElementById("close-menu")
    const openIcon = document.getElementById("open-menu")
    if (toggleMenu.style.maxHeight !== "400px") {
      closeIcon.style.opacity = "1"
      openIcon.style.opacity = "0"
      toggleMenu.style.maxHeight = "400px"
      return
    }
    openIcon.style.opacity = "1"
    closeIcon.style.opacity = "0"
    toggleMenu.style.maxHeight = "0px"
  }

  return (
    <Styled.Hamburguer onClick={handleToggle}>
      <b id="close-menu">X</b>
      <div id="open-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Styled.Hamburguer>
  )
}
