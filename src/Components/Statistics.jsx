import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'


function Statistics() {
  return (
    <div className='stats1'>
      <Box
        py="60px"
      >
        <Box
          display="inline-block"
          textAlign="left"
          borderBottom="4px solid gray">
          <Heading color="white">
            <Text display="inline" > <span className='span'> Statistics</span> </Text>
            of My Work
          </Heading>
        </Box>

        <SimpleGrid className='' pt="50px" m="auto" columns={[2, 3]} gap={["20px", "50px"]} spacing="20px" w={["90%", "70%"]}>
          <Box className="stat">  1200+ Hours of Full Stack Coding</Box>
          <Box className="stat">   210+ Git Commits</Box>
          <Box className="stat"> 20+ Projects Done</Box>
          <Box className="stat"> 100+ Hours of Soft Skills Sessions</Box>
          <Box className="stat"> 240+ DSA Problems</Box>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Statistics
