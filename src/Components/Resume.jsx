import React, { useState, useEffect } from "react";
import { Box, Flex, Link, Text, Heading, Container, Button } from "@chakra-ui/react"
import pdf from "../../src/assets/Aniket-Rasal-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../../src/assets/Aniket-Rasal-Resume.jpg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
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


  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div name="resume" className="resume1">
      <Box className="resume-section" style={{ justifyContent: "center",margin:"auto", width:"70%"}}>
      <Box
          display="inline-flex"
          mt="100px"
          borderBottom="4px solid gray">
          <Heading><span className="span">Resume</span></Heading>
        </Box>

        <Box className="resume" margin="auto" w="90%">
          <img
                src={resume}
                alt="resume"
              />
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
      </Box>
    </div>
  );
}

export default ResumeNew;
