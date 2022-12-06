import { Box, Flex, Text, Heading, Img, SimpleGrid, Link } from '@chakra-ui/react';
import React from 'react'
import farfetch from "../assets/portfolio/toggle1.png";
import zee5 from "../assets/portfolio/zee5.jpg";
import gearbest from "../assets/portfolio/gearbest.jpg";
import hellobonsai from "../assets/hellobonsai.jpg";
import myportfolio from "../assets/myportfolio.png";
import beautyholic from "../assets/portfolio/beautyholic.png";

import { ExternalLinkIcon } from '@chakra-ui/icons'


function Projects() {
  const projects = [
    {
      id: 1,
      src: farfetch,
      name: "Farfetch (Clone)",
      link: 'https://peaceful-stroopwafel-aba1de.netlify.app',
      repo: 'https://github.com/Sab01123/mucho-angle-7709',
      info: "FARFETCH Limited is the leading global platform for the luxury fashion industry. Farfetch is a E-commerce online fashion platform. Me and my 4 Team members made the clone of this website in under 5 days",
      tstack: "React | Chakra UI | JavaScript | HTML | CSS | Node JS | Express JS | MongoDB "
    },
    {
      id: 2,
      src: hellobonsai,
      name: "Hello Bonsai (Clone)",
      link: 'https://hellobonsai.vercel.app/',
      repo: 'https://github.com/PRASHANT7277/Hellobonsai-clone',
      info: "Hello Bonsai is a project management app. All the features you see in our project from login to logout page all are maintened from our Backend which is deployed on heroku. Me and my 5 Team members made the clone of this website in under 5 days",
      tstack: "React | Chakra UI | JavaScript | HTML | CSS | Node JS | Express JS | MongoDB "
    },
    {
      id: 3,
      src: zee5,
      name: "ZEE5 (Clone)",
      link: "https://zee5clone.netlify.app/",
      repo: 'https://github.com/kriti4666/ZEE-5-Project',
      info: "ZEE5 is an Indian subscription video on-demand and over-the-top (OTT) streaming service, run by Zee Entertainment Enterprises. Me and my 5 Team members made the clone of this website in under 5 days",
      tstack: "HTML | CSS | JAVASCRIPT"
    },
    {
      id: 4,
      src: gearbest,
      name: "Gearbest (Clone)",
      link: 'https://roaring-mochi-bd3687.netlify.app',
      repo: 'https://github.com/HARSHAL-AP/project1-Gearbest',
      info: "Gearbest is a big Chinese e-commerce store that sells a plethora of products. Me and my 4 Team members made the clone of this website in under 5 days",
      tstack: "HTML | CSS | JAVASCRIPT"
    },
    {
      id: 5,
      src: myportfolio,
      name: "Portfolio",
      link: 'https://aniketrasal.github.io',
      repo: 'https://github.com/aniketrasal/aniketrasal.github.io',
      info: "This is my new Portfolio. I created this portfolio in 3 days. I made this using React, Chajra UI, HTML, CSS and Javascript",
      tstack: "React | Chakra UI | HTML | CSS | JAVASCRIPT"
    },
    {
      id: 6,
      src: beautyholic,
      name: "Beautyholic",
      link: 'https://tourmaline-gingersnap-06dea8.netlify.app/',
      repo: 'https://github.com/shivamgupta8482/beautyholic',
      info: "Beauty Bebo is India’s fastest growing online retail store for the day to day and special occasion need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products.",
      tstack: "React | Chakra UI | HTML | CSS | JAVASCRIPT | MongoDB | ExpressJS"
    },


  ];
  return (
    <Box name="projects" className='projects1'>
      <Box
         textAlign="center"
        pl={{ md: "0px", sm: "auto", lg: "0px" }}
        h={{ sm: "auto", md: "auto", lg: "auto" }}
        color="white"
        fontFamily="'Noto Sans', sans-serif"
      >
        <Box
          display="inline-flex"
          textAlign="center"
          ml="30px"
          mb="20px"
          mt="100px"
          borderBottom="4px solid gray">
          <Heading>My Recent <span className="span">Projects</span> in <span className='span'>Masai School</span></Heading>
        </Box>
        
        <Text ml="30px" mb="20px" fontWeight="500" fontSize="18px">Check out some of my work here</Text>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} pb={["20px", "20px"]} gap="30px" w="80%" m="auto">
          {
            projects.map((item) => (
              <Box
                className='hover-effect'
                boxShadow="0px 3px 3px 1px gray"
                overflow=""
                p="20px"
                mt={["100px", "0px"]}>
                <Img src={item.src} alt="img" h="180px" w="100%" />
                <Heading mt="10px" fontSize="20px" fontWeight="bold" letterSpacing="3px" ><span className='span'>{item.name}</span></Heading>
                <Text mt="10px">{item.info}</Text>
                <Text mt="10px" color="#c770f0"><span className='span'>{item.tstack}</span></Text>
                <Flex justifyContent="center" gap="70px" mt="10px">
                  <Link backgroundColor="#fdc417" box-shadow= "0 0 15px #dece52, 0 0 5px #ffda00, 0 0 15px #ffda00" color="black" padding="10px" borderRadius="10px" className='hover-effect' href={item.link} isExternal>
                    Demo <ExternalLinkIcon mx='2px' />
                  </Link>
                  <Link backgroundColor="#fdc417" color="black" padding="10px" borderRadius="10px" className='hover-effect' href={item.repo} isExternal>
                    github <ExternalLinkIcon mx='2px' />
                  </Link>
                </Flex>
              </Box>
            ))
          }
        </SimpleGrid>

      </Box>
    </Box>
  )
}

export default Projects
