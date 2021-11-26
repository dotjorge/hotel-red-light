import { useEffect } from "react"
import styled, { css } from "styled-components"

const Styled = () => {}

Styled.Reserve = styled.div`
  position: relative;
  // Diminuir um pouco, porém quebra elsewhere
  font-size: 80%;

  .fancy {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .stuff {
      position: absolute;
      max-width: 1320px;
      width: calc(100% - 40px);
      height: 100%;
      top: 0;
      transform: scaleX(1);
      background: ${({ theme }) => theme.colors.primary.light};
      border-radius: 15px;
    }
  }
`

Styled.Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1em;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.primary.light};
  padding: 1em;
  overflow: hidden;

  @media only screen and (max-width: 800px) {
    & {
      align-items: center;
      flex-direction: column;
    }
    button {
      padding: 1em 0;
    }
  }
`

Styled.Filter = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 800px) {
    & {
      width: 100%;
    }
  }

  ::after {
    content: "";
    position: absolute;
    top: 10px;
    right: -0.5em;
    width: 2px;
    height: calc(100% - 20px);
    background: ${({ theme }) => theme.colors.primary.lightest};

    @media only screen and (max-width: 800px) {
      & {
        width: 100%;
        height: 2px;
        right: 0;
        top: unset;
        bottom: -0.5em;
      }
    }
  }
  &:last-child {
    ::after {
      display: none;
    }
  }
`

Styled.Title = styled.h1`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  margin-bottom: 0.5em;
`

Styled.Description = styled.p`
  font-size: 0.875em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray.dark};
  margin-bottom: 2em;
`

Styled.Input = styled.input`
  width: 100%;
  height: 2.8125em;
  font-size: 1em;
  padding: 1em;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.gray.light};
  color: ${({ theme }) => theme.colors.gray.dark};
  transition: 0.2s ease;
  :hover {
    box-shadow: -5px 5px 15px ${({ theme }) => theme.colors.primary.medium};
  }
  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.gray.medium};
  }
`

Styled.Button = styled.button`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(#f14747, #ff9595);
  border: none;
  border-radius: 15px;
  :hover {
    background: ${({ theme }) => theme.colors.primary.medium};
  }
`

const Reserve = ({ show }) => {
  let lastKnownScrollPosition = 0
  let ticking = false

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      if (window.scrollY > lastKnownScrollPosition) {
        if (
          lastKnownScrollPosition > 300 &&
          document.getElementById("reserve").style.maxHeight !== "4px"
        ) {
          document.getElementById("reserve").style.maxHeight = "4px"
        }
      } else if (
        document.getElementById("reserve").style.maxHeight !== "600px"
      ) {
        document.getElementById("reserve").style.maxHeight = "600px"
      }
      lastKnownScrollPosition = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(function () {
          document.getElementsByClassName("stuff")[0].style.transform =
            "scaleX(" + lastKnownScrollPosition / 50 + ")"

          ticking = false
        })
        ticking = true
      }
    })
  }, [])

  return (
    <div
      id="reserve"
      style={{
        opacity: show ? "1" : ".5",
        maxHeight: show ? "600px" : "0px",
        height: show ? "auto" : "0px",
        transition: ".7s ease"
      }}
    >
      <Reserve.Container>
        <Reserve.Filter>
          <Reserve.Title>Check-in</Reserve.Title>
          <Reserve.Input type="date" name="check-in" />
        </Reserve.Filter>

        <Reserve.Filter>
          <Reserve.Title>Check-in</Reserve.Title>
          <Reserve.Input type="date" name="check-out" />
        </Reserve.Filter>

        <Reserve.Filter>
          <Reserve.Title>Crianças</Reserve.Title>
          <Reserve.Input
            type="number"
            placeholder="0"
            min={0}
            max={10}
            name="criancas"
          />
        </Reserve.Filter>

        <Reserve.Filter>
          <Reserve.Title>Adultos</Reserve.Title>
          <Reserve.Input
            type="number"
            placeholder="0"
            min={0}
            max={10}
            name="adultos"
          />
        </Reserve.Filter>

        <Reserve.Filter>
          <Reserve.Button>Reservar</Reserve.Button>
        </Reserve.Filter>
      </Reserve.Container>
    </div>
  )
}

Reserve.Container = props => {
  return (
    <Styled.Reserve>
      <span className="fancy">
        <span className="stuff"></span>
      </span>
      <div className="container">
        <Styled.Container>{props.children}</Styled.Container>
      </div>
    </Styled.Reserve>
  )
}

Reserve.Filter = props => {
  return <Styled.Filter>{props.children}</Styled.Filter>
}

Reserve.Title = props => {
  return <Styled.Title>{props.children}</Styled.Title>
}

Reserve.Description = props => {
  return <Styled.Description>{props.children}</Styled.Description>
}

Reserve.Input = props => {
  return <Styled.Input {...props} />
}

Reserve.Button = props => {
  return <Styled.Button className="pressable">{props.children}</Styled.Button>
}

export default Reserve
