// Importa los componentes necesarios de Chakra UI y React
import { Box, Container } from '@chakra-ui/react';
//import Head from 'next/head';


// Define tu componente WorkVideo
const WorkVideo = ({ src }) => {
  return (
    <Box as="main" pb={5}>
      <Container maxW="container.md" pt={1}>
        <video width="100%" height="auto" controls>
          <source src={src} type="video/mp4" />

        </video>
      </Container>
    </Box>
  );
};

// Exporta tu componente WorkVideo
export default WorkVideo;
