"use client";

import { useState } from "react";
import styled from "styled-components";
import {
  identityContent,
  type IdentityPanelId,
} from "@/content/identity";

const Title = styled.div`
  width: min(83.75%, 100%);
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1000px) {
    text-align: center;
    padding-inline: 16px;
  }
`;

const Kicker = styled.h3`
  margin-top: 50px;
  color: #fc7557;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Heading = styled.h1`
  margin-top: 15px;
  margin-bottom: 15px;
  color: #222325;
  font-family: "Krona One", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing: -0.064em;

  @media (min-width: 1400px) {
    margin-top: 22px;
    font-size: 30px;
    line-height: 1.3;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 22px;
  }
`;

const Intro = styled.p`
  max-width: 46rem;
  margin-bottom: 30px;
  color: #222325;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  overflow-wrap: anywhere;

  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const ButtonsContainer = styled.div`
  width: min(83.75%, calc(100% - 32px));
  margin-inline: auto;
  height: 466px;
  display: flex;
  border-radius: 22px;
  overflow: hidden;

  @media (min-width: 1400px) {
    height: 560px;
  }

  @media (min-width: 1800px) {
    height: 640px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
  }
`;

const Button = styled.button<{
  $expanded: boolean;
  $image: string;
  $first: boolean;
  $last: boolean;
}>`
  box-sizing: border-box;
  min-width: 0;
  border: 1px solid #e0e0e0;
  padding: 0;
  cursor: pointer;
  position: relative;
  background-image: url("${(props) => props.$image}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: ${(props) => (props.$first ? "22px" : "0")};
  border-bottom-left-radius: ${(props) => (props.$first ? "22px" : "0")};
  border-top-right-radius: ${(props) => (props.$last ? "22px" : "0")};
  border-bottom-right-radius: ${(props) => (props.$last ? "22px" : "0")};
  flex: ${(props) => (props.$expanded ? "1 1 0" : "0 0 72px")};
  overflow: hidden;
  transition: flex-grow 0.5s ease, flex-basis 0.5s ease, height 0.5s ease;

  @media (max-width: 1000px) {
    flex: none;
    width: 100%;
    height: auto;
    padding: 56px 12px;
    max-height: ${(props) => (props.$expanded ? "640px" : "96px")};
    overflow: hidden;
    transition: max-height 0.5s ease;
    border-top-left-radius: ${(props) => (props.$first ? "22px" : "0")};
    border-top-right-radius: ${(props) => (props.$first ? "22px" : "0")};
    border-bottom-left-radius: ${(props) => (props.$last ? "22px" : "0")};
    border-bottom-right-radius: ${(props) => (props.$last ? "22px" : "0")};
  }
`;

const TextContainer = styled.div<{ $expanded: boolean }>`
  position: absolute;
  top: 78px;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  width: 42vw;
  overflow: hidden;
  text-align: center;
  color: #f7f5ed;
  opacity: ${(props) => (props.$expanded ? 1 : 0)};
  transition: opacity 0.45s ease;
  pointer-events: none;

  @media (min-width: 1400px) {
    top: 96px;
    bottom: 40px;
    width: min(48vw, 760px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    position: relative;
    top: auto;
    bottom: auto;
    left: auto;
    transform: none;
    width: 100%;
    display: block;
  }
`;

const TextOverlay = styled.div<{ $index: number }>`
  font-family: "Krona One", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing: -0.064em;
  white-space: nowrap;
  left: ${(props) => (props.$index === 4 || props.$index === 1 ? "-70px" : "-40px")};
  bottom: ${(props) => (props.$index === 4 || props.$index === 1 ? "25%" : "20%")};
  color: #f7f5ed;
  position: absolute;
  transform: rotate(-90deg);

  @media (max-width: 1000px) {
    transform: none;
    bottom: 16px;
    left: 16px;
  }
`;

const NumberOverlay = styled.div`
  left: 3%;
  top: 5%;
  color: #f7f5ed;
  font-family: "Krona One", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing: -0.064em;
  position: absolute;

  @media (max-width: 1000px) {
    left: 16px;
    top: 16px;
  }
`;

const PanelTitle = styled.h2<{ $color: string }>`
  margin: 0;
  color: ${(props) => props.$color};
  font-family: "Krona One", sans-serif;
  font-size: 34px;
  font-weight: 400;
  line-height: 37.4px;
  letter-spacing: -0.064em;

  @media (min-width: 1400px) {
    font-size: 48px;
    line-height: 1.15;
  }

  @media (min-width: 1800px) {
    font-size: 56px;
  }

  @media (max-width: 1000px) {
    font-size: 28px;
    line-height: 30px;
  }
`;

const Subtitle = styled.h3`
  margin: 16px 0 0;
  color: #faf9f6;
  font-family: "Krona One", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing: -0.064em;

  @media (min-width: 1400px) {
    margin-top: 36px;
  }

  @media (min-width: 1800px) {
    margin-top: 44px;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 22px;
  }
`;

const Body = styled.p`
  margin: 28px 0 0;
  color: #f7f5ed;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  overflow-wrap: anywhere;

  @media (min-width: 1400px) {
    margin-top: 56px;
    font-size: 22px;
    line-height: 1.55;
  }

  @media (min-width: 1800px) {
    margin-top: 68px;
    font-size: 24px;
  }
`;

const Objectives = () => {
  const { panels } = identityContent;
  const [activeId, setActiveId] = useState<IdentityPanelId>(panels[0].id);

  return (
    <section id="about">
      <Title>
        <Kicker>{identityContent.kicker}</Kicker>
        <Heading>{identityContent.heading}</Heading>
        <Intro>{identityContent.intro}</Intro>
      </Title>
      <ButtonsContainer>
        {panels.map((panel, index) => {
          const expanded = activeId === panel.id;
          return (
            <Button
              key={panel.id}
              type="button"
              $expanded={expanded}
              $image={panel.image}
              $first={index === 0}
              $last={index === panels.length - 1}
              aria-expanded={expanded}
              onClick={() => setActiveId(panel.id)}
            >
              <NumberOverlay>{String(index + 1).padStart(2, "0")}</NumberOverlay>
              <TextOverlay $index={index + 1}>{panel.objective}</TextOverlay>
              <TextContainer $expanded={expanded}>
                <PanelTitle $color={panel.color}>{panel.title}</PanelTitle>
                <Subtitle>{panel.subtitle}</Subtitle>
                <Body>{panel.body}</Body>
              </TextContainer>
            </Button>
          );
        })}
      </ButtonsContainer>
    </section>
  );
};

export default Objectives;
