import { ChevronRightIcon } from '@chakra-ui/icons'
import { Badge, Box, Heading, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Title = ({ children }) => (
    <Box>
    <Link as={NextLink} href="/uses">
        Uses
    </Link>
    <span>
        {' '}
        <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
    </Heading>
    </Box>
)

export const UseImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
    {children}
    </Badge>
)
export const Blue = ({ children }) => (
    <Badge colorScheme="blue" mr={2}>
        {children}
    </Badge>
)

export const Red = ({ children }) => (
    <Badge colorScheme="red" mr={2}>
    {children}
    </Badge>
)

export const Yellow = ({ children }) => (
    <Badge colorScheme="yellow" mr={2}>
    {children}
    </Badge>
)