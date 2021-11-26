import Button from "../../src/components/Button"
import Form from "../../src/components/Form"
import { useAuth } from "../../src/context/auth"
import Head from "next/head"

export default function Login() {
  const { register } = useAuth()

  function handleLogin(e) {
    console.log(e.target)
    e.preventDefault()
    // register({
    //   nome: "Teteu Vigarista Hashado",
    //   email: "xula@xalau2.com.br",
    //   senha: "123456789",
    //   telefone: "123456789",
    //   cpf: "12345679810"
    // })
    console.log({
      nome: e.target.nome.value,
      email: e.target.email.value,
      senha: e.target.senha.value,
      cpf: e.target.cpf.value,
      telefone: e.target.telefone.value
    })
  }
  return (
    <>
      <Head>
        <title>Cadastrar - Hotel RedLight</title>
      </Head>
      <main className="container without-reserve">
        <Form.Container>
          <Form.Group onSubmit={e => handleLogin(e)}>
            <Form.Title>Crie sua conta</Form.Title>
            <Form.Description>Preencha seus dados pesosais</Form.Description>
            <Form.Label>Nome</Form.Label>
            <Form.Input type="text" name="nome" placeholder="Andreizinho XHZ" />
            <Form.Label>Email</Form.Label>
            <Form.Input
              type="text"
              name="email"
              placeholder="Digite seu email"
            />
            <Form.Label>Senha</Form.Label>
            <Form.Input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
            />
            <Form.Label>CPF</Form.Label>
            <Form.Input type="text" name="cpf" placeholder="69" />
            <Form.Label>Telefone</Form.Label>
            <Form.Input type="text" name="telefone" placeholder="0800" />
            <Form.GroupButtons>
              <Button type="submit">Cadastrar</Button>
              <Button.Link href="/entrar">
                <Button variant="secondary">Entrar</Button>
              </Button.Link>
            </Form.GroupButtons>
          </Form.Group>
          <img src="/svgs/register-screen.svg" width={"100%"} />
        </Form.Container>
      </main>
    </>
  )
}
