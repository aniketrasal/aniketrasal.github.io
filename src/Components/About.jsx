import { Box, Heading, Text, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react';
import { ImPointRight } from "react-icons/im";

function About() {
    // return (
    //     <div name="about" className='about1'>
    //         
    //             

    //             
                
    //             <Flex justifyContent="space-between">
    //                 <Box
                        
    //                     justifyContent="center"
    //                     // border="1px solid white"
    //                     m="auto"
    //                     mt="20px"
    //                     textAlign="start"

    //                     fontWeight="300"
    //                 >
    //                     <Text fontSize="28px">With <span className='span'>coding,</span>  some other Interest that I love!  </Text>
    //                     <UnorderedList fontSize="21px" mt={"10px"}>
    //                         <ListItem>Travelling</ListItem>
    //                         <ListItem>Music</ListItem>
    //                         <ListItem>Sci-fi & Mystery Movies</ListItem>
    //                     </UnorderedList>

    //                 </Box>
    //                 {/* <Box>
    //                     <Img w='100px' border="1px solid white" mt="-130px" ml="100px" borderRadius='50%' src='https://img.freepik.com/premium-vector/programmer-focused-work-project-while-sitting-easy-chair_569013-330.jpg?w=740' alt="img" />
    //                 </Box> */}
    //             </Flex>

    //         </Box>
    //     </div>
    // )
    
      return (
        <div name="about" className='about1'>
          <Flex
            fontFamily="'Noto Sans', sans-serif"
            justifyContent="space-around"
            alignItems="center"
            // px="10px"
            pt="90px"
            h={{ sm: "auto", md: "auto", lg: "100vh" }}
            pb={["10px", "10px"]}
            mt={["-100px",]}
            // ml="50px"
            direction={["column-reverse", "flex", "row"]}
            bgGradient='transparent'
          >
            <Box className='main' textAlign="center" paddingLeft="20px"
                w={{ sm: "70%", md: "70%", lg: "60%" }} >
                    <Box
                    color="white"
                    display="inline-flex"
                    justifyContent={["space-around", "flex-start","flex-start"]}
                    ml={["50px", "0px", "0px"]}
                    // border="1px solid white"
                    borderBottom="4px solid gray">
                    <Heading >About Me</Heading>
                </Box>

           
            <Box
              textAlign={["center", "left", "left"]}
              lineHeight="40px"
              color="white"
              ml="50px"
            >
                <Text mt="30px" fontWeight="400" fontSize="28px">KNOW WHO <Text className='span'>I'M</Text></Text>
                 <Text mt="20px"
                    fontSize="20px"
                    fontWeight="300"
                ><span className='span'></span>
                    Hi Everyone, I am<span className='span'> Aniket Rasal</span> from <span>Pune, Maharashtra, India.</span>
                    <br/> I am a <span className='span'>Full Stack Web Developer</span> and Mechanical Engineer.
                    <br/>An Motived and hardworking individual, Ready to apply my knowledge into Practice,
                    <br/> I have a diverse sets of skills, Who is ready to take challenging and critical phase
                    <br/> to accomplish the goals.
                    <br/>
                    {/* Apart from coding, some other activities that I love to do!
                    <ui>
                        <li className="about-activity">Travelling</li>
                        <li className="about-activity">Playing Cricket</li>
                        <li className="about-activity">Listening music</li>
                        <li className="about-activity">Watching Scientific Movies and Documentory</li>
                    </ui> */}
                </Text>
            </Box>
            </Box>

            <Box
            //   borderRadius="50%"
              className='imgborder'
            >
              <Img
                borderRadius="50%"
                mb="10px"
                mt={["19px","0px","0px"]}
                h={["200px", "300px", "280px"]}
                src="https://avatars.githubusercontent.com/u/101393520?v=4" alt="avatar" />
            </Box>
          </Flex>
    
        </div>
      )
}

export default About;
