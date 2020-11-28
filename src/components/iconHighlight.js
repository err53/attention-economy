import React from "react"

import { Stack, Box, Spacer, Text } from "@chakra-ui/react"

const IconHighlight = ({ icon, text }) => {
  return (
    <Stack
      boxSize="10rem"
      borderWidth="2px"
      borderRadius="10px"
      p="4"
      m="2"
      transition="transform 0.2s"
      transitionTimingFunction="ease"
      _hover={{
        transform: "scale(1.10)",
      }}
    >
      <Box boxSize="5rem" mx="auto" as={icon} />
      <Spacer />
      <Text align="center">{text}</Text>
    </Stack>
  )
}

export default IconHighlight
