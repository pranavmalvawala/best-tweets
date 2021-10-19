import { useColorMode, Button } from "@chakra-ui/react";
import { MdOutlineWbSunny, MdNightlight } from "react-icons/md";

export default function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      _focus={{
        boxShadow: "none",
      }}
    >
      {colorMode === "dark" ? <MdOutlineWbSunny /> : <MdNightlight />}
    </Button>
  );
}
