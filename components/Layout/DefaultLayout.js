import { Box, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import TopNavBar from '../TopNavBar'

export default function DefaultLayout({ children }) {
  const [date, setDate] = useState()
  useEffect(() => {
    setDate(new Date(Date.now()).toLocaleString())
  }, [])
  return (
    <Box bg="white" w="full">
      <TopNavBar />
      <Box
        bg="gray.100"
        p={2}
        textAlign="right"
        fontSize="sm"
        fontWeight="semibold"
      >
        {date}
      </Box>
      <Box px={2} py={4} bg="white">
        {children}
      </Box>
    </Box>
  )
}
