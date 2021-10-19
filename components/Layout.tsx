import { Flex, Spacer, Box, Center, Link } from "@chakra-ui/react";
import Toggle from "./Toggle";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Box>
      <Flex padding="2" paddingTop="3" marginRight="4">
        <Spacer />
        <Toggle />
      </Flex>
      <Center>{children}</Center>
      <Center>
        <Footer />
      </Center>
    </Box>
  );
}
