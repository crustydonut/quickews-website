import Logo from "../components/Logo";
import {
  ActionIcon,
  Anchor,
  Burger,
  Container,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { headerLinks as links } from "./navigation";
import { FaGithub, FaMoon, FaRegSun } from "react-icons/fa6";
import { useEffect } from "react";

export default function Header() {
  const { toggleColorScheme } = useMantineColorScheme();
  const [opened, { toggle, close }] = useDisclosure(false);

  useEffect(() => {
    window.addEventListener("resize", () => (!opened ? close() : null));
    return () => window.removeEventListener("resize", close);
  });

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Logo />

        <Group
          gap={5}
          className={`${opened ? classes.burger : ""} ${classes.nav} ${
            classes.links
          }`}
        >
          {links.map((link) => (
            <Anchor key={link.label} href={link.link} underline="never">
              {link.label}
            </Anchor>
          ))}
          <ActionIcon
            component="a"
            variant="default"
            target="_blank"
            size="lg"
            radius="md"
            ml="xs"
            bg="#1f2328"
            href="https://github.com/canny0/quickews-chrome-extension"
          >
            <FaGithub size={20} fill="#f0f6fc" />
          </ActionIcon>
          <ActionIcon
            variant="default"
            size="lg"
            radius="md"
            ml="xs"
            onClick={() => toggleColorScheme()}
          >
            <FaMoon size={20} className={classes.dark} />
            <FaRegSun size={20} className={classes.light} />
          </ActionIcon>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
