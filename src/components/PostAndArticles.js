import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;
const Text = styled.div`
  font-family: Archivo;
  font-size: 12px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 8px;
  text-align: center;

  color: #fff;
`;
const Heading1 = styled.span`
  font-family: Archivo;
  font-size: 50px;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: -1px;

  color: #fff;
`;
const Heading2 = styled.span`
  font-family: Archivo;
  font-size: 50px;
  font-style: italic;
  font-weight: 100;
  line-height: 58px;
  letter-spacing: -1px;

  color: black;
`;
const SectionHeading = styled.div``;

const SimpleText = styled.p`
  font-family: Archivo;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 1px;
  text-align: center;
`;

const Section = styled.div`
  width: 1232px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftHalf = styled.div`
  flex: 0.5;
  width: 600px;
`;

const RightHalf = styled.div`
  flex: 0.5;
  width: 600px;
`;

const Name = styled.p`
  font-family: Archivo;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 1px;
  text-align: left;
  color: #82e8f2;
  margin-right: 4px;
`;

const Date = styled.p`
  font-family: Archivo;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 1px;
  text-align: left;
  color: #d0d0d0;
`;

const PostHeading = styled.p`
font-family: Archivo;
font-size: 32px;
font-weight: 500;
line-height: 42px;
letter-spacing: -1px;
text-align: left;
color:#F5F5F5;
`

const PostText = styled.p`
font-family: Archivo;
font-size: 16px;
font-weight: 300;
line-height: 26px;
letter-spacing: 1px;
text-align: left;
color:#D0D0D0;
margin-top:-18px;
`

const PostAndArticles = () => {
  return (
    <div>
      <SectionContainer>
        <Text>OUR BLOG</Text>
        <SectionHeading>
          <Heading1>POSTS </Heading1>
          <Heading2>& ARTICLES </Heading2>
        </SectionHeading>

        <SimpleText>Web design Post</SimpleText>
      </SectionContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Section>
          <LeftHalf>
            <img
              src="https://s3-alpha-sig.figma.com/img/fb11/5b7f/8b4ddef52aa1bf251e2ea9b4d0e59954?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lSmx1TrAh-0lKlaZaupdzovGuMMSa3Zo6uh4oathzRS64Cv2aMukUYNsEl7rSPpmHMCVUaILQiuv~uqQOUKQ9eu7I49luZUSKnzi3onpZiFkd37v6UcjTuSikohUVqXRcVMcK5PLcjSLWea37Khsh-I5yQFDUWvbgayFrVB0Ig-1Zb-~Yg7NjfsXbr0hkwWpJ~glXRtmuZnFGdvFaYNCHBhrYsTYjwPh~jZ3NGfXawQEXUNmuuCSHT~sgz15Ymn7arKvyef-T2Q~AosHjsPRNtJWzvYrhLCFUzALtBhG8mb05si7sStpqANI27Diprk1Lt6h9sIXROkr5W09pKL~Dg__"
              style={{ width: "600px", height: "400px", borderRadius: "30px" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "600px",
              }}
            >
              <div
                style={{
                  width: "81px",
                  height: "44px",
                  background: "#292D32",
                  border: " 1px solid #82E8F2",
                  marginTop: "12px",
                  display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
              >
                <p style={{ textAlign: "center", color: "#fff" }}>DESIGN</p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/00a9/2b8c/1f7385cdf6e0643c42b61c8213002bf7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GD-p0qDCdRdkEPhOasalsHAUIN6bhk9G-j7X7fpqgiGMI6HTCZAemMpzUIcBDIsb1-Zvv4l9NfcifAw~tBlXP4ET4M-z-NN8WmT4CGQ1MIhwA6pQxbBMSJw7lt-RaMK~3LItnRR7PJDBvjF1980k8TEA8Pb0j5zP8ppjaBUc9p7cRn0UAnQxkerxfcd5EAarR37L4MRm~T53eKia0UJAIeTJUQHREhZtqr3JeRsjoMhNcfT-lorTartQ1fc32robSIwbpLYHkdLv-Etp2jg4EBmR5jX5ZhZi7TM36el0JTzZj7rYGytDvCaVDU2v2~N4imIQmoHqcTiNyTVgFGBcVg__"
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "8px",
                    marginRight: "8px",
                  }}
                />
                <Name>John Doe </Name>
                <Date> | Oct 28</Date>
              </div>
            </div>
            <PostHeading>
            WORLD THROUGH CREATIVITY
            </PostHeading>

                  <PostText>
                  Design is the force behind the transformation of ideas.
                  </PostText>

          </LeftHalf>
          <RightHalf>
            <img
              src="https://s3-alpha-sig.figma.com/img/3255/d5fe/bf82dd0807c35c4d8397e22f286f9f1b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d0H6-F3Zk48Pd9K8AKaZANs-T-ZeRzh2zzcVXDT5ZM2FcsSgQ-dvC85w8Ni68~f4SvZL7g~7CuT0hqpQ1uS~WiniDHpjaC5TTdP6LDd6JPF3tseBF42II2GuT9V0BvxI2K25othOYO6Yk6PlE0sDckvNsmAZNStROYqnAy9zEp2h2OVjWT3vo9HJg9twsjwvKdbCjvdIQ5g1EcCW2AK0ZfjZhcwswSN8IS3qJ-DIrO5RiINtyvBtwMIKUiursGEOOUaxbStxyXbhmErr6kERRqMa5uSuUZf-9z88vhwcOcmEzyTnOf2hLF6fOJhcm-J7~fcGLC407OvlWiqiEVlVxQ__"
              style={{ width: "600px", height: "400px", borderRadius: "30px" }}
            />
             <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "600px",
              }}
            >
              <div
                style={{
                  width: "81px",
                  height: "44px",
                  background: "#292D32",
                  border: " 1px solid #82E8F2",
                  marginTop: "12px",
                  display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
              >
                <p style={{ textAlign: "center", color: "#fff" }}>DESIGN</p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                src="https://s3-alpha-sig.figma.com/img/2c3f/7923/0534ecef0c232410b1047464d514c34e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MBg9TWvXPZXfDjrW6ZoZiavM1Bxs-rooaFd-OWQqK5mcuLgOZynW0L8LDwJCRNUlY-xCpr6-cJGgf6XbSx9hXv20Lt6qqFaRYrZ3I6QzQuHyLnRN1g3a39sDXB-QGIZpKqQorFhhjb2RQ1F3AdOhvzG-p80pWJvt-81HCwwHBmWgoyD4PR9dOn-R~c9s9IkeochRf8so7PxhIme8SIFRhtA~nmNRkck5MvO7SIJ-aGMm6E~AwSknkgv9nKLbaDc6hqKVQm9eNlp6Ln9Mm~JNSuVXH6JyvrZiBQ06Ee5W28rlq-HwnEu-T5UMYaMRYoFYdHJxUDt5j1Q8vKZhVbaBGg__"
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "8px",
                    marginRight: "8px",
                  }}
                />
                <Name>Jane Smith </Name>
                <Date> | Oct 28</Date>
              </div>
            </div>
            <PostHeading>
            WFROM PENCIL TO PIXEL
            </PostHeading>

                  <PostText>
                  Captivating narrative that reflects the ever-changing landscape of creativity.                  </PostText>
          </RightHalf>
        </Section>
      </div>
    </div>
  );
};

export default PostAndArticles;
