
import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-scroll';
import "../App.css"
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [show, setShow] = React.useState(false)
  const links = [
    {
      id: 1,
      link: "home",
      title: "Home"
    },
    {
      id: 2,
      link: "about",
      title: "About"
    },
    {
      id: 3,
      link: "projects",
      title: "Projects"
    },
    {
      id: 4,
      link: "skill",
      title: "Skills"
    },
    {
      id: 5,
      link: "contact",
      title: "Contact"
    },
    {
      id: 6,
      link: "resume",
      title: "Resume"
    },

  ];


  return (
    <div className='hero'>
      <Flex
        position="fixed"
        w="100%"
        h="70px"
        bg="black"
        color="white"
        px="20px"
        justifyContent="space-between"
        alignItems="center"
        zIndex="100"
      >
        <Heading className="name-logo" fontSize={["25px", "35px"]} marginLeft={["12px", "20px"]}>Aniket Portfolio</Heading>
        <Flex
          gap={{ sm: "10px", md: "10px", lg: "30px" }}
          fontSize="16px"
          display={["none", "none", "flex"]}
        >
          {
            links.map((item) => (

             <Text className="hover-underline-animation"><Link to={item.link} spy={true} smooth={true} duration={500}><Text fontSize="22px">{item.title}</Text></Link></Text>

            ))
          }
        </Flex>
        <Button
          onClick={() => setShow(!show)}
          bg="black"
          display={{ sm: 'block', md: "none", lg: "none" }}
        >{show ? <MdClose size="30px" /> : <GiHamburgerMenu size="30px" />}</Button>
      </Flex>
      {show && <Flex
        gap="30px"
        fontSize="16px"
        color="white"
        display={["flex", 'none']}
        flexDirection="column"
        className='NavBg'
        width="100%"
        position="fixed"
        top="70px"
      >

        {
          links.map((item) => (
            <Text fontSize="10px" className="hover-underline-animation"><Link to={item.link} spy={true} smooth={true} duration={500}><Button bg="" fontSize="20px" onClick={() => setShow(false)}>{item.title}</Button></Link></Text>

          ))
        }

      </Flex>}
    </div>
  )
}

export default Navbar