import { Center, Link, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box>
        Made by
        <Link href="https://twitter.com/pranavmalvawala" color="blue.400" isExternal>
          {" "}
          @pranavmalvawala
        </Link>{" "}
        for
        <Link href="https://tweethunter.io/" color="blue.400" isExternal>
          {" "}
          tweethunter.io
        </Link>
        .
      </Box>
      <Box>
        &nbsp;Link to the
        <Link href="https://github.com/pranavmalvawala/best-tweets" color="blue.400" isExternal>
          {" "}
          Code
        </Link>
      </Box>
    </>
  );
}
