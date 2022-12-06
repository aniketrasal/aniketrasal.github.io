import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";
import Statistics from "./Statistics";
import GitHubCalendar from "react-github-calendar";

function Github() {
    return (

        <Box
        name="github"
        className="github1"
            pb='15px'
            pt="100px"
            h={["auto"]}
            color="white"
            textAlign="left"
            fontFamily="'Noto Sans', sans-serif"

        >
            
                <Flex  justifyContent="space-around" py='15px'>
                    <Box borderBottom="4px solid gray" w='250px'>
                    <Heading  >Days I <span className="span">Code </span></Heading>
                    </Box>
                </Flex>
           
            <Flex justifyContent='center' w="80%" m="auto" >
                <Box m="auto" w="90%" py="40px">
                    <GitHubCalendar
                        username="aniketrasal"
                        blockSize={15}
                        blockMargin={5}
                        color="#ffda00"
                        fontSize={16}
                    />
                </Box>
            </Flex>
            <Flex justifyContent="center" w="80%" m="auto" g="100px">

            <Box m='auto' w={["80%",'40%']} pb={["10px","20px"]}>     
                    <Img
                        align="center"
                        src="https://github-readme-streak-stats.herokuapp.com/?user=aniketrasal&theme=dark"
                        alt="streak"
                        w="450px"
                        />
                    
            </Box>

                <Box m='auto' w={["80%",'40%']} pb={["10px","20px"]}>
                    <Img

                        align="center"
                        src="https://github-readme-stats.vercel.app/api?username=aniketrasal&count_private=true&show_icons=true&theme=dark"
                        alt="stats"
                         w='450px'

                    />
                </Box>
                </Flex>
            {/* <Statistics/> */}

        </Box>

    );
}
export default Github;