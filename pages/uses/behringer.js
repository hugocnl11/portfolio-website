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
    <Layout title="Behringer UM2 U-PHORIA">
    <Container>
        <Title>
        Behringer UM2 U-PHORIA
        </Title>
        
        <P>
        
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.amazon.es/Behringer-UM2-Interface-audio-sampleado/dp/B00EK1OTZC">
            https://www.amazon.es/Behringer-UM2 <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Price</Meta>
            <span>50€</span>
        </ListItem>
        <ListItem>
            <Meta>Personal puntuation</Meta>
            <span>8/10</span>
        </ListItem>
        </List>
        <UseImage src="/images/uses/behringer.jpg" alt="KIYO" />
    </Container>
    </Layout>
)

export default Use
