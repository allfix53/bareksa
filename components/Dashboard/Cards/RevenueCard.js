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
      <Box h={300} fontSize="xs">
        <ResponsiveContainer>
          <AreaChart
            data={res}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#789764" stopOpacity={1} />
                <stop offset="95%" stopColor="#789764" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="due_date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
            <ReferenceLine
              y={4000}
              label="Max"
              stroke="red"
              strokeDasharray="3 3"
            />
            <Area
              type="linear"
              dataKey="conversion_revenue"
              stroke="#789764"
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    )
  }

  return (
    <Box p={2} border="1px" rounded={4} borderColor="gray.300" w="full">
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
