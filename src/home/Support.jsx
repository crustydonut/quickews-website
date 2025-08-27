import Cambridge from "../assets/exam-board-logos/cambridge2.png";
import OxfordAqa from "../assets/exam-board-logos/oxfordaqa.svg";
import Edexcel from "../assets/exam-board-logos/edexcel3.png";
import SaveMyExams from "../assets/website-logos/sme.svg";
import PastpapersCo from "../assets/website-logos/pastpapers.co.png";
import PapaCambridge from "../assets/website-logos/papacambridge.color.edit.png";

import { Text, Container, Paper, Group, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Marquee from "react-fast-marquee";
import classes from "./Support.module.css";

function LogoCardWrapper({ src, text }) {
  return (
    <Paper bdrs="md" className={classes["logo-card-wrapper"]}>
      {src ? <Image src={src} /> : null}
      {text ? <Text component="p">{text}</Text> : null}
    </Paper>
  );
}

export default function Support() {
  const matches = useMediaQuery("(min-width: 48em)");

  return (
    <section className={classes.wrapper}>
      <Container ta="center" className={classes.container}>
        <Text component="h2">
          Supports your{" "}
          <Text component="span" c="grape" inherit>
            favourate
          </Text>{" "}
          websites and examboards
        </Text>
        <Group gap="xl" mt="lg" mb="lg">
          <Marquee speed={matches ? 40 : 80}>
            <LogoCardWrapper src={Cambridge} />
            <LogoCardWrapper src={OxfordAqa} />
            <LogoCardWrapper src={Edexcel} />
          </Marquee>
          <Marquee speed={matches ? 30 : 70} direction="right">
            <LogoCardWrapper src={SaveMyExams} />
            <LogoCardWrapper src={PapaCambridge} />
            <LogoCardWrapper src={PastpapersCo} />
          </Marquee>
        </Group>
      </Container>
    </section>
  );
}
