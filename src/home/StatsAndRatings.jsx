/* eslint-disable no-undef */
import {
  Text,
  Container,
  Paper,
  ThemeIcon,
  Title,
  Stack,
  Rating,
  Badge,
} from "@mantine/core";
import { FaGlobe, FaMagnifyingGlass, FaUsers } from "react-icons/fa6";
import { useEffect, useState } from "react";
import classes from "./StatsAndRatings.module.css";
import { useInView } from "react-intersection-observer";
import Ratings from "./Ratings";

const stats = [
  {
    label: "Installs",
    pathname: "/v1/installs",
    icon: FaUsers,
  },
  {
    label: "Searches",
    pathname: "/v1/searches/count",
    icon: FaMagnifyingGlass,
  },
  {
    label: "Countries",
    pathname: "/v1/mau/countries",
    icon: FaGlobe,
  },
];

function Stats() {
  function Stat({ label, pathname, icon }) {
    const [stat, setStat] = useState("");
    const Icon = icon;

    useEffect(() => {
      (async function () {
        const url = new URL(__API_URL__);
        url.pathname = pathname;

        const response = await fetch(url);
        const json = await response.json();
        setStat(json.count);
      })();
    });

    return (
      <Paper className={classes.stat}>
        <ThemeIcon
          bd="2px solid"
          size={"lg"}
          radius="md"
          variant="outline"
          color="grape.0"
        >
          <Icon />
        </ThemeIcon>
        <Text size="3rem" fw={600}>
          {stat}
        </Text>
        <Badge color="gray.0" c={"grape.8"} tt="uppercase" size="lg" fw={300}>
          {label}
        </Badge>
      </Paper>
    );
  }

  return (
    <Paper bdrs="lg" withBorder className={classes.stats}>
      {stats.map((stat, idx) => (
        <Stat key={idx} {...stat} />
      ))}
    </Paper>
  );
}

function RatingsBox() {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    (async function () {
      const url = new URL(__API_URL__);
      url.pathname = "/v1/ratings/avg";

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      
      setStars(data.avg);
    })();
  });

  return (
    <>
      <Title className={classes.title} order={2}>
        Real feedback from our users
      </Title>
      <Stack align="center" m={"xl"}>
        <Text className={classes.rating} ff="monospace" component="span">
          {stars}/5
        </Text>
        <Rating size="xl" fractions={24} value={stars} inert />
        {/* <Ratings /> */}
      </Stack>
    </>
  );
}

export default function StatsAndRatings() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={classes.wrapper}>
      {inView ? (
        <Container className={classes.container}>
          <Stats />
          <RatingsBox />
          <Ratings />
        </Container>
      ) : (
        <></>
      )}
    </section>
  );
}

/*import {
  Text,
  Container,
  Paper,
  ThemeIcon,
  Rating as Rate,
} from "@mantine/core";
import classes from "./Rating.module.css";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass, FaUser } from "react-icons/fa6";

const data = [
  {
    title: "Monthly active users",
    stats: "456,133",
    // description:
    // "24% more than in the same month last year, 33% more that two years ago",
    url: "",
    icon: FaUser,
  },
  {
    title: "Searches",
    stats: "2,175",
    // description:
    // "13% less compared to last month, new user engagement up by 6%",
    url: "",
    icon: FaMagnifyingGlass,
  },
  {
    title: "Rating",
    stats: "1,994",
    // description: "1994 orders were completed this month, 97% satisfaction rate",
    // url: "https://api.weather.gov/alerts",
  },
];

function StatItem({ title, url, description, stats,  }) {
  // eslint-disable-next-line no-unused-vars
  const [stat, setStat] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      setStat((await response.json()).type);
    }
    fetchData();
  });

  return (
    <div key={title} className={classes.stat}>

      <Text className={classes.count}>{stats}</Text>
      <Text className={classes.title}>{title}</Text>
      <Text className={classes.description}>{description}</Text>
    </div>
  );
}

function StatsGroup() {
  return (
    <Paper withBorder className={classes.root}>
      {data.map((stat) => (
        <StatItem {...stat} />
      ))}
    </Paper>
  );
}

export default function Rating() {
  return (
    <section className={classes.wrapper}>
      <Container className={classes.container}>
        <StatsGroup />
      </Container>
    </section>
  );
}*/
