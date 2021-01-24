import { Text, Flex, Heading } from "@chakra-ui/react";
import DarkModeSwitch from "../components/DarkModeSwitch";
import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Mail from "../assets/mail.svg";
import SocialButton from "../components/SocialButton";

const Index = () => (
  <Flex align="center" direction="column" p={10}>
    <Heading mt="10vh" mb="5vh" p={0} fontSize={["10vw", "6vw"]}>
      Herman Nygaard‍
    </Heading>
    <Text align="center" fontSize="2xl">
      Computer science student and developer at the University of Oslo.
    </Text>
    <Flex mt="3vh" justify="space-around">
      <SocialButton
        icon={<GitHub />}
        href="https://github.com/hermannygaard"
        aria="GitHub"
      />
      <SocialButton
        icon={<LinkedIn />}
        href="https://www.linkedin.com/in/hermannygaard/"
        aria="LinkedIn"
      />
      <SocialButton
        icon={<Mail />}
        href="mailto:herman@nygaard.dev"
        aria="Mail"
      />
    </Flex>
    <DarkModeSwitch />
  </Flex>
);

export default Index;
