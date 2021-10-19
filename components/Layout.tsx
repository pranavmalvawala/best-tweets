import Head from "next/head";
import { Flex, Spacer, Box, Center, VStack } from "@chakra-ui/react";
import Toggle from "./Toggle";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Box>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Best Tweets</title>
      </Head>
      <Flex padding="2" paddingTop="3" marginRight="4">
        <Spacer />
        <Toggle />
      </Flex>
      <VStack marginBottom="8" marginTop="100px">
        {children}
      </VStack>
      <Center marginBottom="10">
        <Footer />
      </Center>
    </Box>
  );
}
