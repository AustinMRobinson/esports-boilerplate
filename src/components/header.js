import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from "gatsby"
import Container from './container'

const StyledHeader = styled.header`
    padding: 1rem;
    margin-bottom: 2rem;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SiteLogo = styled(Link)`
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
    text-decoration: none;
`

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <SiteLogo>{data.site.siteMetadata.title}</SiteLogo>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/store">Store</Link>
                    </div>
                </Nav>
            </Container>
        </StyledHeader>
    )
}

export default Header
