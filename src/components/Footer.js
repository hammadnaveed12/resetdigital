import React from "react";
import styled from "styled-components";

const Outer = {
  display: "flex",
  justifyContent: "space-between",

  flexDirection: "row",
  width: "1117px",
  height: "475px",
  
  marginTop: "100px",
};
const Left = {
  marginTop: "50px",
  flex: "0.5",
  display: "flex",
  flexDirection: "column",
};
const Right = {
  flex: "0.5",
  display: "flex",
  justifyContet: "space-between",
  flexDirection: "row",
  
};
const WebsiteName = styled.span`
  font-family: Archivo;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 1px;
  text-align: left;
  color: #fff;
  margin-bottom: 20px;
`;
const Moto = styled.span`
  font-family: Archivo;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 1px;
  text-align: left;
  color: #111111;
`;

const iconDiv = {
  width: "160px",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
};
const icon = {
  width: "16px",
  height: "16px",
};
const Menu = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "30px",
  width:'215px'
};

const Heading = styled.span`
  font-family: Archivo;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const Link = styled.p`
  font-family: Archivo;
  font-size: 15px;
  font-weight: 300;
  line-height: 23px;
  letter-spacing: 1px;
  text-align: left;
  padding: 0;
`;

const FooterText = styled.p`
font-family: Archivo;
font-size: 15px;
font-weight: 300;
line-height: 26px;
letter-spacing: 1px;
text-align: left;
color: #fff;

`
function Footer() {
  return (
    <div style={{display:'flex',flexDirection:'column',paddingLeft: "150px",}}>
      <div style={Outer}>
        <div style={Left}>
          <WebsiteName>RESET DIGITAL</WebsiteName>
          <Moto>Where Creativity Meets Innovation.</Moto>

          <div style={iconDiv}>
            <img
              src="https://s3-alpha-sig.figma.com/img/0475/eeae/cfeae9e8cf14af28202b77a5a872a051?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qrk9SqF3aPH3~OT3DNJzLv-glz6yuIADSj56FtdQyQ~mJiwK9eWtHy~HJej~tTYLjW3RT~xaVhA-yaWVrV79NlhJoyy~UxHpuJ6n58t~f8s4JoG-jgakiPftbt0xyo9a1dsQEQc-ApOq88r687qNxSUHOYT-pPV0WrCesw0uYbgQph2s78znWESPDED2UzsrbtJrYha88xhLCAWKZisRCIJZpLiGhpheU~nN7wZNtzJuJA-Z1bLDngFiBbAlHSglqFACtgFPuyEqBHe2r6Mgp08TuWu2wN7OYyScH0Q~99PIn0TcRPk5hmQOATkOMvLrjNZLdHHYOYLdUHowN9Atkw__"
              style={icon}
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/d2b1/c80e/e6ab1d9e70ec56672e42d37024ce4b78?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mx6U6TPf7tb~83hUaCbyrmwn0BZuoj-J92f2yB9TShP8H77-Asl7lqY1yBUqILCE~Br~8255lyatIaW~4nqp-LV9Ne9Q34qIYt1oMnz7VMfCKVv04nuWMtmGpNTArM8tq8dgJomVivfcubUrfAingzMOUQrqQAOpApEeauUJb82YE821CRUJ~~QkbdTgjNG5lfjARivphQMqB8Jqa1N41TJirCt0QzU5Ma1YEf1K02sNmOvz3ZYmbKwZ7F5TCNZpArXkB9DfuTU~Dl-EAJqrsa7pFIcbUYxXtLOBhJUAZ8gLrQVMo-UZvgBDHw3jaAVR9Po89DCSNXW59a3vtNV8yg__"
              style={icon}
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/738e/2f6a/c8eb468fcf18a33cc9373e635a23b82b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hRSbXVeWBsHYuvIPlLZwviRvMnSKko5JdQOVaR4VCIvJVyyoZLlIcuR17dkoLE1Oa8-PbaxTCry6vhHavZa7CVUUD2m5f45XtCVuJsOW47qpxYtEl7lrBAUSAVH6RvEvnRmG0g5VuRI~8BdaJbOwHvy7MmtbnZyvvdgASQ8kEjnDCDFuVH9hjHYgC29MCJSqh9Bovhl7dgW07ksly3ADlLmZ5Gla~v3Dj3Ep5PhfIiPKpjgdt59etDXr5C3uUczvPa4hGtuur~WU3Q2mG5GhyDF1Mn09kwmeD-ClqJQOBWE8d6pGlZS7REuH1qaO1c~6Fh5hHoQcEjg5XzxsH~2IAQ__"
              style={icon}
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/203d/aa87/2f0d6ba095eabed66dd98ee2e99042dc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOev6E-5-J~jwLQ1tTolxRx34f1OjBbnYe-02Kgv5qzUgDT1~iljkx25aJs9i5O95DnnY~PfuBSRSI9IBKmkU36ba-Oc4Qifzs-pbjb~YrVkzCcm4vv5A8NYak7bRTFMWWO2rZMJwspAajvnusUJPHtjbBtda3jzJKFcwCWXfPS0r-4pefijv13-PtLwk3uxywe1cZX7f5OvVT3f5M7z4Y~oakj1HUdB4~ScCL6BqQoBnaLMesDuB0-DBLwOs5tkrbY05QXEjdH9yWiDZaZPfN5RgXu-3zoSUVBLJpzbKOkUgk0eA8xa5k9GIACkFBRmX7yuzuR~1MwQ8ybOWH~y8g__"
              style={icon}
            />
          </div>
        </div>

        <div style={Right}>
          <div style={Menu}>
            <Heading>Main</Heading>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Project</Link>
            <Link>Single</Link>
            <Link>Contact</Link>
          </div>
          <div style={Menu}>
            <Heading>Other Pages</Heading>
            <Link>Packages </Link>
            <Link>Packages Single</Link>
            <Link>Blog</Link>
            <Link>Blog Single</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
          </div>
          <div style={Menu}>
            <Heading>Utilities</Heading>
            <Link>Style Guide</Link>
            <Link>Licenses</Link>
            <Link>Changelog</Link>
            <Link>Instructions</Link>
            <Link>404</Link>
            <Link>Password</Link>
          </div>
        </div>
        
      </div>
      <FooterText>
        © 2024 Reset Digital. All Rights Reserved.
        </FooterText>
    </div>
  );
}

export default Footer;
