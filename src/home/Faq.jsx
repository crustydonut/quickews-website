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
    control: "Is QuickEWS free?",
    panel: "hello world",
  },
  {
    control: "will it slow down my computer?",
    panel: "hello world",
  },
  {
    control: "Is the QuickEWS extension safe?",
    panel: "hello world",
  },
  {
    control: "does it work in other browsers",
    panel: "hello world",
  },
  {
    control:
      "does it work on all pastpaper site / why is the extension not working?",
    panel: "hello world",
  },
  {
    control: "howt to give feeback or request a feature?",
    panel: "hello world",
  },
  {
    control: "what does the creator gain from making it free",
    panel: "hello world",
  },
];

export default function Faq() {
  const colorScheme = useComputedColorScheme(undefined, {
    getInitialValueInEffect: true,
  });
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title order={1} c={colorScheme === "light" ? "dark.7" : "gray.1"} size="3rem" mb="xl" fw={500} ta="center">Frequently Asked Questions</Title>
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

// {
//   return (
//     <div className={classes.wrapper}>
//       <Container size="sm">
//         <Title ta="center" className={classes.title}>
//           Frequently Asked Questions
//         </Title>

//         <Accordion
//           // chevronPosition="right"
//           // defaultValue="reset-password"
//           variant="separated"
//           styles={{
//             label: { color: "var(--mantine-color-black)" },
//             item: { border: 0 },
//           }}
//           chevron={
//             <ThemeIcon variant="default" radius="xl">
//               <FaPlus size={18} stroke={1.5} />
//             </ThemeIcon>
//           }
//           classNames={{ chevron: classes.chevron }}
//         >
//           <Accordion.Item className={classes.item} value="reset-password">
//             <Accordion.Control>How can I reset my password?</Accordion.Control>
//             <Accordion.Panel>{placeholder}</Accordion.Panel>
//           </Accordion.Item>

//           <Accordion.Item className={classes.item} value="another-account">
//             <Accordion.Control>
//               Can I create more that one account?
//             </Accordion.Control>
//             <Accordion.Panel>{placeholder}</Accordion.Panel>
//           </Accordion.Item>

//           <Accordion.Item className={classes.item} value="newsletter">
//             <Accordion.Control>
//               How can I subscribe to monthly newsletter?
//             </Accordion.Control>
//             <Accordion.Panel>{placeholder}</Accordion.Panel>
//           </Accordion.Item>

//           <Accordion.Item className={classes.item} value="credit-card">
//             <Accordion.Control>
//               Do you store credit card information securely?
//             </Accordion.Control>
//             <Accordion.Panel>{placeholder}</Accordion.Panel>
//           </Accordion.Item>

//           <Accordion.Item className={classes.item} value="payment">
//             <Accordion.Control>
//               What payment systems to you work with?
//             </Accordion.Control>
//             <Accordion.Panel>{placeholder}</Accordion.Panel>
//           </Accordion.Item>
//         </Accordion>
//       </Container>
//     </div>
//   );
// }
