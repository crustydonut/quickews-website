import { FaPlus } from "react-icons/fa6";
import {
  Accordion,
  Container,
  ThemeIcon,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./Faq.module.css";

const data = [
  {
    control: "Is the extension free?",
    panel:
      "Yes! QuickEWS is completely free to use, distribute, and modify for non-commercial purposes under the CC BY-NC-SA 4.0 license.",
  },
  {
    control: "Will it slow down my computer?",
    panel:
      "No. QuickEWS was designed to be lightweight and efficient, so it works smoothly even on older computers.",
  },
  {
    control: "Is the extension safe?",
    panel:
      "Yes. All the code is publicly available on GitHub (link in the header). You can review it yourself or even ask ChatGPT to explain what it does.",
  },
  {
    control: "Does it work in other browsers?",
    panel:
      "Yes, QuickEWS works on most browsers except Firefox and its derivatives.",
  },
  {
    control: "Why is the extension not working?",
    panel:
      "QuickEWS works on websites that follow a specific PDF naming format. If it doesn’t work on a website, you can submit a feature request via the feedback form in the footer.",
  },
  {
    control: "How do I submit a feature request or bug report?",
    panel:
      "Use the feedback form in the footer to submit requests or report bugs. You can also leave a rating to support us if you’d like!",
  },
  {
    control: "What do you gain from making it free?",
    panel:
      "Creating QuickEWS is a great learning opportunity for me, and I can showcase it on my resume or college applications. It’s also rewarding to see your hard work pay off!",
  },
];

export default function Faq() {
  const colorScheme = useComputedColorScheme(undefined, {
    getInitialValueInEffect: true,
  });
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title
          order={1}
          c={colorScheme === "light" ? "dark.7" : "gray.1"}
          size="3rem"
          mb="xl"
          fw={500}
          ta="center"
        >
          Frequently Asked Questions
        </Title>
        <Accordion
          classNames={{ content: classes.content, item: classes.item }}
          order={3}
          variant="separated"
          chevron={
            <ThemeIcon c="grape" variant="transparent">
              <FaPlus size={18} />
            </ThemeIcon>
          }
        >
          {data.map((obj, i) => (
            <Accordion.Item
              bdrs="md"
              bd={`2px solid ${colorScheme === "light" ? "gray.3" : "dark.4"}`}
              key={i}
              value={obj.control}
            >
              <Accordion.Control>{obj.control}</Accordion.Control>
              <Accordion.Panel>{obj.panel}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
