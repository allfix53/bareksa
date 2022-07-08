import { Box, Flex, Heading, Spinner } from '@chakra-ui/react'
import { Pie, PieChart, ResponsiveContainer } from 'recharts'

export default function ConversionCard({ isLoading, error, data }) {
  if (error) return <>Error fetching data.</>

  const showPieChart = (data) => {
    const res = Array.from(
      data.reduce(
        (m, { conversion_item, conversion_revenue }) =>
          m.set(
            conversion_item,
            (m.get(conversion_item) || 0) + parseInt(conversion_revenue)
          ),
        new Map()
      ),
      ([conversion_item, conversion_revenue]) => ({
        conversion_item,
        conversion_revenue,
      })
    )

    return (
      <Box h={300}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={res}
              dataKey="conversion_revenue"
              nameKey="conversion_item"
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    )
  }

  return (
    <Box p={2} border="1px" rounded={4} borderColor="gray.300" w="full">
      <Heading as="h2" fontSize="lg">
        Conversion
      </Heading>
      {isLoading && (
        <Flex>
          <Spinner
            thickness="6px"
            speed="1.5s"
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
