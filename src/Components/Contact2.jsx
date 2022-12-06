import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import {
    FormControl,
    FormLabel,
    Heading,
    Input,
  } from '@chakra-ui/react';
import { Box,Button,Text, Flex} from '@chakra-ui/react'


function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}


function Contact2() {
  return (
    <div className="contact2" name="contact">
         <div className="contact-box-1">
          <Box >
           <Heading className="contact-heading">
             Contact
           </Heading>
           </Box>
         </div>
    <Box>
                <Box mt="0px" md={12} className="home-about-social" style={{color: "white"}}>
                  
                <Heading>FIND ME ON</Heading>
                <Text mt="30px" fontWeight="400" fontSize="25px">Feel free to <Text className='span'>Connect</Text> with me</Text>
                <Flex className="home-about-social-links">
                <Box className="social-icons">
                 <a
                  href="mailto:rasalaniket00@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FiMail />
                </a>
              </Box>
              <Box className="social-icons">
                <a
                  href="https://github.com/aniketrasal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </Box>
              <Box className="social-icons">
                <a
                  href="https://twitter.com/AniketRasal17?s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </Box>
              <Box className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aniket-rasal-5b8510204/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </Box>
              <Box className="social-icons">
                <a
                  href="https://www.instagram.com/aniket__rasal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </Box>
            </Flex>
          </Box>
        </Box>
    </div>
  );
}

export default Contact2;