import { Box, Flex, Heading, Spinner, Tooltip } from '@chakra-ui/react'
import { Pie, PieChart, ResponsiveContainer, Cell, Legend } from 'recharts'

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

    const colors = ['#725E9C', '#5C8F94', '#EBA45E', '#E4EAEB']

    return (
      <Box h={300} fontSize="xs">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={res}
              dataKey="conversion_revenue"
              nameKey="conversion_item"
              fillRule="evenodd"
              // fill={colors[Math.floor(Math.random() * (5 - 1 + 1) + 1)]}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            {/* <Tooltip /> */}
            <Legend iconType="circle" />
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
