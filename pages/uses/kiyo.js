import {
    Container,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, UseImage, Meta } from '../../components/use'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
const Use = () => (
    <Layout title="Razer Kiyo">
    <Container>
        <Title>
        Razer Kiyo
        </Title>
        <P>
        I personally can&apost be very impartial with this product since I won it in a mini-game during the DreamHack Summer 2023, but it&aposs actually a webcam with good quality.
The thing I would improve about the product would be to have a longer cable since in my case, I have the PC far away from the monitors.
                </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.razer.com/pc/content-creation/kiyo-family">
            https://www.razer.com/kiyo <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Platform</Meta>
            <span>Windows, Linux, IOS</span>
        </ListItem>
        <ListItem>
            <Meta>Specifications</Meta>
            <span>Full HD 1080p, 60 FPS, HDR</span>
        </ListItem>
        
        <ListItem>
            <Meta>Price</Meta>
            <span>110€</span>
        </ListItem>
        <ListItem>
            <Meta>Personal puntuation</Meta>
            <span>8/10</span>
        </ListItem>
        </List>
        <UseImage src="/images/uses/kiyo-pro.jpg" alt="KIYO" />
    </Container>
    </Layout>
)

export default Use
