import React from "react"

import { Box, Spacer, Text, WrapItem } from "@chakra-ui/react"

const IconHighlight = ({ icon, text }) => {
  return (
    <WrapItem
      flex="0 0 10rem"
      h="10rem"
      borderWidth="1px"
      borderRadius="10px"
      p="4"
      transition="transform 0.2s"
      transitionTimingFunction="ease"
      _hover={{
        transform: "scale(1.10)",
      }}
      shadow="md"
      flexDir="column"
      alignItems="center"
    >
      <Box flex="0 0 5rem" boxSize="5rem" mx="auto" as={icon} />
      <Spacer />
      <Text align="center">{text}</Text>
    </WrapItem>
  )
}

export default IconHighlight
