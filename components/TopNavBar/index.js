import { Flex, Spacer } from '@chakra-ui/react'
import Logo from './Logo'
import ProfileCard from './ProfileCard'
import Search from './Search'
import Notification from './Notification'
import Setting from './Setting'

export default function TopNavBar() {
  return (
    <Flex bg="white" w="full" gap={{ sm: 2, md: 2, lg: 4 }} p={4}>
      <Logo />
      <ProfileCard />
      <Spacer />
      <Search />
      <Notification />
      <Setting />
    </Flex>
  )
}
