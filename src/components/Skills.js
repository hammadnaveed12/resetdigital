import React from "react";
import styled from "styled-components";
const CenterWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 `

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:940.5px;
  color: #fff;
`;

const LeftHalf = styled.div`
  flex: 0.5;
`;

const RightHalf = styled.div`
  flex: 0.5;
  
`;

const Paragraph = styled.p`
  font-family: Archivo;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 1px;
  text-align: left;
  width:288px;
`;

const Heading = styled.span`
  font-family: Archivo;
  font-size: 50px;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: -1px;
  text-align: left;
`;

const Heading1 = styled.span`
  font-family: Archivo;
  font-size: 50px;
  font-style: italic;
  font-weight: 100;
  line-height: 58px;
  letter-spacing: -1px;
  text-align: left;
  color: #82e8f2;
`;
const Text = styled.p`
  font-family: Archivo;
  font-size: 12px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 8px;
  text-align: left;
  margin-top: 50px;
  color: #fff;
`;

const TextInner = styled.p`
  font-family: Archivo;
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: -1px;
  text-align: right;

`
const TextIn = styled.p`
font-family: Archivo;
font-size: 12px;
font-weight: 300;
line-height: 22px;
letter-spacing: 8px;
text-align: right;
margin-top: 30px;
color: #fff;

`;

function Skills() {
  return (
    <>
    <CenterWrapper>
      <SectionContainer>
        <LeftHalf>
          <Text>GET TO KNOW</Text>
          <Paragraph>
            Our creative process is tailored to fit your vision and maximize
            your potential.
          </Paragraph>
        </LeftHalf>
        <RightHalf>
          <Heading>Visualize </Heading>
          <Heading1> Our Skills</Heading1>
         
        </RightHalf>
      </SectionContainer>

      
      </CenterWrapper>
      <CenterWrapper>
      <SectionContainer>
     
        <LeftHalf style={{transform:"rotate(-20deg)"}}>
            <img src="https://s3-alpha-sig.figma.com/img/ba76/0e6e/dc9d1f5198cbd85076294f31760c10e5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qx~3cl4hYVOZNQFBRwXbqcHiX3KR7yx98Umz7s8wxEx6POSFBSfL3khTqypJMHv6C-BO3ip3Vr7BVBSh7uuBtNsdgVJ8nvZqolq-zPeSjNVhvSMWlg9OU9guwMbS~8LqWeh93mak2YHAWrrdD2ZZ--mUb~c-h7hJWnYlj8EumR4Ro13eTw9pI~lfWbnzrg2RPTP4uVs4tAgj6K1VlnLSC~rKEFyG0egJwM9zeV6cjfhNUI~OVXG2DkDKJPoGwd2u4R-xR~RqMFrWA~73LEAHir8cgZfwDUIjwvjbamjTUOeGcEc4A2dtWgOlPMQ~QRUNP3kRJaSjUjOvlyfy1u5xcw__" alt="Image 1" style={{ width: "120px", height: "355px", marginRight: "20px", objectFit: "cover" }} />
            <img src="https://s3-alpha-sig.figma.com/img/155c/6aa4/7c19fab6e221e8b45dfb2e7022fc75da?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IOocknHjBdMEM-BGyxk0jzmq53o5dcGmqiUslKoT9OHcsShcUh3Bi8Loawtf77KYI4Ynnj01O~abmFuEZMyVNqQ0g2oeI7lIUAsHitYPt8CbN6Z1MgZBUr3nMbbnQ2wOWLnt6ZBEa8LN0VHMzQ2FBUkKV6m5E9VRmCORAgyJH17i07ws3X1E5BMRtVajI8c9KcS8GnSZpeVVU1nhNJtEJKXGYDbsnpge2MpNKBy-PMaUfj-xlQzfJ8JKv9pkujfZYq9EL4QLkdEcVxuDU1UVTDZIozxz5cdw1m8RQY2249BWN6Evv8VVwDZbPVm5BXAGZIQq1PPoC3iAxxRPZfpyng__" alt="Image 2" style={{ width: "120px", height: "355px", marginRight: "20px", objectFit: "cover" }} />
            <img src="https://s3-alpha-sig.figma.com/img/ce4a/46c3/a2cae27f0459a077dbab7af55b79ff16?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nXq-6Ck09pnJAZWRAEmZQAT3nsCjVKDbUX-Ncn5D2niBcrtCHwtN6-o2VkPrdcw4Aczaqpf2XYZljy15GvyZdyI3LOth53kKAez8lfZYw5RjKvXzs3pyhkTSo1QZ9j0CWyFClPr~ye2tnPvOBTVBq0bo7U~wcUIcfdHdEvK9Gw~QJOYmkt8KGdA9hOq7fL1euzERlaMWrXTeNBPsvxFwOUo~tLv9s33xqEA~AaIUI7~lXMt1zleIfUVPwP~uCkOoWSGVtgnGRBOwyHfZnzJfM8yKfPBVvHtTMoL4HuOyVrc~Tb7hUqFCHFlaoJ1O9KY5Q8P~VujoT88XMT4R4qgVqQ__" alt="Image 3" style={{ width: "120px", height: "355px", objectFit: "cover" }} />

        </LeftHalf>

        <RightHalf>
        <TextInner>Innovative</TextInner>
        <hr style={{ width: "438.25px", height: "1px", background: "#82E8F2", marginLeft: 'auto', marginRight: '0px', border: "none" }} />
        <TextIn>DESIGN</TextIn>
        <TextInner>Unique</TextInner>
        <hr style={{ width: "438.25px", height: "1px", background: "#82E8F2", marginLeft: 'auto', marginRight: '0px', border: "none" }} />
        <TextIn>BRANDING</TextIn>
        <TextInner>Tailored</TextInner>
        <hr style={{ width: "438.25px", height: "1px", background: "#82E8F2", marginLeft: 'auto', marginRight: '0px', border: "none" }} />
        <TextIn>SEO OPTIMIZATION</TextIn>
        </RightHalf>

      </SectionContainer>
      </CenterWrapper>
    </>
  );
}

export default Skills;
