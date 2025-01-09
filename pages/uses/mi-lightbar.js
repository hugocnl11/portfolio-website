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
    <Layout title="Mi Monitor Light Bar">
    <Container>
        <Title>
        Mi Monitor Light Bar
        </Title>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.mi.com/es/product/mi-computer-monitor-light-bar/?srsltid=AfmBOopaG4miM_b7igptYy-q_G6JTj39BX89easC8gcMV4D5pKIiLY1N">
            https://www.mi.com/es/product/monitor-light-bar <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Price</Meta>
            <span>39,99€</span>
        </ListItem>
        <ListItem>
            <Meta>Personal puntuation</Meta>
            <span>9.5/10</span>
        </ListItem>
        </List>
        <UseImage src="/images/uses/mi-light.jpg" alt="KIYO" />
    </Container>
    </Layout>
)

export default Use
