import { Email } from "./Email"
import React from 'react'
import { Box, Flex, Link, Text, Heading, Container } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  const links = [
    {
      id: 1,
      child: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/premkumar-jadhav-163320230/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/aniketrasal",
    },
    {
      id: 3,
      child: "Email",
      icon: <HiOutlineMail size={30} />,
      href: "https://mail.google.com/",
    },
  ];
  return (
    <div name="contact" className="contacts1">
      <Box
        pb="25px"
      >
        <Box
          color="white"
          display="none"
          ml="30px"
          mt="15px"
          borderBottom="4px solid gray">
          <Heading >Contact</Heading>
        </Box>
        <Box>
        </Box>
        
      </Box>
    </div>
  )
}

export default Contact;
