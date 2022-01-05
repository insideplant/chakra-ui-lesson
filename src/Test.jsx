import { Box, Link } from "@chakra-ui/react"

export const Quoted = ({children}) => <>「{children}」</>

export const ShadowBox = (props) => <Box rounded="base" shadow="md" {...props} />

export const HoverLink = (props) => {
  return <Link _hover={{bg: "teal.200"}} p={2} {...props} />
}

export const NumberingHoverLink = ({number, ...linkProps}) => {
  return <Link 
    _hover={{bg:"teal.200"}} 
    bg={number % 2 ? "gray.100" : "white"} 
    p={2}
    {...linkProps } 
  />
}
