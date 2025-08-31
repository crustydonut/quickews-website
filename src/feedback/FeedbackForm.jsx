import {
  Button,
  Container,
  Group,
  Textarea,
  Title,
  NativeSelect,
  TextInput,
  useComputedColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import Turnstile from "react-turnstile";

export default function FeedbackForm() {
  const colorScheme = useComputedColorScheme();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const feedbackTypes = ["bug", "feature"];
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      type: feedbackTypes[0],
      title: "",
      description: "",
      token: "",
    },
    validate: {
      type: (value) =>
        feedbackTypes.includes(value) ? null : "Invalid feedback type",
      title: (value) =>
        value.length >= 3 && value.length <= 50
          ? null
          : "Title must be between 3 and 50 characters",
      description: (value) =>
        value.length >= 3 && value.length <= 400
          ? null
          : "Description must be between 3 and 400 characters",
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
    url.pathname = "/v1/feedback";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response.status);

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
          root: { fontSize: "1.2rem", padding: "1.25rem" },
          title: { fontSize: "1.2rem" },
        },
      });
    }
  }

  return (
    <Container mt="3rem" mb="3rem" size="md">
      <Title ta="center" mb="xl" size="3rem" fw={400} order={1}>
        Help Us Improve
        <br />
        Share Your Thoughts and Suggestions
      </Title>

      <form
        style={{ maxWidth: "400px", margin: "0 auto" }}
        onSubmit={form.onSubmit(async (values) => {
          await sendRequest(values);
        })}
      >
        <NativeSelect
          withAsterisk
          label="Feedback type"
          description="Want to submit a feature request or bug report?"
          data={[
            { label: "bug report", value: "bug" },
            { label: "feature request", value: "feature" },
          ]}
          {...form.getInputProps("type")}
        />

        <TextInput
          mt="xs"
          withAsterisk
          label="Title"
          description="Provide a brief explanation of the issue"
          {...form.getInputProps("title")}
        />

        <Textarea
          mt="xs"
          mb="md"
          withAsterisk
          label="Description"
          autosize
          minRows={2}
          maxRows={5}
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
