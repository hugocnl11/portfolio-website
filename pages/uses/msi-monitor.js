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
    <Layout title="MSI Optix G27C4">
    <Container>
        <Title>
        MSI Optix G27C4
        </Title>
        <P>
        Redactar Info
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://es.msi.com/Monitor/Optix-G27C4/Overview">
            https://msi.com/Monitor/Optix-G27C4 <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Aspect Ratio</Meta>
            <span>16:9</span>
        </ListItem>
        <ListItem>
            <Meta>Resolution</Meta>
            <span>2560 x 1440 (WQHD)</span>
        </ListItem>
        <ListItem>
            <Meta>Screen size</Meta>
            <span>27 inches</span>
        </ListItem>
        <ListItem>
            <Meta>Refresh rate</Meta>
            <span>165Hz</span>
        </ListItem>
        <ListItem>
            <Meta>Price</Meta>
            <span>270€</span>
        </ListItem>
        <ListItem>
            <Meta>Personal puntuation</Meta>
            <span>7,5/10</span>
        </ListItem>
        </List>
        <UseImage src="/images/uses/msi.png" alt="KIYO" />
    </Container>
    </Layout>
)

export default Use
