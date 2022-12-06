import React from "react";
import { Box, Flex } from "@chakra-ui/react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Box>
      <Flex justifyContent="space-evenly" pb="15px" pt="15px" color="whiteAlpha.800" bgColor="black" className="footer" direction={["column", "row", "row"]}>
        <Box>
          <h3>Designed and Developed by <span className="span">Aniket Rasal</span></h3>
        </Box>
        <Box >
          <h3><span className="span">{year} </span> All Rights Reserved</h3>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;