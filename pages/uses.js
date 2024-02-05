import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { UseGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbKiyo from '../public/images/uses/kiyo.jpg'
import thumbHuntsman from '../public/images/uses/huntsman.png'
import thumbViper from '../public/images/uses/viper.jpg'
import thumbBlackshark from '../public/images/uses/blackshark.jpg'

const Uses = () => (
<Layout title = "Uses">


    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
        List of the tech I use
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
                <UseGridItem id="kiyo" title="Razer Kiyo" thumbnail={thumbKiyo}>
                Webcam

                </UseGridItem>
                
            </Section>
            <Section>
            <UseGridItem id="huntsman" title="Razer Huntsman V2" thumbnail={thumbHuntsman}>
                Keyboard

                </UseGridItem>
            </Section>
            <Section>
                <UseGridItem id="viper" title="Razer Viper" thumbnail={thumbViper}>
                Webcam

                </UseGridItem>
                
            </Section>
            <Section>
                <UseGridItem id="blackshark" title="Razer Blackshark V2" thumbnail={thumbBlackshark}>
                Webcam

                </UseGridItem>
                
            </Section>

        

            </SimpleGrid>
    </Container>
    </Layout>
)
export default Uses