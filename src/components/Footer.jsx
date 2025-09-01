import { ActionIcon, Container, Group, Text } from "@mantine/core";
import classes from "./Footer.module.css";
import Logo from "./Logo";
import { footerLinks as links } from "./navigation";
import { FaEnvelope, FaGithub, FaReddit } from "react-icons/fa6";

export default function Footer() {
  const groups = links.map((group, idx) => {
    const links = group.links.map((link) => (
      <Text
        component="a"
        className={classes.link}
        key={link.label}
        href={link.link}
        size="sm"
        lh={1}
      >
        {link.label}
      </Text>
    ));

    return (
      <Container key={idx} className={classes.links}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </Container>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="md" className={classes.inner}>
        <Group className={classes.nav}>
          <Group gap={2} className={classes.about}>
            <Logo />
            <Text size="xs">Study made better than ever!</Text>
          </Group>

          {/* <Group className={classes.sitemap}></Group> */}
          {groups}
          <Group className={classes.social} gap={4}>
            <ActionIcon
              component="a"
              radius="md"
              size="lg"
              bg="#FF4500"
              variant="default"
            >
              <FaReddit size={20} fill="white" />
            </ActionIcon>
            <ActionIcon
              component="a"
              radius="md"
              size="lg"
              bg="#1f2328"
              variant="default"
              href="https://github.com/canny0/quickews-chrome-extension"
            >
              <FaGithub size={20} fill="#f0f6fc" />
            </ActionIcon>
            {/* <Group className={classes.social} gap={4}>
            <ActionIcon component="a" size="lg" bg="#FF4500" variant="outline">
              <FaReddit size={20} fill="white" />
            </ActionIcon>
            <ActionIcon component="a" size="lg" bg="#1f2328" variant="outline">
              <FaGithub size={20} fill="#f0f6fc" />
            </ActionIcon> */}
            {/* <ActionIcon component="a" size="lg" bg="#4285f4" variant="outline">
              <FaEnvelope size={20} color="white" />
            </ActionIcon> */}
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
