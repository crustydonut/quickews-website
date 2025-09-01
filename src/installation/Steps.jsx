import { Anchor, Code, Container, List, ThemeIcon, Title } from "@mantine/core";
import {
  TbCircleDashedNumber1,
  TbCircleDashedNumber2,
  TbCircleDashedNumber3,
  TbCircleDashedNumber4,
  TbCircleDashedNumber5,
} from "react-icons/tb";

export default function Steps() {
  return (
    <Container size="sm">
      <Title order={1} mt="lg" mb="lg" size="3rem">Installation</Title>
      <List
        styles={{
          item: { lineHeight: 1.5 },
          itemWrapper: { alignItems: "flex-start", marginBottom: "var(--mantine-spacing-xs)" },
        }}
        spacing="xs"
        size="lg"
        center
      >
        <List.Item
          icon={
            <ThemeIcon size={24} radius="xl">
              <TbCircleDashedNumber1 />
            </ThemeIcon>
          }
        >
          Download the <Code fz="md">quickews-vX.X.X.zip</Code> file (where X is
          a number), under 'Assets' from the official{" "}
          <Anchor
            inherit
            href="https://github.com/canny0/quickews-chrome-extension/releases/latest"
          >
            extension releases page{" "}
          </Anchor>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon size={24} radius="xl">
              <TbCircleDashedNumber2 />
            </ThemeIcon>
          }
        >
          Unzip the installed zip file and move the unzipped{" "}
          <Code fz="md">quickews-vX.X.X</Code> (not .zip) file to a safe
          location where it would not get deleted accidentally
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon size={24} radius="xl">
              <TbCircleDashedNumber3 />
            </ThemeIcon>
          }
        >
          Now, go to your browser and click the puzzle icon in the top right,
          then 'Manage extensions' from the menu.
          <br />
          Toggle 'Developer mode' in the top right, then click on 'Load
          unpacked' in the top left.
          <br />
          Navigate to where you saved the unzipped{" "}
          <Code fz="md">quickews-vX.X.X</Code> folder, then click 'Select
          Folder'
        </List.Item>
      </List>
    </Container>
  );
}
