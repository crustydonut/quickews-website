import Demo from "../assets/quickews/quickews-demo-compressed.mp4";
import {
  Box,
  Button,
  Container,
  Group,
  List,
  Text,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { FaCheck } from "react-icons/fa6";
import classes from "./Hero.module.css";

export default function Hero() {
  const theme = useMantineTheme();
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A{" "}
          <Text component="span" variant="text" c={theme.primaryColor} inherit>
            Free
          </Text>{" "}
          Chrome Extension to{" "}
          <Text component="span" variant="text" c={theme.primaryColor} inherit>
            Boost
          </Text>{" "}
          Your Learning
        </h1>

        <Box color="gray" className={classes.video}>
          <video src={Demo} autoPlay muted loop></video>
        </Box>

        {/* <Text className={classes.description} c="gray">
          Build fully functional accessible web applications with ease – Mantine includes more than
          100 customizable components and hooks to cover you in any situation
        </Text> */}

        <List
          pl="md"
          pr="md"
          spacing="md"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <FaCheck size={12} stroke={1.5} />
            </ThemeIcon>
          }
        >
          {/* <List.Item>
            <b>TypeScript based</b> – build type safe applications, all
            components and hooks export types
          </List.Item>
          <List.Item>
            <b>Free and open source</b> – all packages have MIT license, you can
            use Mantine in any project
          </List.Item>
          <List.Item>
            <b>No annoying focus ring</b> – focus ring will appear only when
            user navigates with keyboard
          </List.Item> */}
          <List.Item>
            <b>History you control</b> – save the searches you want to revisit
            safely on your own device; we store no personal data.{" "}
            <a href="/privacy">Read our privacy policy</a>.
          </List.Item>
          <List.Item>
            <b>Instant access</b> – all relevant walkthroughs are available with
            a single click.
          </List.Item>
          <List.Item>
            <b>Made for students, by students</b> – built with real student
            needs in mind, to make learning faster and easier.
          </List.Item>
        </List>

        <Group pr="md" pl="md" mt={30}>
          <Button radius="xl" size="md" className={classes.control}>
            Installation
          </Button>
          <Button
            variant="default"
            radius="xl"
            size="md"
            className={classes.control}
          >
            Learn more
          </Button>
        </Group>

        {/* <Group className={classes.controls}>
          <Button size="xl" className={classes.control} variant="gradient">
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<FaGithub size={20} />}
          >
            GitHub
          </Button>
        </Group> */}
      </Container>
    </div>
  );
}
