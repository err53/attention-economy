import PropTypes from "prop-types"
import React from "react"
import { Flex, Heading, Spacer } from "@chakra-ui/react"

const Header = ({ siteTitle }) => (
  <Flex as="header" w="100%" bgColor="blue.800">
    <Flex m="0 auto" w="100%" maxW="960px" px={{ base: "2", sm: "4", md:"6" }} py="4">
      <Heading size="xl" as="h1" m="0" color="white">
        {siteTitle}
      </Heading>
      <Spacer />
    </Flex>
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
