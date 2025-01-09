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
    <Layout title="PC">
    <Container>
        <Title>
        PC Build
        </Title>
        <P>
        Redactar Info
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://secretlab.eu/es/products/titan-evo-2022-series?srsltid=AfmBOop-oxmG1xNOFbZoHxomGuhlgbeSm-fJqIchXqC1Ltq7MFi6meod&sku=M07-E24PU-BLACK1R#specifications">
            https://secretlab.eu/titan-evo <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Foam Type</Meta>
            <span>Secretlab Cold Cure Foam</span>
        </ListItem>
        <ListItem>
            <Meta>Frame construction</Meta>
            <span>Steel</span>
        </ListItem>
        <ListItem>
            <Meta>Price</Meta>
            <span>549€</span>
        </ListItem>
        <ListItem>
            <Meta>Personal puntuation</Meta>
            <span>9/10</span>
        </ListItem>
        </List>
        <UseImage src="/images/uses/titan-evo1.jpg" alt="KIYO" />
    </Container>
    </Layout>
)

export default Use
