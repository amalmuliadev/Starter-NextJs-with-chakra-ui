import { Button, Link as ChakraLink } from '@chakra-ui/core';

import { Container } from './Container';

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink
      isExternal={true}
      href="https://chakra-ui.com"
      flexGrow={1}
      mx={2}
    >
      <Button width="100%" variant="outline" colorScheme="green">
        chakra-ui
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal={true}
      href="https://github.com/amalmuliadev/Starter-NextJs-with-chakra-ui"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="green">
        View Repo
      </Button>
    </ChakraLink>
  </Container>
);
