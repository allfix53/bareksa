import { Box, Heading, Flex, Spinner } from '@chakra-ui/react'
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts'

export default function UserCard({ isLoading, error, data }) {
  if (error) return <>Error fetching data.</>

  const showPieChart = (data) => {
    const res = []
    for (const prop in data) {
      res.push({ name: prop, value: parseInt(data[prop]) })
    }

    const colors = ['#725E9C', '#5C8F94', '#EBA45E', '#E4EAEB']

    return (
      <Box h={300}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={res} dataKey="value" nameKey="name">
              {res.map((entry, index) => (
                <Cell scale={50} key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    )
  }

  return (
    <Box p={2} border="1px" rounded={4} borderColor="gray.300" w="full">
      <Heading as="h2" fontSize="lg">
        Users
      </Heading>
      {isLoading && (
        <Flex>
          <Spinner
            thickness="6px"
            speed="1s"
            emptyColor="green.100"
            color="green.500"
            size="xl"
            m="auto"
          />
        </Flex>
      )}

      {data && showPieChart(data)}
    </Box>
  )
}
