import styled, { css } from "styled-components"
import Image from "next/image"
import Form from "../src/components/Form"
import Button from "../src/components/Button"
import { useState } from "react"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Styled = () => {}

Styled.Banner = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 15px;
  img {
    object-fit: cover;
  }
`

Styled.Section = styled.section`
  ${props => console.log(props)}
  ${({ detail }) =>
    detail &&
    css`
      background-image: url("/img/overlay-feedbacks.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 0 100px;
    `}
  background-color: ${({ theme, bg }) =>
    getProp(theme.colors, bg) || theme.colors.white};
  width: 100%;
  padding: 2em 0;
  margin: 2em 0;
  h1 {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
  .red {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`

Styled.Feedbacks = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  gap: 4em;
  padding: 25px;

  .person {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    img {
      border-radius: 100%;
    }
    h2 {
      color: ${({ theme }) => theme.colors.gray.dark};
      text-align: center;
      margin: 0;
    }
  }
  .nameAndStars {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .stars {
    display: flex;
    gap: 0.5em;
    width: 100%;
  }
  .room {
    img {
      border-radius: 15px;
    }
  }
  .feedback {
    color: ${({ theme }) => theme.colors.gray.medium};
  }
  > span {
    display: flex;
    gap: 1em;
    flex-direction: column;
    flex: 0 0 calc((100% / 3) - (4em / 1.5));
    height: 500px;
    padding: 1em;
    background: white;
    border-radius: 15px;
    box-shadow: -10px 10px 10px rgba(0, 0, 0, 0);
    transition: 0.2s ease;

    :hover {
      transform: translateY(-20px);
      box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.2);
    }

    @media only screen and (max-width: 1100px) {
      & {
        flex: 0 0 calc((100% / 2) - (4em / 2));
      }
    }

    @media only screen and (max-width: 800px) {
      & {
        flex: 0 0 calc((100% / 1));
      }
    }
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary.medium};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gray.light};
  }
`

Styled.Stars = styled(FontAwesomeIcon)`
  display: flex;
  gap: 0.5em;
`

Styled.Star = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.primary.light};
`

function getProp(obj, stringProp) {
  console.log(stringProp)
  //return something.else
  if (stringProp.indexOf(".") <= 0) {
    console.log(stringProp, "is a string!")
    return obj[stringProp]
  }

  const arr = stringProp.split(".")
  if (arr.length === 1) {
    console.log(obj[arr[0]])
    return obj[arr[0]]
  }

  if (arr.length === 2) {
    console.log(obj[arr[0]][arr[1]])
    return obj[arr[0]][arr[1]]
  }

  if (arr.length === 2) {
    console.log(obj[arr[0]][arr[1]][arr[2]])
    return obj[arr[0]][arr[1]][arr[2]]
  }
}

export default function Home() {
  const [errors, setErrors] = useState({ nome: "", email: "", msg: "" })
  const [isLoading, setIsLoading] = useState(false)

  const reviews = [
    {
      name: "Jorge",
      avatar: "https://avatars.githubusercontent.com/u/74606139?v=4",
      room: "/img/photo-3.jpg",
      stars: ["*", "*", "*", "*", "*"],
      review: "Muito bom"
    },
    {
      name: "Andrei",
      avatar: "https://avatars.githubusercontent.com/u/55711772?v=4",
      room: "/img/photo-5.jpg",
      stars: ["*", "*"],
      review: "Não gostei"
    },
    {
      name: "Matheus",
      avatar: "https://avatars.githubusercontent.com/u/69362122?v=4",
      room: "/img/photo-6.jpg",
      stars: ["*", "*", "*"],
      review: "Mais ou menos"
    },
    {
      name: "Cássio",
      avatar: "https://randomuser.me/api/portraits/lego/6.jpg",
      room: "/img/photo-8.jpg",
      stars: ["*", "*", "*", "*", "*"],
      review: "Vale muito apena"
    },
    {
      name: "João",
      avatar: "https://randomuser.me/api/portraits/lego/0.jpg",
      room: "/img/photo-9.jpg",
      stars: ["*"],
      review: "Nunca mais volto"
    }
  ]

  return (
    <>
      <main>
        <section className="container">
          <Styled.Banner>
            <img src="/img/home-banner.jpg" height="100%" width="auto" />
          </Styled.Banner>
        </section>
        <Styled.Section bg="primary.light" detail={true}>
          <div className="container">
            <h1>Avaliações dos hospedes</h1>

            <Styled.Feedbacks>
              {reviews.map(person => {
                return (
                  <span>
                    <div className="person">
                      <Image
                        src={person.avatar}
                        width="80px"
                        height="80px"
                        objectFit="cover"
                      />
                      <div className="nameAndStars">
                        <h2>{person.name}</h2>
                        <div className="stars">
                          {person.stars.map(() => (
                            <Styled.Star icon={faStar} width={15} height={15} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="room">
                      <img src={person.room} width="100%" height="100%" />
                    </div>
                    <div className="feedback">{person.review}</div>
                  </span>
                )
              })}
            </Styled.Feedbacks>
          </div>
        </Styled.Section>

        <Styled.Section id="contato" bg="white">
          <div className="container">
            <h1 className="red">Mande uma mensagem para nós</h1>

            <Form.Container>
              <Form.Group onSubmit={e => console.log(e)}>
                <Form.Title>Entre na sua conta</Form.Title>
                <Form.Label>Nome</Form.Label>
                <Form.Input
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                  error={errors.nome}
                />
                <Form.Label>Email</Form.Label>
                <Form.Input
                  type="text"
                  name="email"
                  placeholder="Digite seu email"
                  error={errors.email}
                />
                <Form.Label>Mensagem</Form.Label>
                <Form.TextArea
                  type="text"
                  name="msg"
                  placeholder="Digite sua mensagem"
                  rows="4"
                  error={errors.msg}
                />

                <Form.GroupButtons>
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    loadingText={"Entrando"}
                  >
                    Enviar
                  </Button>
                  <div style={{ width: "100%" }}></div>
                </Form.GroupButtons>
              </Form.Group>
              <img src="/svgs/contact-form.svg" width={"100%"} />
            </Form.Container>
          </div>
        </Styled.Section>
      </main>
    </>
  )
}
