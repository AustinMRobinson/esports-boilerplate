import React from "react"
import Layout from '../components/layout'
import Container from "../components/container";

const IndexPage = () => {
    return (
        <Layout title="Home" description="The homepage of this website">
            <Container>
                <h1>Hello world!</h1>
            </Container>
        </Layout>
    )
}

export default IndexPage