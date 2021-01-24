import { IconButton } from "@chakra-ui/react";
import React from "react";

type Props = {
  icon: React.ReactElement;
  href: string;
  aria: string;
};

const SocialButton = ({ icon, href, aria }: Props) => (
  <IconButton
    as="a"
    href={href}
    aria-label={aria}
    icon={icon}
    target="_blank"
    rel="noopener"
    h="50px"
    w="50px"
    m={5}
  />
);
export default SocialButton;
