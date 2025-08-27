import { Group, Image, Text, ThemeIcon } from "@mantine/core";
import classes from "./Logo.module.css";
import Icon from "../assets/logo/favicon.svg";

export default function Logo() {
  return (
    <Group component="a" align="center" gap={8}>
      <ThemeIcon size="2rem" variant="transparent">
        <Image src={Icon} />
      </ThemeIcon>
      <Text className={classes.logo}>
        QuickEWS
      </Text>
    </Group>
  );
}
