import { createGlobalStyle, ThemeProvider } from "styled-components"
import Head from "next/head"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import { AuthProvider } from "../src/context/auth"

const theme = {
  colors: {
    black: "#000",
    gray: {
      light: "#F5F5F5",
      medium: "#535353",
      dark: "#313131"
    },
    white: "#fff",
    primary: {
      dark: "#9C3232",
      medium: "#BF3939",
      light: "#F14747",
      lightest: "#ED5353"
    }
  }
}

const GlobalStyle = createGlobalStyle`
  html{
    font-size:16px;
    scroll-behavior: smooth;

  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:Ubuntu;
    font-size:100%;
    padding:0;
    margin:0;
    /* padding-top:12.5em; */
    padding-top:9.5em;
    
    @media only screen and (max-width: 1000px) {
    & {
      font-size:90%;
      }
    }
    @media only screen and (max-width: 800px) {
    & {
      font-size:80%;
      /* padding-top:36.5em; */
      padding-top:28.5em;
      }
    }
  }
  #__next{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  *{
    box-sizing:border-box;
  }
  a{
    text-decoration:none;
    color:${theme.colors.primary.light};
  }
  .container{
    width:100%;
    max-width:1360px;
    margin:0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }
  .container.with{
    /* Funciona!! */
    /* opacity:.5; */
  }
  .pressable{
    transition:.2s ease;
    cursor: pointer;
    :active{
      opacity:.5;
    }
  }
  .border-radius{
    border-radius:4px;
  }
  .without-reserve{
    margin-top:-5.125em;
    @media only screen and (max-width: 800px) {
    & {
      margin-top:-28.125em;
      }
    }
  }
`

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, 
        user-scalable=0"
          />
          <title>Hotel RedLight - Seu melhor hotel</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  )
}
