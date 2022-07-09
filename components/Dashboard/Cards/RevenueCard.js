import { Box, Heading, Progress } from '@chakra-ui/react'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Line,
  Area,
} from 'recharts'

export default function RevenueCard({ isLoading, error, data }) {
  if (error) return <>Error fetching data.</>

  const showAreaChart = (data) => {
    const res = Array.from(
      data.reduce(
        (m, { due_date, conversion_revenue }) =>
          m.set(
            due_date,
            (m.get(due_date) || 0) + parseInt(conversion_revenue)
          ),
        new Map()
      ),
      ([due_date, conversion_revenue]) => ({
        due_date,
        conversion_revenue,
      })
    )

    return (
      <Box>
        <Box h={250} fontSize="xs">
          <ResponsiveContainer>
            <AreaChart
              data={res}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="id" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="25%" stopColor="#789764" stopOpacity={1} />
                  <stop offset="75%" stopColor="#789764" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="due_date" />
              <YAxis />
              <CartesianGrid strokeDasharray="2 2" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="conversion_revenue"
                stroke="#789764"
                fill="url(#id)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
        <Heading as="h2" fontSize="xs" fontWeight="semibold" color="#9C9C9C">
          Total Revenue
        </Heading>
        <Heading
          as="h2"
          fontSize="24px"
          fontWeight="bold"
          color="#33333"
          lineHeight="150%"
        >
          $123.34
        </Heading>
      </Box>
    )
  }

  return (
    <Box p={6} border="1px" rounded={4} borderColor="gray.300" w="full">
      <Heading as="h2" fontSize="lg">
        Revenue
      </Heading>

      {isLoading && (
        <Progress size="lg" colorScheme="whatsapp" isIndeterminate />
      )}

      {data && showAreaChart(data)}
    </Box>
  )
}
