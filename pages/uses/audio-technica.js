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
    <Layout title="Audio Technica AT2020">
    <Container>
        <Title>
        Audio Technica AT2020
        </Title>
        <P>
        
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.amazon.es/Audio-Technica-AT2020-Micr%C3%B3fono-de-condensador/dp/B0006H92QK?th=1">
            https://www.amazon.es/Audio-Technica-AT2020 <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Price</Meta>
            <span>80€</span>
        </ListItem>
        <ListItem>
            <Meta>Personal puntuation</Meta>
            <span>8/10</span>
        </ListItem>
        </List>
        <UseImage src="/images/uses/at2020.png" alt="KIYO" />
    </Container>
    </Layout>
)

export default Use
