import Button from "../../src/components/Button"
import Form from "../../src/components/Form"
import { useAuth } from "../../src/context/auth"
import { useState } from "react"
import Head from "next/head"

export default function Login() {
  const { login } = useAuth()
  const [errors, setErrors] = useState({ email: "", senha: "" })
  const [isLoading, setIsLoading] = useState(false)

  function handleLogin(e) {
    setIsLoading(true)
    e.preventDefault()
    // login({
    //   email: "xula@xalau.com.br",
    //   senha: "123456789"
    // })
    console.log({
      email: e.target.email.value,
      senha: e.target.senha.value
    })
    setErrors({ ...errors, senha: "Senha incorreta" })
    // setErrors({ ...errors, email: "Usuário não existe" })
  }
  return (
    <>
      <Head>
        <title>Meu perfil - Hotel RedLight</title>
      </Head>
      <main className="container without-reserve">
        <Form.Container>
          <Form.Group onSubmit={e => handleLogin(e)}>
            <Form.Title>Entre na sua conta</Form.Title>
            <Form.Description>
              Entre ou faça uma conta agora mesmo
            </Form.Description>
            <Form.Label>Email</Form.Label>
            <Form.Input
              type="text"
              name="email"
              placeholder="Digite seu email"
              error={errors.email}
            />
            <Form.Label>Senha</Form.Label>
            <Form.Input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              error={errors.senha}
            />
            <Form.GroupButtons>
              <Button
                type="submit"
                isLoading={isLoading}
                loadingText={"Entrando"}
              >
                Entrar
              </Button>
              <Button.Link href="/cadastrar">
                <Button variant="secondary">Criar conta</Button>
              </Button.Link>
            </Form.GroupButtons>
          </Form.Group>
          <img src="/svgs/login-screen.svg" width={"100%"} />
        </Form.Container>
      </main>
    </>
  )
}
