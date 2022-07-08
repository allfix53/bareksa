import { Box, Heading, Progress } from '@chakra-ui/react'

export default function RevenueCard({ isLoading, error, data }) {
  if (error) return <>Error fetching data.</>

  return (
    <Box p={2} border="1px" rounded={4} borderColor="gray.300" w="full">
      <Heading as="h2" fontSize="lg">
        Revenue
      </Heading>

      {isLoading && (
        <Progress size="lg" colorScheme="whatsapp" isIndeterminate />
      )}
    </Box>
  )
}
