/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Spacer, Stack, Link } from "@chakra-ui/react"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Flex direction="column">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Stack
        mx="auto"
        p={{ base: "2", sm: "4", md: "6" }}
        w="100%"
        maxW="960px"
      >
        {children}
      </Stack>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
