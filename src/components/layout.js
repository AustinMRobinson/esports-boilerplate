import React from 'react'
import { Global, css } from "@emotion/core"
import SEO from "../components/seo"
import Header from './header'
import Footer from './footer'

const Layout = ( props ) => {
    return (
        <>
        <Global
            styles={css`
                body {
                    font-family: sans-serif;
                    margin: 0;
                    padding: 0;
                }
            `}
        />
        <SEO title={props.title} description={props.description} />
            <Header />
                <div>
                    {props.children}
                </div>
            <Footer />
        </>
    )
}

export default Layout