"use client";

import Link from "next/link";
import styled from "styled-components";
import { useEffect, useState } from "react";

const links = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/#about", id: "about", label: "About Us", short: "About" },
  { href: "/#services", id: "services", label: "Services" },
  { href: "/#references", id: "references", label: "References", short: "Work" },
] as const;

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding: 8px 28px;
  box-sizing: border-box;
  background: #f7f5ed;

  @media (max-width: 768px) {
    grid-template-columns: 1fr auto;
    min-height: 60px;
    padding: 8px 16px;
  }
`;

const Title = styled.h1`
  justify-self: start;
  margin: 0;
  font-family: "Krona One", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.064em;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Logo = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: ${(props) => (props.$active ? 700 : 500)};
  text-decoration: none;
  text-align: center;
  color: ${(props) => (props.$active ? "#fc7557" : "#222325")};
  border-radius: 20px;
  padding: 10px 14px;
  transition: color 0.25s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.06);
  }
`;

const Touch = styled(Link)`
  justify-self: end;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  white-space: nowrap;
  border: 0.5px solid #222325;
  border-radius: 30px;
  padding: 6px 14px;
  cursor: pointer;
  background-color: #f7f5ed;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: -4px 4px 0 #222325;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
  }
`;

const DockFade = styled.div`
  display: none;
  pointer-events: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    z-index: 49;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(78px + env(safe-area-inset-bottom));
    background: linear-gradient(to top, #ffffff, 40%, #ffffff, 50%, transparent, 60%, transparent);
  }
`;

const Dock = styled.nav`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 50;
    left: 12px;
    right: 12px;
    bottom: calc(12px + env(safe-area-inset-bottom));
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 6px;
    box-sizing: border-box;
    background: #f7f5ed;
    border: 1px solid #222325;
    border-radius: 22px;
    box-shadow: -6px 6px 0 #222325;
  }
`;

const Pill = styled.span<{ $index: number }>`
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  width: calc((100% - 12px) / 4);
  border-radius: 16px;
  background: #222325;
  transform: translateX(${(props) => props.$index * 100}%);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const DockLink = styled(Link)<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  min-height: 44px;
  padding: 8px 2px;
  border-radius: 16px;
  font-family: "Quicksand", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  color: ${(props) => (props.$active ? "#f7f5ed" : "#222325")};
  transition: color 0.25s ease;
`;

function NavBar() {
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const ids = links.map((link) => link.id);

    const update = () => {
      const line = 88;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - line <= 0) current = id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const activeIndex = links.findIndex((link) => link.id === active);
  const pillIndex = hovered ?? activeIndex;

  return (
    <>
      <Bar>
        <Title>
          <Logo href="/">Omegup</Logo>
        </Title>
        <Links aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.id} href={link.href} $active={active === link.id}>
              {link.label}
            </NavLink>
          ))}
        </Links>
        <Touch href="/#contact">Get in Touch</Touch>
      </Bar>
      <DockFade aria-hidden="true" />
      <Dock
        aria-label="Primary"
        onMouseOver={(event) => {
          const item = (event.target as HTMLElement).closest("a");
          if (!item || !event.currentTarget.contains(item)) return;
          const index = [...event.currentTarget.querySelectorAll("a")].indexOf(item);
          if (index < 0) return;
          setHovered((prev) => (prev === index ? prev : index));
        }}
        onFocus={(event) => {
          const item = (event.target as HTMLElement).closest("a");
          if (!item || !event.currentTarget.contains(item)) return;
          const index = [...event.currentTarget.querySelectorAll("a")].indexOf(item);
          if (index < 0) return;
          setHovered(index);
        }}
        onMouseLeave={() => setHovered(null)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setHovered(null);
          }
        }}
      >
        {pillIndex >= 0 ? <Pill $index={pillIndex} /> : null}
        {links.map((link, index) => (
          <DockLink
            key={link.id}
            href={link.href}
            $active={index === pillIndex}
            aria-current={active === link.id ? "true" : undefined}
            aria-label={link.label}
          >
            {"short" in link ? link.short : link.label}
          </DockLink>
        ))}
      </Dock>
    </>
  );
}

export default NavBar;
