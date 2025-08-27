import {
  Button,
  Container,
  Group,
  Rating,
  Text,
  Textarea,
  Title,
  NativeSelect,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

export default function FeedbackForm() {
  const feedbackTypes = ["bug", "feature"];
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      type: feedbackTypes[0],
      title: "",
      description: "",
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
    },
  });

  async function sendRequest(values) {
    const response = await fetch("https://quickews.canny0.workers.dev/api/v1/feedback", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });

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
        Help Us Improve
        <br />
        Share Your Thoughts and Suggestions
      </Title>
      <form
        style={{ maxWidth: "400px", margin: "0 auto" }}
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          sendRequest(values);
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
          key={form.key("type")}
          {...form.getInputProps("type")}
        />

        <TextInput
          mt="xs"
          withAsterisk
          label="Title"
          description="Provide a brief explanation of the issue"
          key={form.key("title")}
          {...form.getInputProps("title")}
        />

        <Textarea
          mt="xs"
          withAsterisk
          label="Description"
          id="description"
          styles={{ input: { padding: "6px 10px" } }}
          autosize
          minRows={2}
          maxRows={5}
          key={form.key("description")}
          {...form.getInputProps("description")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Container>
  );
}
