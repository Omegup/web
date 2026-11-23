"use client";

import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import type { Project } from "@/content/projects";

const Page = styled.main`
  width: min(1100px, calc(100% - 32px));
  margin: 48px auto 72px;
  color: #222325;
`;

const Back = styled(Link)`
  font-family: "Quicksand", sans-serif;
  color: #222325;
  text-decoration: none;

  &:hover {
    color: #fc7557;
  }
`;

const Title = styled.h1`
  margin: 20px 0 0;
  font-family: "Krona One", sans-serif;
  font-size: clamp(28px, 4vw, 40px);
`;

const Block = styled.section`
  margin-top: 36px;
`;

const Heading = styled.h2`
  margin: 0 0 16px;
  font-family: "Krona One", sans-serif;
  font-size: 20px;
`;

const Shots = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
`;

const Shot = styled.button`
  padding: 12px;
  border: 1px solid #222325;
  border-radius: 18px;
  background: #fff;
  box-shadow: -6px 6px 0 #fec63a;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 160px;
    object-fit: contain;
  }
`;

const Copy = styled.p`
  margin: 0 0 14px;
  font-family: "Quicksand", sans-serif;
  font-size: 17px;
  line-height: 1.6;
`;

const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Chip = styled.li`
  padding: 8px 16px;
  border-radius: 22px;
  background: #222325;
  color: #f7f5ed;
  font-family: "Quicksand", sans-serif;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(34, 35, 37, 0.72);
`;

const Frame = styled.div`
  position: relative;
  max-width: min(960px, 100%);
  padding: 16px;
  border-radius: 20px;
  background: #f7f5ed;

  img {
    display: block;
    max-width: 100%;
    max-height: 78vh;
    margin: 0 auto;
    object-fit: contain;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 0;
  border-radius: 16px;
  background: #222325;
  color: #f7f5ed;
  font-family: "Quicksand", sans-serif;
  padding: 6px 12px;
  cursor: pointer;
`;

export default function ProjectDetail({ project }: { project: Project }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Page>
      <Back href="/case-studies">All projects</Back>
      <Title>{project.title}</Title>
      <Block>
        <Heading>Screenshots</Heading>
        <Shots>
          {project.shots.map((src) => (
            <Shot key={src} type="button" onClick={() => setOpen(src)}>
              <img src={src} alt="" />
            </Shot>
          ))}
        </Shots>
      </Block>
      <Block>
        <Heading>Description</Heading>
        {project.description.map((paragraph) => (
          <Copy key={paragraph}>{paragraph}</Copy>
        ))}
      </Block>
      <Block>
        <Heading>Technologies</Heading>
        <Chips>
          {project.technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </Chips>
      </Block>
      {open ? (
        <Overlay onClick={() => setOpen(null)}>
          <Frame onClick={(event) => event.stopPropagation()}>
            <Close type="button" onClick={() => setOpen(null)}>
              Close
            </Close>
            <img src={open} alt={project.title} />
          </Frame>
        </Overlay>
      ) : null}
    </Page>
  );
}
