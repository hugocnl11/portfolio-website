import {
    Container,
    Link,
    List,
    ListItem,
    Badge
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, UseImage, Meta } from '../../components/use'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
const Use = () => (
    <Layout title="Razer BlackShark V2">
    <Container>
        <Title>
        Razer BlackShark V2 Pro
        </Title>
        <P>
        These headphones feature high-quality construction materials and perform phenomenally well. In terms of sound, while they may not be studio-grade headphones, they sound good for gaming and listening to music if you&aposre not too demanding. They&aposre not exactly cheap, but personally, the aesthetics are a winner for me.
                </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.razer.com/gaming-headsets/razer-blackshark-v2-pro">
            https://www.razer.com/blackshark <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Platform</Meta>
            <span>Windows, Linux, IOS</span>
        </ListItem>
        <ListItem>
            <Meta>Tech Specs</Meta>
            <span><list>
                <ListItem><Badge>· FREQUENCY RESPONSE</Badge> 12 Hz – 28 kHz</ListItem>
                <ListItem><Badge>· IMPEDANCE</Badge> 32 Ω</ListItem>
                <ListItem><Badge>· SENSITIVITY</Badge> 100 dBSPL / mW @ 1 kHz by HATS</ListItem>
                <ListItem><Badge>· DRIVER SPECIFICATIONS</Badge> 50 mm</ListItem>
                
            </list>
</span>
        </ListItem>
        
        <ListItem>
            <Meta>Price</Meta>
            <span>180€</span>
        </ListItem>
        <ListItem>
            <Meta>Personal puntuation</Meta>
            <span>8.5/10</span>
        </ListItem>
        </List>
        <UseImage src="/images/uses/blackshark_v2_pro.jpg" alt="KIYO" />
    </Container>
    </Layout>
)

export default Use
