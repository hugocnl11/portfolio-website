import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Container,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title } from '../../components/post'

const Posts = () => (
    <Layout title="Charge Pot">
    <Container>
        <Title>
        Hexagonal Architecture
        </Title>
        <P>
        Alistair Cockburn introduced the hexagonal software architecture in a blog article in 2005. Cockburn states the following goals:
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website Credits</Meta>
            <Link href="https://www.happycoders.eu/software-craftsmanship/hexagonal-architecture/">
            https://www.happycoders.eu <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        
        
        </List>
    </Container>
    </Layout>
    
)

export default Posts
