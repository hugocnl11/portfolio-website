import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { UseGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbKiyo from '../public/images/uses/kiyo.jpg'
import thumbHuntsman from '../public/images/uses/huntsman.png'
import thumbViper from '../public/images/uses/viper.jpg'
import thumbBlackshark from '../public/images/uses/blackshark.jpg'
import thumbDesktop from '../public/images/uses/desktop.png'
import thumbGigantus from '../public/images/uses/gigantus.png'
import thumbPc from '../public/images/uses/pc.png'
import thumbChair from '../public/images/uses/secret.png'
import thumbBehringer from '../public/images/uses/uphoria.jpg'
import thumbMicro from '../public/images/uses/at2020.png'
import thumbMonitors from '../public/images/uses/monitors.png'


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
                Mouse

                </UseGridItem>
                
            </Section>
            <Section>
                <UseGridItem id="blackshark" title="Razer Blackshark V2" thumbnail={thumbBlackshark}>
                Headset

                </UseGridItem>
                
            </Section>
            <Section>
                <UseGridItem id="pc" title="PC" thumbnail={thumbPc}>
                

                </UseGridItem>
                
            </Section>
            <Section>
                <UseGridItem id="titanEvo" title="Titan Evo " thumbnail={thumbChair}>
                Chair

                </UseGridItem>

            </Section>
            <Section>
                <UseGridItem id="monitor" title="MSI Optix G27C4" thumbnail={thumbMonitors}>
                Monitors

                </UseGridItem>

            </Section>
            <Section>
                <UseGridItem id="gigantus" title="Razer Gigantus 3XL" thumbnail={thumbGigantus}>
                Mouse Pad

                </UseGridItem>

            </Section>
            
            <Section>
                <UseGridItem id="soundCard" title="Behringer UM2 U-PHORIA" thumbnail={thumbBehringer}>
                Sound Card

                </UseGridItem>

            </Section>
            <Section>
                <UseGridItem id="microphone" title="Audio-Technica at2020" thumbnail={thumbMicro}>
                Microphone

                </UseGridItem>

            </Section>

        

            </SimpleGrid>
    </Container>
    </Layout>
)
export default Uses