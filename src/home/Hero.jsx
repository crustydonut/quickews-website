import Demo from "../assets/quickews/quickews-demo-compressed.mp4";
import {
  Anchor,
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
        <Anchor
          c="gray"
          ta="center"
          w="100%"
          display="block"
          size="xs"
          mb="md"
          href="https://www.flaticon.com/free-icons/cursor"
          title="cursor icons"
        >
          Cursor icons created by Freepik - Flaticon
        </Anchor>

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
          <List.Item>
            <b>Instant access</b> – all relevant walkthroughs are available with
            a single click.
          </List.Item>
          <List.Item>
            <b>Made for students, by students</b> – built with real student
            needs in mind, to make learning faster and easier.
          </List.Item>
          <List.Item>
            <b>History you control</b> – save the searches you want to revisit
            safely on your own device; we store no personal data.{" "}
            <a href="/privacy-policy/">Read our privacy policy</a>.
          </List.Item>
        </List>

        <Group pr="md" pl="md" mt={30}>
          <Button
            component="a"
            href="/features/"
            radius="xl"
            size="md"
            className={classes.control}
          >
            Discover
          </Button>
          <Button
            component="a"
            href="/installation/"
            variant="default"
            radius="xl"
            size="md"
            className={classes.control}
          >
            Installation
          </Button>
        </Group>
      </Container>
    </div>
  );
}
