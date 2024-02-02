import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import thumbBluePlanet from '../public/images/experience/bluplanet.jpg'
import thumbVenti from '../public/images/experience/20eventi.jpg'
import thumbSolar from '../public/images/experience/solarCash.jpg'
import thumbMercadona from '../public/images/experience/mercadona.png'

const Experience = () => (
<Layout title = "Expericence">


    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Jobs
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
                <WorkGridItem id="mercadona" title="Mercadona" thumbnail={thumbMercadona}>
                Development and maintenance of analytical
                accounting applications and cost allocation.

                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="bluPlanet" title="BluPlanet" thumbnail={thumbBluePlanet}>
                Internship for the middle-grade level in Hospitalet
                (Barcelona). Computer technician.

                </WorkGridItem>
            </Section>
            <Divider my={6} />    
        <Heading as="h3" fontSize={20} mb={2}>
        Erasmus+ Perugia (Italia)
        </Heading>
        <p>Development and translation of websites,
multimedia content management, and graphic
design.</p>
            <Section>
                <WorkGridItem id="solarCash" title="SolarCash" thumbnail={thumbSolar}>
                    

                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="20Eventi" title="20Eventi" thumbnail={thumbVenti}>
                    

                </WorkGridItem>
            </Section>
           
            
        
        </SimpleGrid>
        
    </Container>
    </Layout>
)
export default Experience