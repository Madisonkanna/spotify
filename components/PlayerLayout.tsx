import { Box } from "@chakra-ui/layout";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vw">
      <Box top="0" left="0" width="250px" position="absolute">
        sidebar
      </Box>
      <Box marginBottom="100px" marginLeft="250px">
        {children}
      </Box>
      <Box left="0" bottom="0" position="absolute">
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
