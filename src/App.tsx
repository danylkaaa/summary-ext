import "./App.css";
import { theme } from "./theme";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Greeting } from "./screens/Greeting";
import { UnsupportedStore } from "./screens/UnsupportedStore";
import { ProductFound } from "./screens/ProductFound";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w={400} p="2" shadow={"lg"} borderRadius="lg" overflow={"scroll"}>
        <ProductFound />
        {/*<UnsupportedStore/>*/}
      </Box>
    </ChakraProvider>
  );
}

export default App;
