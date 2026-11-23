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
  gap: 28px;
  margin-top: 32px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article<{ $color: string }>`
  box-sizing: border-box;
  min-width: 0;
  background: #faf9f6;
  border: 1px solid #222325;
  border-radius: 30px;
  padding: 28px 24px 32px;
  box-shadow: -8px 8px 0 0 ${(props) => props.$color};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: -4px 4px 0 0 #222325;
  }
`;

const Icon = styled.div<{ $color: string }>`
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  margin-bottom: 20px;
  border-radius: 50%;
  background: ${(props) => props.$color}33;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: #222325;
  font-family: "Krona One", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.064em;
`;

const List = styled.ul`
  display: grid;
  gap: 16px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  color: #222325;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const Label = styled.span`
  display: block;
  margin-bottom: 2px;
  font-family: "Krona One", sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.04em;
`;

const Services = () => {
  return (
    <Section id="services">
      <Heading>{servicesContent.heading}</Heading>
      <Intro>{servicesContent.intro}</Intro>
      <Grid>
        {servicesContent.items.map((service) => (
          <Card key={service.id} $color={service.color}>
            <Icon $color={service.color}>
              <img src={service.icon} alt="" />
            </Icon>
            <Title>{service.title}</Title>
            <List>
              {service.points.map((point) => (
                <Item key={point.label}>
                  <Label>{point.label}</Label>
                  {point.body}
                </Item>
              ))}
            </List>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
