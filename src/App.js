import { ChakraProvider } from "@chakra-ui/react";
import { Text, HStack,VStack,Spacer, Input , Stack, Button, Box, Link, Grid, Flex, Avatar, Heading } from "@chakra-ui/react"
import { Quoted, ShadowBox, HoverLink, NumberingHoverLink } from "./Test";

function App() {
  const number = 6
  const sampleText = ["dog", "cat", "rabbit", "mouse"]

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
      <Box bg={["red.200", "yellow.200", "green.200", "blue.200"]} >
        Hello
      </Box>
      <ShadowBox>hello</ShadowBox>
      <HoverLink>リンク</HoverLink>
      <NumberingHoverLink number={number}>26</NumberingHoverLink>
      <Box sx={{ breakInside: "avoid" }}>xxx</Box>
      <Box style={{ breakInside: "avoid" }}>xxx</Box>
      <Box boxShadow="lg" rounded="lg">test</Box>
      </Stack>
      <Box>
        <p>Box</p>
        {sampleText.map(item => <Box bg="red.50" p={2}>{item}</Box>)}
      </Box>
      <Stack>
        <p>Stack</p>
        {sampleText.map(item => <Box bg="red.50" p={2}>{item}</Box>)}
      </Stack>
      <Grid gap={2}>
        {sampleText.map(item => <Box bg="red.50" p={2}>{item}</Box>)}
      </Grid>

      <Flex direction="column" gridGap={2}>
        {sampleText.map(item => <Box bg="red.50" p={2}>{item}</Box>)}
      </Flex>

      <Box display="flex" flexDirection="row">
        <Avatar />
        <Box>
          <Heading size="sm">Some member</Heading>
          <Box>あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波</Box>
        </Box>
      </Box>
      <HStack>
        <Avatar />
        <Stack> {/* <VStack align="start"> でもOK*/}
          <Heading size="sm">Some member</Heading>
          <Box>あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモーリオ市、郊外のぎらぎらひかる草の波</Box>
        </Stack>
      </HStack>
      <Flex>
        <Box bg={"red.100"}>Hello</Box>
        <Spacer />
        <Box bg={"red.100"}>Hello</Box>
        <Spacer />
        <Box bg={"red.100"}>Hello</Box>
      </Flex>
      <Flex justifyContent="space-between">
        <Flex>
          <Box color="gray.500" px={1}>@taro:</Box>
          <Box fontWeight="bold">Hello!</Box>
        </Flex>
        <Flex>
          <Box color="gray.500">2021-05-01 12:00</Box>
        </Flex>
      </Flex>
      <Flex>
        <Box color="gray.500" px={1}>@taro:</Box>
        <Box fontWeight="bold">Hello!</Box>
        <Spacer/>
        <Box color="gray.500">2021-05-01 12:00</Box>
      </Flex>
      <HStack spacing={1}>
        <Box color="gray.500">@taro:</Box>
        <Box fontWeight="bold">Hello!</Box>
        <Spacer/>
        <Box color="gray.500">2021-05-01 12:00</Box>
      </HStack>

    </ChakraProvider>
  );
}

export default App;
