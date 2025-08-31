import {
  Button,
  Container,
  Group,
  Rating,
  TextInput,
  Text,
  Switch,
  Textarea,
  Title,
  useComputedColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import Turnstile from "react-turnstile";

export default function RatingForm() {
  const colorScheme = useComputedColorScheme();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [useNickname, { toggle }] = useDisclosure(true);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      nickname: "",
      stars: 0,
      description: "",
      token: "",
    },

    validate: {
      nickname: (value) =>
        !useNickname || (value.length >= 3 && value.length <= 20)
          ? null
          : "Nickname must be between 3 and 20 characters.",
      stars: (value) => (value >= 0.5 && value <= 5 ? null : "Select a Rating"),
      description: (value) =>
        value.length <= 400
          ? null
          : "Comment length must not exceed 400 characters",
      token: (value) =>
        value === ""
          ? "Please complete the Cloudflare Turnstile or reload the page. Your entries may be lost if you reload, so consider copying them first."
          : null,
    },
  });

  const onSuccess = (token) => {
    form.setFieldValue("token", token);
    setButtonDisabled(false);
  };

  const onError = () => {
    setButtonDisabled(true);
    notifications.show({
      title: "Turnstile Error",
      message: "Failed to verify. Please try again.",
      color: "red",
    });
  };

  const onExpire = () => {
    form.setFieldValue("token", "");
    setButtonDisabled(true);
  };

  async function sendRequest(values) {
    // eslint-disable-next-line no-undef
    const url = new URL(__API_URL__);
    url.pathname = "/v1/ratings";

    console.log(url);
    

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });

    console.log(await response.json(), response.status);

    if (response.status === 204) {
      window.location.replace("/");
    } else {
      return notifications.show({
        title: "Form submition failed.",
        message:
          response.status === 429
            ? "You have reached your form submition limit, try again another day"
            : "Something went wrong, please try again",
        color: "red",
        autoClose: 4000,
        styles: {
          root: {
            fontSize: "1.2rem",
            padding: "1.25rem",
          },
          title: { fontSize: "1.2rem" },
        },
      });
    }
  }

  return (
    <Container mt="3rem" mb="3rem" size="md">
      <Title ta="center" mb="xl" size="3rem" fw={400} order={1}>
        How do you like our extension?
        <br />
        Let us know!
      </Title>
      <form
        style={{ maxWidth: "400px", margin: "0 auto" }}
        onSubmit={form.onSubmit(async (values) => {
          console.log(values);
          sendRequest(values);
        })}
      >
        <Switch
          mb={4}
          styles={{ label: { fontSize: "var(--mantine-font-size-md)" } }}
          label="Use a nickname"
          checked={useNickname}
          onClick={toggle}
          labelPosition="left"
        />
        <TextInput
          disabled={!useNickname}
          placeholder="Zorpix"
          key={form.key("nickname")}
          {...form.getInputProps("nickname")}
        />

        <Text
          display="block"
          mt="sm"
          component="label"
          size="md"
          htmlFor="stars"
        >
          Rating{" "}
          <Text component="span" c="red">
            *
          </Text>
        </Text>
        <Rating
          id="stars"
          size="lg"
          fractions={2}
          key={form.key("stars")}
          {...form.getInputProps("stars")}
        />
        {form.errors.stars && (
          <Text c="red" size="xs" mt={5}>
            {form.errors.stars}
          </Text>
        )}

        <Text
          display="block"
          mt="sm"
          component="label"
          size="md"
          htmlFor="description"
        >
          Comment
        </Text>
        <Textarea
          mb="md"
          id="description"
          styles={{ input: { padding: "6px 10px" } }}
          autosize
          minRows={2}
          maxRows={5}
          key={form.key("description")}
          {...form.getInputProps("description")}
        />

        <Turnstile
          sitekey="0x4AAAAAABvJEAhgyrPR-OIH"
          theme={colorScheme}
          size="normal"
          refreshExpired="auto"
          onSuccess={onSuccess}
          onError={onError}
          onExpire={onExpire}
        />

        {form.errors.token && (
          <Text c="red" size="xs" mt={5}>
            {form.errors.token}
          </Text>
        )}

        <Group justify="flex-end" mt="md">
          <Button disabled={buttonDisabled} type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </Container>
  );
}
