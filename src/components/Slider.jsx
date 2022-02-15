import { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const Direction = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && 10}px;
  right: ${(props) => props.direction === "right" && 10}px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #dfdada;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  z-index: 2;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  height: 100%;
  width: 100vw;
  background-color: #${(props) => props.bgColor};
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
`;

const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.span`
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 3px;
  margin: 50px 0px;
`;
const Button = styled.button`
  background-color: transparent;
  padding: 12px 20px;
  font-size: 20px;
  width: 150px;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      const index = slideIndex > 0 ? slideIndex - 1 : 2;
      setSlideIndex(index);
    } else {
      const index = slideIndex < 2 ? slideIndex + 1 : 0;
      setSlideIndex(index);
    }
  };

  return (
    <Container>
      <Direction direction="left" onClick={() => handleArrowClick("left")}>
        <ArrowLeftOutlined style={{ fontSize: "40px" }} />
      </Direction>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide bgColor={item.bg} key={item.id}>
              <ImageWrapper>
                <Image src={item.img} />
              </ImageWrapper>
              <InfoWrapper>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>Shop Now</Button>
              </InfoWrapper>
            </Slide>
          );
        })}
      </Wrapper>
      <Direction direction="right" onClick={() => handleArrowClick("right")}>
        <ArrowRightOutlined style={{ fontSize: "40px" }} />
      </Direction>
    </Container>
  );
};

export default Slider;
