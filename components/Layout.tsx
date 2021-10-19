import Head from "next/head";
import { Flex, Spacer, Box, Center } from "@chakra-ui/react";
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
      <Center>{children}</Center>
      <Center>
        <Footer />
      </Center>
    </Box>
  );
}
