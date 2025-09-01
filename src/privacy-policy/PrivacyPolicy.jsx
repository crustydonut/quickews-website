import { Accordion, Text, Title, Anchor, Container } from '@mantine/core';

export default function PrivacyPolicy() {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">Privacy Policy for QuickEWS</Title>
      <Text size="sm" c="gray" mb="xl">Last updated: 2025-8-31</Text>

      <Accordion variant="separated" chevronPosition="right" multiple>
        <Accordion.Item value="information">
          <Accordion.Control>Information We Collect</Accordion.Control>
          <Accordion.Panel>
            <Text>
              <strong>Usage Data:</strong> We collect non-personal, aggregated data about how the Quickews extension is used, such as when the app is accessed, which features are used, and the country of origin.
            </Text>
            <Text mt="sm">
              <strong>IP Addresses:</strong> When you interact with some of our API endpoints, your IP address may be temporarily collected for security and rate-limiting purposes. IP addresses are automatically deleted within 24 hours and are not used to track or identify you.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="use">
          <Accordion.Control>How We Use Information</Accordion.Control>
          <Accordion.Panel>
            <Text>- To understand which features are most popular and improve Quickews accordingly.</Text>
            <Text>- To enforce security measures, including preventing abuse of our API endpoints.</Text>
            <Text>- To publish aggregated, anonymous statistics (e.g., number of users by country or feature usage) on our website.</Text>
            <Text>- To maintain the stability and reliability of our service.</Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="sharing">
          <Accordion.Control>Data Sharing</Accordion.Control>
          <Accordion.Panel>
            <Text>- We do not sell, rent, or share your personal data with third parties.</Text>
            <Text>- Aggregated usage statistics may be made public, but they cannot be used to identify individual users.</Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="thirdparty">
          <Accordion.Control>Third-Party Services</Accordion.Control>
          <Accordion.Panel>
            <Text>- <strong>Cloudflare:</strong> for hosting, security, and infrastructure.</Text>
            <Text>- <strong>Cloudflare Turnstile:</strong> used on some forms/pages to prevent spam and abuse.</Text>
            <Text mt="sm">These services may process limited technical data (such as IP addresses or general network information) necessary for their operation. We do not use these for tracking or profiling.</Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="retention">
          <Accordion.Control>Data Retention</Accordion.Control>
          <Accordion.Panel>
            <Text>- IP addresses are stored temporarily (up to 24 hours) for rate-limiting and security purposes and then automatically deleted.</Text>
            <Text>- Aggregated usage data is retained to help us analyze and improve the app.</Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="children">
          <Accordion.Control>Children’s Privacy</Accordion.Control>
          <Accordion.Panel>
            <Text>Quickews is an educational tool and does not contain age-restricted content. Since no personal data is collected beyond temporary IP addresses (used for security), Quickews is safe for use by all ages.</Text>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="contact">
          <Accordion.Control>Contact</Accordion.Control>
          <Accordion.Panel>
            <Text>
              If you have any questions about this Privacy Policy, you can reach us through our official Reddit account: {' '}
              <Anchor href="[Insert Reddit profile link]" target="_blank" rel="noopener noreferrer">
                [Insert Reddit profile link]
              </Anchor>.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}