import { useState, useRef, useEffect, FormEvent } from "react";
import { Input, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";

function Home() {
  const [handle, setHandle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch(`/api/tweets?handle=${handle}`);
      const data = await res.json();
      console.log("data: ", data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Layout>
      <h1>Find out person's best tweets!</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={handle}
          placeholder="pranavmalvawala"
          onChange={(e) => setHandle(e.target.value)}
          ref={inputRef}
          colorScheme="twitter"
        />
        <button type="submit">Search</button>
      </form>
    </Layout>
  );
}

export default Home;
