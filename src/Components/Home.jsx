import { Flex, Box, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import Type from "../Type"
import resume from "../assets/Aniket-Rasal-Resume.pdf"
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Home() {

  const links = [
    {
      id: 1,
      child: (
        <>
          Download CV <span className='dnload-icon'><BsFillPersonLinesFill size={30} /></span>
        </>
      ),
      href: resume,
      download: true,
    }
  ]

  return (
    <div name="home" className='home1'>
      <Flex
        fontFamily="'Noto Sans', sans-serif"
        justifyContent={["space-around", "flex-start","flex-start"]}
        alignItems="center"
        px="80px"
        pt="90px"
        h={{ sm: "auto", md: "auto", lg: "100vh" }}
        
        pb={["10px", "10px"]}
        direction={["column", "flex", "row"]}
        bgGradient='transparent'
      >
        <Box
          textAlign={["center", "left", "left"]}
          lineHeight="40px"
          color="white"
        >
          <Heading>
            <Text mt={["55px","25px"]} mb={"15px"} fontSize={["25px", "30px"]} fontWeight="normal">Hello, <span className='wave'></span>my name is </Text>
            <Heading fontSize={["40px", "38px", "100px"]}>Aniket Rasal</Heading>

          </Heading>
          <Box mt={["25px","25px"]} fontSize={["18px", "20px"]} >
            {/* <Box style={{marginRight:"15px"}} fontSize={["18px", "40px"]}><Text>I'm a</Text></Box> */}
            <Box className="span" fontSize={["21px", "45px"]}><Type/></Box>
          </Box>
            <Box mt={"25px"} fontSize={["20px", "30px"]} style={{color:"black"}} >
              {links.map(({ child, href, download }) => (
                <a
                  href={href}
                  color="black"
                  className="resume-btn"
                  download={download}
                >
                  {child}
                </a>
              ))}
            </Box>
            <Box marginLeft={["-10px","45px"]} marginTop={["20px","20px"]}>
            <Flex className="home-about-social-links">
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
                  href="https://www.linkedin.com/in/aniket-rasal-5b8510204/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </Box>
            </Flex>
            </Box>
          </Box>
      </Flex>

    </div>
  )
}

export default Home

// import { Flex, Box, Heading, Img, Text } from '@chakra-ui/react'
// import React from 'react'
// import Type from "../Type"
// import resume from "../assets/Aniket-Rasal-Resume.pdf"
// import { BsFillPersonLinesFill } from "react-icons/bs";

// function Home() {

//   const links = [
//     {
//       id: 1,
//       child: (
//         <>
//           Download CV <span className='dnload-icon'><BsFillPersonLinesFill size={30} /></span>
//         </>
//       ),
//       href: resume,
//       download: true,
//     }
//   ]

//   return (
//     <div name="home">
//       <Box
//         fontFamily="'Noto Sans', sans-serif"
//         justifyContent="space-around"
//         alignItems="center"
//         px="80px"
//         pt="90px"
//         h={{ sm: "auto", md: "auto", lg: "100vh" }}
//         pb={["10px", "10px"]}
//         direction={["column", "flex", "row"]}
//         bgGradient='linear(to-t, black 50%,rgb(17,19,36))'
//       >
//         <Box
//           textAlign={["center", "left", "left"]}
//           lineHeight="40px"
//           color="white"
//         >
//           <Heading>
//             <Text mb={"15px"} fontWeight="normal">Hi There! <span className='wave'>👋🏻</span></Text>
//             <Text mb={"10px"}> <Text fontWeight="normal" display="inline"> I'M</Text> <Heading display="inline" color="#cd5ff8"><span className='span'>PREMKUMAR JADHAV</span></Heading></Text>
//             <Heading fontSize={["34px", "38px", "48px"]}>I'm a Full Stack Web<br />Developer</Heading>
//           </Heading>
//           <Box mt="25px" fontSize={["18px", "25px"]} className="span">
//             <Type />
//             <Box mt={"25px"} pb={["20px", "20px"]} >
//               {links.map(({ child, href, download }) => (
//                 <a
//                   href={href}
//                   className="resume-btn"
//                   download={download}
//                 >
//                   {child}
//                 </a>
//               ))}
//             </Box>
//           </Box>
//         </Box>
//         {/* <Box
//           borderRadius="50%"
//           border="2px solid white"
//         >
//           <Img
//             borderRadius="50%"
//             h={["150px", "300px", "400px"]}
//             src="https://avatars.githubusercontent.com/u/101566195?v=4" alt="avatar" />
//         </Box> */}
//       </Box>

//     </div>
//   )
// }

// export default Home