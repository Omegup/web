"use client";

import styled from "styled-components";
import { servicesContent } from "@/content/services";

const Section = styled.section`
  width: min(83.75%, calc(100% - 32px));
  margin: 70px auto 0;
`;

const Heading = styled.h3`
  margin: 0;
  color: #222325;
  font-family: "Krona One", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing: -0.064em;
`;

const Intro = styled.p`
  max-width: 46rem;
  margin: 12px 0 0;
  color: #222325;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 36px 28px;
  margin-top: 48px;
  padding-bottom: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Wrap = styled.div`
  min-width: 0;
  border-radius: 30px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:nth-child(1) {
    transform: rotate(-1.6deg);
    box-shadow: -8px 8px 0 0 #949cff;
  }

  &:nth-child(2) {
    transform: rotate(1.3deg) translateY(22px);
    box-shadow: -8px 8px 0 0 #fc7557;
  }

  &:nth-child(3) {
    transform: rotate(-0.8deg);
    box-shadow: -8px 8px 0 0 #fec63a;
  }

  &:hover {
    transform: rotate(0deg) translateY(-10px);
    box-shadow: -4px 4px 0 0 #222325;
  }

  @media (max-width: 720px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      transform: none;
    }

    &:hover {
      transform: translateY(-6px);
    }
  }
`;

const Card = styled.article`
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  background: #faf9f6;
  border: 1px solid #222325;
  border-radius: 30px;
`;

const Cap = styled.div<{ $color: string }>`
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 14px;
  min-height: 148px;
  padding: 56px 22px 18px;
  overflow: hidden;
  background: ${(props) => props.$color};
`;

const Index = styled.span`
  position: absolute;
  top: 6px;
  right: 12px;
  color: #222325;
  font-family: "Krona One", sans-serif;
  font-size: 64px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.06em;
  opacity: 0.22;
  user-select: none;
  pointer-events: none;
`;

const Icon = styled.div`
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #f7f5ed;
  box-shadow: -4px 4px 0 0 #222325;

  img {
    width: 36px;
    height: 36px;
    object-fit: contain;
  }
`;

const Title = styled.h3`
  position: relative;
  margin: 0 0 6px;
  color: #222325;
  font-family: "Krona One", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.064em;
`;

const List = styled.ul`
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 22px 22px 26px;
  list-style: none;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 10px 1fr;
  gap: 10px;
  color: #222325;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const Pip = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  margin-top: 7px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  box-shadow: -2px 2px 0 0 #222325;
`;

const Label = styled.span`
  font-weight: 700;
`;

const Services = () => {
  return (
    <Section id="services">
      <Heading>{servicesContent.heading}</Heading>
      <Intro>{servicesContent.intro}</Intro>
      <Grid>
        {servicesContent.items.map((service, index) => (
          <Wrap key={service.id}>
            <Card>
              <Cap $color={service.color}>
                <Index aria-hidden="true">{String(index + 1).padStart(2, "0")}</Index>
                <Icon>
                  <img src={service.icon} alt="" />
                </Icon>
                <Title>{service.title}</Title>
              </Cap>
              <List>
                {service.points.map((point) => (
                  <Item key={point.label}>
                    <Pip $color={service.color} />
                    <span>
                      <Label>{point.label}. </Label>
                      {point.body}
                    </span>
                  </Item>
                ))}
              </List>
            </Card>
          </Wrap>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
