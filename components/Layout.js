import Navbar from './Navbar'
import Footer from './Footer'

import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
        <Head>
            <link rel="shortcut icon" href="/Images/favicon.ico" />
            <title>PokeNext</title>
        </Head>
        <Navbar />
            <main className='main-container'>
                {children}
            </main>
        <Footer />
    </>
  )
}

export default Layout