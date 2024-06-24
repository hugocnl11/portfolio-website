import {
    Container,
    Link,
    List,
    ListItem,
   
    
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ExperienceImage, Meta } from '../../components/experience'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Use = () => (
    <Layout title="Navima ">
    <Container>
    

    <Section delay={0.2}>
        <Title>Navima</Title>
        <P>
            I develop solutions for cost savings, process automation, and reporting in Django and Odoo.
        </P>
    
    <List ml={4} my={4}>
        <ListItem>
            <Meta>Position</Meta>
            <span>Technical Manager of the IT Department</span>
        </ListItem>
        <ListItem>
        <Meta>Web</Meta>
            <Link href="https://www.lolacruz.com">
                https://www.lolacruz.com <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Web</Meta>
            <Link href="https://bibilou.es">
                https://bibilou.es <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Web</Meta>
            <Link href="https://gaminuniverse.com">
                https://gaminuniverse.com <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Location</Meta>
            <span>Technology Hub, Paterna, Valencia</span>
        </ListItem>
        <ListItem>
            <Meta>Time working</Meta>
            <span>April 2024 - Present</span>
        </ListItem>
                
    </List>
    </Section>

    <Section delay={0.5}>
            <ExperienceImage src="/images/experience/Navima-Oficinas.png" alt="Plaza Verde" />
    </Section>
    </Container>
    </Layout>
)

export default Use
