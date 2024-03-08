import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const CenterWrapper = styled.div`
  display: flex;

  margin-top: 100px;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1454px;
  padding: 33px 100px 70px 100px;
  color: #fff;
  gap: 358.05px;
`;

const LeftHalf = styled.div`
  flex: 0.5;

  padding-left: 100px;
`;

const RightHalf = styled.div`
  flex: 0.5;
  margin-top: 30px;
`;
const FAQText = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #82e8f2;
`;
const HeadingFaqs = styled.p`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  width: 223px;
  margin-top: 0px;
`;
const TextFaqs = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  width: 249px;
  margin-top: 0px;
`;

const Button = styled.button`
  background-color: #fff;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.1px;
  text-align: center;
  border: 1px solid #786dff4d; /* Specify border color and width */
  color: black;
  width: 104.94px;
  height: 38px;
  border-radius: 4px;
`;

const AccordionStyle = {
  background: "none",
  borderBottom: "1px solid #CACACA",
  boxShadow: "none",
};

const AccordionSummaryStyle = {
  paddingLeft: "0px",
  color: "#fff",
  fontFamily: "Montserrat",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "0em",
  textAlign: "left",
};

function Faqs() {
  return (
    <>
      <CenterWrapper>
        <SectionContainer>
          <LeftHalf>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <hr
                style={{
                  width: "24px",
                  height: "2.78px",
                  backgroundColor: "white",
                  border: "none",
                  marginRight: "10px",
                  marginLeft: "0px",
                }}
              />
              <FAQText>FAQS</FAQText>
            </div>

            <HeadingFaqs>
              Quick answers to commonly asked questions.
            </HeadingFaqs>

            <TextFaqs>
              We take pride in providing transparency to our clients and strive
              to maintain clarity in everything we do. If you’re not ready to
              contact us but have a question, you may find answers here.
            </TextFaqs>
            <Button>MORE FAQS</Button>
          </LeftHalf>
          <RightHalf>
            <div style={{ width: "600px" }}>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Why work with Reset Digital?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Where is your team based?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What is your web design process like?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  What will my project cost?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Do you offer website maintenance?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  How can I get an estimate for my project?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What industries or types of clients do you work with?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Can you fix my existing website?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Who will be working on my project?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Do you offer search engine optimization services?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Do you use templates in your web design and development?{" "}
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Do you offer any digital marketing agency services?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What website platforms do you work with?{" "}
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Do you work with WordPress templates?{" "}
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  What eCommerce development platforms do you work with?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  What CRM’s do you work with?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion style={AccordionStyle}>
                <AccordionSummary
                  style={AccordionSummaryStyle}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  How do I apply for a job at your agency?
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </div>
          </RightHalf>
        </SectionContainer>
      </CenterWrapper>
    </>
  );
}

export default Faqs;
