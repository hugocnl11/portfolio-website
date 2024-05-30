import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import thumbDownToHell from '../public/images/myWorks/PortadaDTH.png'
import thumbInstalferWeb from '../public/images/myWorks/instalfer_eyecatch1.png'
import thumbMyWardrobe from '../public/images/myWorks/myWardrobe_eyecatch4.png'
import thumbPokemon from '../public/images/myWorks/pokemon_eyecatch.png'
import thumbChargePot from '../public/images/myWorks/ChargePot0.jpg'
//import thumbDefault from '../public/images/myWorks/Fondo_Negro_9.png'
//import thumbCrud from '../public/images/myWorks/backEnd/crud.png'
import thumbRestApi from '../public/images/myWorks/backEnd/apiRest.png'

const Works = () => (
<Layout title="Works">
    <Container>
    <Heading as="h3" fontSize={20} mb={4}>
        Back-End Projects
    </Heading>
    <SimpleGrid delay={0.2} columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="apiRest" title="RESTful API" thumbnail={thumbRestApi}>
          This project will focus on developing a RESTful API using PostgreSQL as the database.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
      <Heading as="h3" delay={0.2} fontSize={20} mb={4}>
        VideoGames
      </Heading>

      <SimpleGrid delay={0.2} columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="downToHell" title="Down To Hell" thumbnail={thumbDownToHell}>
          Metroidvania-style 2D game built in Unity
          </WorkGridItem>
        </Section>
        <Section >
          <WorkGridItem id="pokemonJavaEdition" thumbnail={thumbPokemon} title="Pokemon Java Edition">
            Pokémon battle project implemented in Java Swing
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

     

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Apps
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
          <WorkGridItem id="myWardrobe" title="MyWardrobe" thumbnail={thumbMyWardrobe}
          >
            App to save the garments in your wardrobe to create outfit combinations
          </WorkGridItem>
      </Section>
      <Section delay={0.3}>
          <WorkGridItem id="chargePot" thumbnail={thumbChargePot} title="ChargePot">
            Application to manage and track your expenses.
          </WorkGridItem>
      </Section> 
</SimpleGrid>
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
      
    </Container>
  </Layout>
)

export default Works
//export { getServerSideProps } from '../components/chakra'
