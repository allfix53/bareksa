import { Box, Center, Flex, Heading, Show, Text } from '@chakra-ui/react'

export default function ProfileCard() {
  return (
    <Flex gap={4}>
      {/* default for initial name */}
      <Flex w="40px" h="40px" rounded="full" bg="gray.300">
        <Center fontWeight="bold" m="auto">
          RH
        </Center>
      </Flex>

      <Show breakpoint="(min-width: 800px)">
        <Box>
          <Heading as="h2" fontSize="md">
            Reinhart H.
          </Heading>
          <Text as="p" fontSize="xs">
            Kemang, Jakarta
          </Text>
        </Box>
      </Show>

      <Flex>
        <Center m="auto">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Center>
      </Flex>
    </Flex>
  )
}
