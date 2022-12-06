import { Box, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

import {AiFillCodeSandboxCircle} from "react-icons/ai"
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Tools() {

  return (
    <div name="skill" className='skills1'>
      <Box
        pl={["0px", "0px"]}
        h={{ sm: "auto", md: "auto", lg: "auto" }}
        pb={["20px", "10px"]}
        color="white"
        textAlign="center"
        fontFamily="'Noto Sans', sans-serif" >
        <Box
          display="inline-flex"
          ml="30px"
          borderBottom="4px solid gray">
          <Heading><span className="span">Tools </span>I use</Heading>
        </Box>

        <Box>
          <SimpleGrid w={{
            base: '90%',
            md: '90%',
            xl: '70%',
          }} m="auto" py={{ sm: "0px", md: "50px", lg: "0px" }} columns={[2, 3, 5]} spacing={30} >
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <SiVisualstudiocode />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <AiFillCodeSandboxCircle />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <SiVercel />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <SiHeroku />
              </Box>
              <Box
                className='tech-icons'
                boxShadow="0px 3px 3px grey"
                textAlign="center"
                cursor="pointer"
              >
                {/* <Img src={src} alt="" h="100px" diplay="block" m="auto" /> */}
                <SiPostman />
              </Box>
              
          </SimpleGrid>
        </Box>

      </Box>
    </div>
  )
}

export default Tools

