import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import thumbPokemon from '../public/images/myWorks/pokemon_eyecatch.png'
import thumbMyWardrobe from '../public/images/myWorks/myWardrobe_eyecatch4.png'
import thumbDownToHell from '../public/images/myWorks/PortadaDTH.png'
import thumbInstalferWeb from '../public/images/myWorks/instalfer_eyecatch1.png'
import thumbChargePot from '../public/images/myWorks/ChargePot0.jpg'
//import thumbDefault from '../public/images/myWorks/Fondo_Negro_9.png'

const Works = () => (
<Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        VideoGames
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="downToHell" title="Down To Hell" thumbnail={thumbDownToHell}>
           Metroidvania-style game developed in Unity as the final project for a higher-level vocational training in multimedia development.
          </WorkGridItem>
        </Section>
        <Section >
          <WorkGridItem id="pokemonJavaEdition" thumbnail={thumbPokemon} title="Pokemon Java Edition">
            High school-level Pokémon battle project implemented in Java Swing
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

     

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Apps
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
      <Section delay={0.3}>
          <WorkGridItem id="myWardrobe" title="MyWardrobe" thumbnail={thumbMyWardrobe}
          >
            App to save the garments in your wardrobe, and the ones you desire for creating outfit combinations
          </WorkGridItem>
      </Section>
      <Section delay={0.3}>
          <WorkGridItem id="chargePot" thumbnail={thumbChargePot} title="ChargePot">
            ChargePot plataform
          </WorkGridItem>
      </Section>

      <Section delay={0.5}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Webs
        </Heading>
        <Section delay={0.7}>
          <WorkGridItem id="instalferWeb" title="Instalfer Web" thumbnail={thumbInstalferWeb}
          >
            Website of the company Instalaciones Eléctricas Fermín S.L.
          </WorkGridItem>
        </Section>
      </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
//export { getServerSideProps } from '../components/chakra'
