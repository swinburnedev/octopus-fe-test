import Head from "next/head"

import Header from "../Header"
import Footer from "../Footer"
import styles from "./layout.module.scss"

type LayoutProps = {
    children: React.ReactNode
    description: string
    title: string
}

const Layout = ({children, description, title}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div id="main" className={styles.container}>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
