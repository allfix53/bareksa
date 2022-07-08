import { Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import ConversionCard from '../components/Dashboard/Cards/ConversionCard'
import RevenueCard from '../components/Dashboard/Cards/RevenueCard'
import UserCard from '../components/Dashboard/Cards/UserCard'
import DefaultLayout from '../components/Layout/DefaultLayout'
import { getSummaryDashboardData } from '../services/SummaryDashboard'

export default function Home() {
  const { isLoading, error, data } = useQuery(
    'summary',
    () => getSummaryDashboardData().then((res) => res),
    { refetchInterval: 3000 }
  )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <DefaultLayout>
      <SimpleGrid gap={2} columns={[2, 1, 2, 2]}>
        <GridItem>
          <SimpleGrid columnGap={2} columns={2}>
            <ConversionCard
              isLoading={isLoading}
              error={error}
              data={data?.data.orders}
            />
            <UserCard
              isLoading={isLoading}
              error={error}
              data={data?.data.user_category}
            />
          </SimpleGrid>
        </GridItem>
        <GridItem>
          <RevenueCard isLoading={isLoading} error={error} data={data} />
        </GridItem>
      </SimpleGrid>
    </DefaultLayout>
  )
}
