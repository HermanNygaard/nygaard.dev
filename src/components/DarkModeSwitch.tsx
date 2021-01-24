import { MoonIcon } from "@chakra-ui/icons";
import { useColorMode, IconButton } from "@chakra-ui/react";

const DarkModeSwitch = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      position="fixed"
      top="1rem"
      right="1rem"
      color="green"
      aria-label="Toggle darkmode"
      onClick={toggleColorMode}
      icon={<MoonIcon />}
    />
  );
};

export default DarkModeSwitch;
