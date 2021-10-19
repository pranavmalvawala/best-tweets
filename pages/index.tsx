import { useState, useRef, useEffect, FormEvent } from "react";

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
    <div style={{ margin: "auto", maxWidth: "500px" }}>
      <h1>Find out person's best tweets!</h1>
      <form onSubmit={handleSubmit}>
        <input value={handle} onChange={(e) => setHandle(e.target.value)} ref={inputRef} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Home;
