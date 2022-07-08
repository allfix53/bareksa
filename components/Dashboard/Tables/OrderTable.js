import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  Progress,
  Tbody,
  Td,
  Tag,
} from '@chakra-ui/react'
import moment from 'moment'
import { useState } from 'react'
import { DateRange } from 'react-date-range'

export default function OrderTable({ isLoading, error, data }) {
  const [state, setState] = useState([
    {
      startDate: new Date('2020-02-14'),
      endDate: new Date('2020-02-22'),
      key: 'selection',
    },
  ])

  // status builder
  const status = (status) => {
    if (status == 'completed') {
      return (
        <Tag
          p={1}
          size="sm"
          display="block"
          textAlign="center"
          variant="solid"
          bg="#789764"
        >
          {status}
        </Tag>
      )
    }

    if (status == 'pending') {
      return (
        <Tag
          p={1}
          size="sm"
          display="block"
          textAlign="center"
          variant="solid"
          bg="#E59849"
        >
          {status}
        </Tag>
      )
    }

    if (status == 'canceled') {
      return (
        <Tag
          p={1}
          size="sm"
          display="block"
          textAlign="center"
          variant="solid"
          bg="#D66D4B"
        >
          {status}
        </Tag>
      )
    }
  }

  // show table body
  const showBodyTable = (data) => {
    const trs = []

    data.map((item, key) => {
      trs.push(
        <tr key={key}>
          <td w={14}>{`#${item.order_id.slice(-4)}`}</td>
          <td>{status(item.status)}</td>
          <td>{item.full_name}</td>
          <td>{item.location}</td>
          <td>{moment(item.start_date).format('DD/MM/YY HH:mm')}</td>
          <td>{moment(item.due_date).format('DD/MM/YY HH:mm')}</td>

        </tr>
      )
    })
    return <tbody>{trs}</tbody>
  }

  return (
    <Flex gap={2} mt={4}>
      <Box p={2} border="1px" rounded={4} borderColor="gray.300" w={352}>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          minDate={new Date('2020-01-01')}
          maxDate={new Date('2020-02-28')}
        />
      </Box>
      <Box p={2} w="full">
        <Heading as="h2" fontSize="lg">
          Orders
        </Heading>

        {isLoading && (
          <Progress size="lg" colorScheme="whatsapp" isIndeterminate />
        )}

        {data && (
          <table>
            <thead>
              <tr>
                <th>Order Number</th>
                <th>Status</th>
                <th>Operator</th>
                <th>Location</th>
                <th>Start Date</th>
                <th>Due Date</th>
              </tr>
            </thead>
            {showBodyTable(data)}
          </table>
        )}
      </Box>
    </Flex>
  )
}
