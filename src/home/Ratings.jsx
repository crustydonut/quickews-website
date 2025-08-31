/* eslint-disable no-undef */
import {
  Button,
  Group,
  Paper,
  Rating,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { useEffect, useState } from "react";
import classes from "./Ratings.module.css";
import { FaUser } from "react-icons/fa6";

export default function Ratings() {
  const [ratings, setRatings] = useState([]);
  const [ratingCount, setRatingCount] = useState(0);
  const [after, setAfter] = useState(0);
  const [visibleRatingCount, setVisibleRatingCount] = useState(3);

  async function loadMoreRatings() {
    const url = new URL(__API_URL__);
    url.pathname = "/v1/ratings";
    url.searchParams.set("after", after);

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      setRatings((rating) => {
        const ratings = [
          ...rating,
          ...data.map((rating) => ({
            ...rating,
            created_at: new Date(rating.created_at * 1000)
              .toISOString()
              .slice(0, 10),
            stars: (rating.stars / 2).toFixed(1),
          })),
        ];
        return ratings;
      });
      setAfter(data[data.length - 1] ? data[data.length - 1].id : 0);
    }
  }

  useEffect(() => {
    (async () => {
      const url = new URL(__API_URL__);
      url.pathname = "/v1/ratings/count";

      const response = await fetch(url);
      if (!response.ok) return;

      const { count } = await response.json();
      setRatingCount(count);
    })();
  }, []);

  useEffect(() => {
    loadMoreRatings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleShowLess() {
    setVisibleRatingCount((count) => count - 3);
  }

  function handleShowMore() {
    if (visibleRatingCount < ratingCount) {
      if (ratings.length >= visibleRatingCount) {
        loadMoreRatings();
      }
      setVisibleRatingCount((c) => c + 3);
    }
  }

  function RatingInfo({ nickname, stars, description, created_at }) {
    return (
      <Paper className={classes.paper} withBorder>
        <Group justify="space-between">
          <Group>
            <ThemeIcon>
              <FaUser />
            </ThemeIcon>
            <Text size="xl">{nickname}</Text>
          </Group>
          <Stack gap={0}>
            <Rating fractions={2} value={parseFloat(stars)} inert />
            <Text>{created_at}</Text>
          </Stack>
        </Group>
        <Text mt="sm">{description}</Text>
      </Paper>
    );
  }

  return (
    <>
      <Group className={classes.ratings}>
        {ratings.map(
          (rating, idx) =>
            idx < visibleRatingCount && (
              <RatingInfo key={rating.id} {...rating} />
            )
        )}
      </Group>
      <Group justify="center">
        {visibleRatingCount < ratingCount && (
          <Button onClick={handleShowMore}>Show more</Button>
        )}
        {visibleRatingCount > 3 && (
          <Button onClick={handleShowLess}>Show less</Button>
        )}
      </Group>
    </>
  );
}
