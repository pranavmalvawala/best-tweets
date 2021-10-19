import { useState, useRef, useEffect, FormEvent } from "react";
import { Heading, Image, HStack, Text, FormControl, Input, FormHelperText, Button } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Tweets, { Props as TweetProps } from "../components/Tweets";

function Home() {
  const [handle, setHandle] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [allTweets, setAllTweets] = useState<TweetProps>({} as TweetProps);
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      setAllTweets({} as TweetProps);
      const res = await fetch(`/api/tweets?handle=${handle}`);

      if (!res.ok) {
        setError(true);
        return;
      }

      const data = await res.json();
      setAllTweets(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Layout>
      <HStack>
        <Image src="/best.png" alt="a best medal" />
        <Heading as="h2">Best Tweets</Heading>
      </HStack>
      <Text fontSize="xl">Find a person's best tweets! Based on engagment, likes and retweets.</Text>
      <form onSubmit={handleSubmit}>
        <HStack alignItems="flex-start" paddingTop="4">
          <FormControl id="handle">
            <Input
              type="text"
              width="300px"
              placeholder="twitter handle e.g. pranavmalvawala"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              ref={inputRef}
              isRequired
              pattern="[^@]+"
            />
            <FormHelperText paddingLeft="1">Type handle without using @</FormHelperText>
          </FormControl>
          <Button type="submit" isLoading={isLoading} style={{ marginLeft: 0 }}>
            Search
          </Button>
        </HStack>
      </form>
      {allTweets.tweets?.length > 0 && <Tweets {...allTweets} />}
      {error ? <Text style={{ marginTop: "3rem" }}>Please check the handle!</Text> : null}
    </Layout>
  );
}

export default Home;
