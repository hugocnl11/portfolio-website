import {
    Container,
    Link,
    List,
    ListItem,
    SimpleGrid,
    Heading,
    
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, UseImage, Meta } from '../../components/use'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'

const Use = () => (
    <Layout title="Mercadona">
    <Container>
    <Paragraph>
    <Section delay={0.2}>
        
            <Title>
            Mercadona
            </Title>
            <Heading as="h3" variant="section-title">
            Lorem
            </Heading>
            <List ml={4} my={4}>
            
            
            </List>
    </Section>
    </Paragraph>
    <Section delay={0.5}>
            <UseImage src="/images/experience/mercadona.jpeg" alt="Plaza Verde" />
    </Section>


    <Section delay={0.8}>
        <UseImage src="/images/experience/hackaton.jpeg" alt="Plaza Verde" />
    </Section>
        
    </Container>
    </Layout>
)

export default Use
