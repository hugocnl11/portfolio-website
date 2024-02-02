import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import HexagonsWithBorderIcon from './icons/hexagonsWithBorder'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    > svg {
        transition: 200ms ease;}
    
    &:hover > svg {
        transform: rotate(60deg);}
`
const Logo = () => {

    return(
        (<Link href="/" scroll={false} suppressHydrationWarning>

            <LogoBox>
                <HexagonsWithBorderIcon />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c, sans-serif'
                    fontWeight="bold"
                    ml={3}
                >
                Hugo Gómez López
                </Text>
            </LogoBox>

        </Link>)
    );
}
export default Logo