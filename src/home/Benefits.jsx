import {
  Anchor,
  Container,
  Group,
  Paper,
  Text,
  ThemeIcon,
} from "@mantine/core";
import classes from "./Benefits.module.css";
import { MdAutoAwesome, MdOutlineDoDisturbOff } from "react-icons/md";
import { FiFastForward } from "react-icons/fi";

const data = [
  // {
  //   icon: MdAutoAwesome,
  //   title: "Increase your productivity",
  //   content:
  //     "Maintain deep focus on your study while it does the boring work for you",
  // },
  // {
  //   icon: MdOutlineDoDisturbOff,
  //   title: "Eliminate distractions",
  //   content:
  //     "Maintain deep focus on your study while it does the boring work for you",
  // },
  {
    icon: MdAutoAwesome,
    title: "Eliminate distractions",
    content:
      "Pay attention to what matters most while it does the distracting work for you",
  },
  {
    icon: MdOutlineDoDisturbOff,
    title: "Not bothered to search it up?",
    content:
      "Not any more, all searches ready at your fingertips for high impact effective learning",
  },
  {
    icon: FiFastForward,
    title: "Save your precious study time",
    content:
      "Spend less time on mind numbing tasks, and more time on productive study",
  },
];

// eslint-disable-next-line no-unused-vars
function BenefitHighlight({ icon: Icon, title, content }) {
  return (
    <Paper withBorder>
      <Group className={classes["benefit-highlight"]}>
        <ThemeIcon size={36}>
          <Icon size={20} />
        </ThemeIcon>
        <Group>
          <Text component="h3">{title}</Text>
          <Text component="p">{content}</Text>
        </Group>
      </Group>
    </Paper>
  );
}

export default function Benefits() {
  return (
    <section className={classes.wrapper}>
      <Container className={classes.container}>
        <Text component="h2" fw={500} size="3rem">
          Scientifically{" "}
          <Text component="span" c="grape" inherit>
            proven
          </Text>{" "}
          to boost productivity
        </Text>
        {/* The number of steps required to search for an exam walkthrough has been
        reduced significantly to increase the likelihood of completing a task.
        This is evident in Hick's Law, a well established principle in cognitive
        psychology. */}
        <Text component="p">
          The number of steps required to search for an exam walkthrough has
          been significantly reduced to increase the likelihood of task
          completion.
        </Text>
        <Text component="p">
          This aligns with{" "}
          <Anchor href="https://en.wikipedia.org/wiki/Hick%27s_law">
            Hick's Law
          </Anchor>
          , a well-established principle in cognitive psychology that suggests
          that decision time increases with the number of choices.
        </Text>
        <Group className={classes.highlights}>
          {data.map((data, idx) => (
            <BenefitHighlight key={idx} {...data} />
          ))}
        </Group>
      </Container>
    </section>
  );
}
