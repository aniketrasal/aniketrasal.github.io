import { Box, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react';
import Tool from "./Tool";
import { useState } from 'react';

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3,
} from "react-icons/di";
import {
  SiExpress,
  SiRedux
} from "react-icons/si";
import {AiFillHtml5}from "react-icons/ai"

function Skill() {
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <div name="skill" className='skills1'>
      <Box
        pl={["0px", "0px"]}
        h={{ sm: "auto", md: "auto", lg: "auto" }}
        pb={["20px", "10px"]}
        pt="80px"
        color="white"
        textAlign="center"
        overflow="hidden"
        fontFamily="'Noto Sans', sans-serif" >
        <Box
          display="inline-flex"
          mt="20px"
          ml="30px"
          borderBottom="4px solid gray">
          <Heading> Professional <span className="span">Skillset</span></Heading>
        </Box>

        {/* <Text ml="30px" mt="15px">These are the technologies I've worked with and used them in my projects.</Text> */}
        <Box>
          <SimpleGrid w={{
            base: '90%',
            md: '90%',
            xl: '70%',
          }} m="auto" mt="40px" py={{ sm: "0px", md: "50px", lg: "0px" }} columns={[2, 3, 4]} spacing={30} >
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <DiJavascript1 />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <AiFillHtml5 />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <DiCss3 />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <DiNodejs />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <DiReact />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <DiMongodb />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
                h="100px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                font-size= "4.5em"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <SiExpress w="100px" />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <SiRedux />
              </Box>
          </SimpleGrid>
        </Box>
        <br/>
        <br/>
        <Tool/>
      </Box>
      
    </div>
  )
}

export default Skill

// import React from "react";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
// } from '@chakra-ui/react'
// // import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import Tool from "./Tool"
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiCss3
// } from "react-icons/di";
// import {
//   SiExpress,
// } from "react-icons/si";
// import {AiFillHtml5}from "react-icons/ai"

// function Skills() {
//   return (
//     <div name="skill" className="skills1">
//       <Box
      
//         pl={["0px", "60px"]}
//         h={{ sm: "auto", md: "auto", lg: "100vh" }}
//         pb={["20px", "10px"]}
//         color="white"
//         textAlign="center"
//         fontFamily="'Noto Sans', sans-serif" >
//         <Box
//           display="inline-flex"
//           mt="100px"
//           ml="30px"
//           borderBottom="4px solid gray">
//           <Heading> Professional <span className="span">Skillset</span></Heading>
//         </Box>
//         <br/>
//         <br/>
//         <br/>
//         <TableContainer>
//         <Table variant='simple' width="50%" ml='350px'>
//           <Tbody>
//             <Tr width="50%">
//               <Td className="tech-icons"><DiJavascript1/></Td>
//               <Td className="tech-icons"><AiFillHtml5 /></Td>
//               <Td className="tech-icons"><DiCss3 /></Td>
//             </Tr>
//             <Tr>
//               <Td className="tech-icons"><DiNodejs /></Td>
//               <Td className="tech-icons"><DiReact /></Td>
//               <Td className="tech-icons"><DiMongodb /></Td>
//             </Tr>
//             <Tr>
//               <Td className="tech-icons"><SiExpress /></Td>
//               <Td className="tech-icons"><SiExpress /></Td>
//               <Td className="tech-icons"><SiExpress /></Td>
//             </Tr>
//           </Tbody>
//         </Table>
//         </TableContainer>
//         </Box>

//        <Tool/> 

//     </div>


//   );
// }

// export default Skills;

