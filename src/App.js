import { ChakraProvider } from "@chakra-ui/react";
import { Text, Input , Stack, Button, Box, Link} from "@chakra-ui/react"
import { Quoted } from "./Quote";

function App() {
  return (
    <ChakraProvider>
      <Stack p={13} spacing={3}>
        <Input variant='outline' placeholder='Outline' />
        <Input variant='filled' placeholder='Filled' />
        <Input variant='flushed' placeholder='Flushed' />
        <Input variant='unstyled' placeholder='Unstyled' />
        <Input placeholder="プレースホルダー" _placeholder={{color: "blue.500"}}/>
      </Stack>

      <Stack p={13} direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='solid'>
          Button
        </Button>
        <Button colorScheme='teal' variant='outline'>
          Button
        </Button>
        <Button colorScheme='teal' variant='ghost'>
          Button
        </Button>
        <Button colorScheme='teal' variant='link'>
          Button
        </Button>
        <Link href="https://google.com">
          <Button>default button</Button>
        </Link>
        <Button as="a" href="https://google.com">as=a button</Button>
        <Text _hover={{ fontWeight: "bold" }}>Hover Me</Text>
        <Quoted>
          test
        </Quoted>
      </Stack>
      <Box bg={["red.200", "yellow.200", "green.200", "blue.200"]} >
        Hello
      </Box>
    </ChakraProvider>
  );
}

export default App;
