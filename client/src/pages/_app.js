import "../../styles/globals.css"
import Head from "next/head"
import Router from "next/router"
import NProgress from "nprogress"

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`)
  NProgress.configure({ showSpinner: false })
  NProgress.start()
})
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background: #41434a;
          font-family: "Poppins";
        }
      `}</style>
    </>
  )
}
export default MyApp
