import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import WorkVideo from '../../components/workVideo';
  const Work = () => (
    <Layout title="Instalfer Web">
      <Container>
        <Title>
        Instalfer Web <Badge>2021</Badge>
        </Title>
        <P>
        Website for my father's business, who is a professional in the electrical sector with over 35 years of experience in air conditioning installations, electrical installations, repairs, maintenance, automatic doors, and solar panels
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://instalfer.es">
            https://instalfer.es <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows, Linux, IOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Next.js</span>
          </ListItem>
         
        </List>
        <WorkImage src="/images/myWorks/instalfer_eyecatch0.jpg" alt="Instalfer Web" />
       
        
        
        
        
      </Container>
    </Layout>
  )
  
  export default Work
  