import {
    Container,
    Link,
    List,
    ListItem,
    SimpleGrid,
    
    
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ExperienceImage, Meta } from '../../components/experience'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
//import Paragraph from '../../components/paragraph'
import Section from '../../components/section'

const Use = () => (
    <Layout title="Erasmus+ ">
    <Container>
    

    <Section delay={0.2}>
        <Title>20Evènti</Title>
        <P>
            I worked as a graphic designer, using Photoshop and Canva for designing purposes. Additionally, I served as an editor and video manager, utilizing Adobe Premiere.
        </P>
        
    
    <List ml={4} my={4}>
        <ListItem>
            <Meta>Position</Meta>
            <span>Designer (Intern)</span>
        </ListItem>
        <ListItem>
            <Meta>Web</Meta>
            <Link href="https://venti.events">
            https://venti.events <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Location</Meta>
            <span>Perugia, Italy</span>
        </ListItem>
        <ListItem>
            <Meta>Time working</Meta>
            <span>2 Months</span>
        </ListItem>
                
    </List>
    </Section>

    <Section delay={0.4}>
    <SimpleGrid columns={1} gap={2} my={4}>
            <ExperienceImage src="/images/experience/events.png" alt="20Ev" />
    </SimpleGrid>
    </Section>
    </Container>
    </Layout>
)

export default Use
