import React from "react";
import { Button } from "react-scroll";

const InfoSection = () => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow>
            <Colum1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home">button</Button>
                </BtnWrap>
              </TextWrapper>
            </Colum1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
