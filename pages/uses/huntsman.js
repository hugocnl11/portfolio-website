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
    <Layout title="Razer Huntsman V2">
    <Container>
        <Title>
        Razer Huntsman V2
        </Title>
        <P>
        My third mechanical keyboard and the best one to date, it features superior switches compared to many others I&aposve tried as they are optical. The RGB lighting is slightly inferior to that of the Blackwidow line, as the plate is made of black aluminum, and the backlighting isn&apost as noticeable as with the white plastic of the aforementioned model.
        </P>
        <P>
        On the other hand, the PBT keycaps have shown no apparent signs of wear after almost two years of daily use.
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.razer.com/gaming-keyboards/razer-huntsman-v2-tenkeyless">
            https://www.razer.com/huntsman <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Platform</Meta>
            <span>Windows, Linux, IOS</span>
        </ListItem>
        <ListItem>
            <Meta>Specifications</Meta>
            <span>Razer optical linear switches</span>
        </ListItem>
        
        <ListItem>
            <Meta>Price</Meta>
            <span>160€</span>
        </ListItem>
        <ListItem>
            <Meta>Personal puntuation</Meta>
            <span>9/10</span>
        </ListItem>
        </List>
        <UseImage src="/images/uses/huntsman-v2.jpg" alt="KIYO" />
    </Container>
    </Layout>
)

export default Use
