import { Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'

export default function Search() {
  return (
    <Stack>
      <InputGroup>
        <Input placeholder="Search text" fontSize="sm" rounded="sm" />
        <InputRightElement>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21L15.8 15.8"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </InputRightElement>
      </InputGroup>
    </Stack>
  )
}
