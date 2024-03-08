import React from "react";
import styled from "styled-components";

const Outer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '692px',
};
const Inner ={
    width: '1107px',
    height: '500px',
    borderRadius: '30px',
    background: '#1D2025',
    overflow: 'hidden',
    
}

const InnerContent={
    display: 'flex',
    flex: '0.5',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width:"492px",
    height:'500px',
    marginLeft:'100px',
    zIndex: '2',
    background: '#1D2025',
}
const ImageSection={
    flex:'0.5',
    zIndex:'1'

}

const UpperText = styled.p`
    font-family: Archivo;
    font-size: 12px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 8px;
    text-align: center;
    color: #fff;
    

`

const Heading = styled.span`


font-family: Archivo;
font-size: 64px;
font-weight: 500;
line-height: 64px;
letter-spacing: -1px;
text-align: center;
color: #F5F5F5;

`

const Heading1 = styled.span`
font-family: Archivo;
font-size: 64px;
font-style: italic;
font-weight: 100;
line-height: 64px;
letter-spacing: -1px;
text-align: center;
color:#82E8F2;
`

const Text = styled.p`
font-family: Archivo;
font-size: 16px;
font-weight: 300;
line-height: 26px;
letter-spacing: 1px;
text-align: center;
color: #fff;

`

const Button = styled.button`
width: 159.02px;
height: 50px;
background: #82E8F2;
border-radius: 100px;
font-family: Archivo;
font-size: 14px;
font-weight: 300;
line-height: 26px;
letter-spacing: 1px;
text-align: center;
margin-top: 20px;

`
const Content={
    display: 'flex',
    justifyContent:'space-between'
  

}

function GetInTouch() {
    return (
        <div style={Outer}>
            <div style={Inner}>
                <div style={Content}>
                <div style={InnerContent}>
                    <UpperText >
                        GET IN TOUCH
                    </UpperText>
                    <Heading>
                    Let's Start
                    </Heading>

                    <Heading1>
                    Your Project
                    </Heading1>
                <Text>
                    Contact us to create 
                    </Text>
                    <Text style={{marginTop:'-15px'}}>
                    your dream online presence
                    </Text>

                    <Button>
                        GET IN TOUCH
                    </Button>

                </div>
                <div style={ImageSection}>
                    <img src="https://s3-alpha-sig.figma.com/img/155c/6aa4/7c19fab6e221e8b45dfb2e7022fc75da?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IOocknHjBdMEM-BGyxk0jzmq53o5dcGmqiUslKoT9OHcsShcUh3Bi8Loawtf77KYI4Ynnj01O~abmFuEZMyVNqQ0g2oeI7lIUAsHitYPt8CbN6Z1MgZBUr3nMbbnQ2wOWLnt6ZBEa8LN0VHMzQ2FBUkKV6m5E9VRmCORAgyJH17i07ws3X1E5BMRtVajI8c9KcS8GnSZpeVVU1nhNJtEJKXGYDbsnpge2MpNKBy-PMaUfj-xlQzfJ8JKv9pkujfZYq9EL4QLkdEcVxuDU1UVTDZIozxz5cdw1m8RQY2249BWN6Evv8VVwDZbPVm5BXAGZIQq1PPoC3iAxxRPZfpyng__"  
                    style={{height:"240px",width:'540px',transform:'rotate(-20deg)',    position: 'relative',
                    top: '-31.420000000000016px',
                    left: '-31px'}}
                    />
                    <img src="https://s3-alpha-sig.figma.com/img/ba76/0e6e/dc9d1f5198cbd85076294f31760c10e5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qx~3cl4hYVOZNQFBRwXbqcHiX3KR7yx98Umz7s8wxEx6POSFBSfL3khTqypJMHv6C-BO3ip3Vr7BVBSh7uuBtNsdgVJ8nvZqolq-zPeSjNVhvSMWlg9OU9guwMbS~8LqWeh93mak2YHAWrrdD2ZZ--mUb~c-h7hJWnYlj8EumR4Ro13eTw9pI~lfWbnzrg2RPTP4uVs4tAgj6K1VlnLSC~rKEFyG0egJwM9zeV6cjfhNUI~OVXG2DkDKJPoGwd2u4R-xR~RqMFrWA~73LEAHir8cgZfwDUIjwvjbamjTUOeGcEc4A2dtWgOlPMQ~QRUNP3kRJaSjUjOvlyfy1u5xcw__"
                    style={{height:"240px",width:'540px',transform:'rotate(-20deg)',position: 'relative',
                    top: '-161.42000000000002px',
                    left: '41px'}}
                    />
                    <img src="https://s3-alpha-sig.figma.com/img/ce4a/46c3/a2cae27f0459a077dbab7af55b79ff16?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nXq-6Ck09pnJAZWRAEmZQAT3nsCjVKDbUX-Ncn5D2niBcrtCHwtN6-o2VkPrdcw4Aczaqpf2XYZljy15GvyZdyI3LOth53kKAez8lfZYw5RjKvXzs3pyhkTSo1QZ9j0CWyFClPr~ye2tnPvOBTVBq0bo7U~wcUIcfdHdEvK9Gw~QJOYmkt8KGdA9hOq7fL1euzERlaMWrXTeNBPsvxFwOUo~tLv9s33xqEA~AaIUI7~lXMt1zleIfUVPwP~uCkOoWSGVtgnGRBOwyHfZnzJfM8yKfPBVvHtTMoL4HuOyVrc~Tb7hUqFCHFlaoJ1O9KY5Q8P~VujoT88XMT4R4qgVqQ__"
                    style={{height:"240px",width:'540px',transform:'rotate(-20deg)',position: 'relative',
                    top: '-316.42px',
                    left: '108px'}}
                    />
                </div>
                </div>
            </div>
        </div>
    );
}

    export default GetInTouch;