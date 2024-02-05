import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Badge,
    Container,
    Link,
    List,
    ListItem,
    SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Red, Yellow, Blue,  Title, TitleSimple, WorkImage, WorkImageRedux } from '../../components/work'
const Work = () => (
    <Layout title="RESTful API">
        <Container>
            <Title>
                RESTful API <Badge>2023</Badge>
            </Title>
            <P>
            This project will focus on developing a RESTful API using PostgreSQL as the database.
            </P>
        <List ml={4} my={4}>
            <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/hugocnl11/RESTful-API">
            https://github.com/hugocnl11/RESTful-API <ExternalLinkIcon mx="2px" />
            </Link>
            </ListItem>
            <ListItem>
                <Meta>Platform</Meta>
                <span>Windows, Linux, IOS</span>
            </ListItem>
            <ListItem>
                <Meta>Stack</Meta>
                <span>Java, PostgreSQL, XML, Lombok, Docker</span>
            </ListItem>
        </List>
        <SimpleGrid columns={1} gap={2} my={4}>
        <List ml={4} my={4}>
            <Badge>Project scaffolding:</Badge>
        </List>
        <WorkImageRedux src="/images/myWorks/backEnd/apiRest-scaffolding.png" alt="RESTful API"/>

            
        <List ml={4} my={4}>
            <Badge>Model of product:</Badge>
        </List>
        <WorkImage src="/images/myWorks/backEnd/model.png" alt="model"/>
        </SimpleGrid>
        
        
            
        
            <TitleSimple>Using the endpoints: <Badge>Postman</Badge></TitleSimple>
            
            <List ml={4} my={4}>
                <Meta >GET</Meta>
            </List>
                <WorkImage src="/images/myWorks/backEnd/get.png" alt="GET"/>
            <List ml={4} my={4}>
                <Yellow>POST</Yellow>
            </List>
                <WorkImage src="/images/myWorks/backEnd/post.png" alt="POST" />
            <List ml={4} my={4}>
                <Blue>PUT</Blue>
            </List>

                <WorkImage src="/images/myWorks/backEnd/put.png" alt="PUT" />
                
            <List ml={4} my={4}>
                <Red>DELETE</Red>
            </List>
                <WorkImage src="/images/myWorks/backEnd/delete.png" alt="DELETE" />
                
            
        
            
        </Container>
    </Layout>
)

export default Work
