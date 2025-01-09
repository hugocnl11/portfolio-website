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
    <Layout title="Razer Gigantus 3XL">
    <Container>
        <Title>
        Razer Gigantus 3XL
        </Title>
        <P>
        Redactar Info
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.razer.com/es-es/gaming-mouse-mats/razer-gigantus-v2?srsltid=AfmBOoryfutDWwu_IlAEzh2J8eSEXqQQn3tMDzynoyvLd_4GqiNOvqUY">
            https://razer/gigantus3XL.com <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Price</Meta>
            <span>50€</span>
        </ListItem>
        <ListItem>
            <Meta>Personal puntuation</Meta>
            <span>7/10</span>
        </ListItem>
        </List>
        <UseImage src="/images/uses/gigantus.png" alt="KIYO" />
    </Container>
    </Layout>
)

export default Use
