import React from "react"

import { Stack, Box, Spacer, Text, WrapItem } from "@chakra-ui/react"

const IconHighlight = ({ icon, text }) => {
  return (
    <WrapItem>
      <Stack
        boxSize="10rem"
        borderWidth="1px"
        borderRadius="10px"
        p="4"
        transition="transform 0.2s"
        transitionTimingFunction="ease"
        _hover={{
          transform: "scale(1.10)",
        }}
        shadow="md"
      >
        <Box boxSize="5rem" mx="auto" as={icon} />
        <Spacer />
        <Text align="center">{text}</Text>
      </Stack>
    </WrapItem>
  )
}

export default IconHighlight
