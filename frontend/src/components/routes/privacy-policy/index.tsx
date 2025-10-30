import React, { useState } from 'react';
import { Container, Title, Text, List, Paper, Anchor, Stack, Box, Grid, Group, Image, Collapse, Button } from "@mantine/core";
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router';

// Header component from landing page with navigation
const Header = ({ onCreateEventClick, onTicketClick, navigate }: { onCreateEventClick: () => void; onTicketClick: () => void; navigate: (path: string) => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Box
      component="header"
      style={{
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 20,
        padding: '16px'
      }}
    >
      <Container size="xl" style={{ maxWidth: '1280px' }}>
        <Group justify="space-between" align="center" style={{ width: '100%' }}>
          <Group 
            align="center" 
            gap="sm" 
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            <Image src='/p-up-logo-4-white.svg' alt='logo' w={30} h={35} />
            <Text
              size="xl"
              fw={800}
              c="white"
              style={{
                fontFamily: 'gd-boing',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)'
              }}
            >
              Stage<Text component="span" fw={400} style={{ fontFamily: 'gd-boing' }}>IQ</Text>
            </Text>
          </Group>

          {/* Mobile Menu Button */}
          <Box
            hiddenFrom="md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              cursor: 'pointer',
              color: 'white'
            }}
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </Box>

          {/* Desktop Navigation - Pushed to absolute far right */}
          <Box visibleFrom="md" style={{ marginLeft: 'auto' }}>
            <Group gap="md" align="center" justify="flex-end">
              <Anchor 
                component="button"
                onClick={() => navigate('/')}
                c="white" 
                fw={600} 
                style={{ 
                  textDecoration: 'none', 
                  '&:hover': { color: '#c4b5fd' },
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Home
              </Anchor>
              <Anchor 
                component="button"
                onClick={() => navigate('/about')}
                c="white" 
                fw={600} 
                style={{ 
                  textDecoration: 'none', 
                  '&:hover': { color: '#c4b5fd' },
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                About
              </Anchor>
              <Anchor 
                href="#" 
                fw={600} 
                c="white" 
                style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}
                onClick={(e) => {
                  e.preventDefault();
                  onTicketClick();
                }}
              >
                Ticket
              </Anchor>
              <Anchor href="#" fw={600} c="white" style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}>Contact</Anchor>
              <Button
                variant="outline"
                c="white"
                fw={600}
                style={{
                  borderColor: 'white',
                  borderRadius: '9999px',
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#7c3aed'
                  }
                }}
                onClick={onCreateEventClick}
              >
                Create Event
              </Button>
            </Group>
          </Box>

          {/* Mobile Navigation */}
          <Collapse in={mobileMenuOpen}>
            <Box
              hiddenFrom="md"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: '#312e81',
                padding: '24px',
                zIndex: 10
              }}
            >
              <Stack gap="md">
                <Anchor 
                  component="button"
                  onClick={() => {
                    navigate('/');
                    setMobileMenuOpen(false);
                  }}
                  c="white" 
                  style={{ 
                    textDecoration: 'none', 
                    '&:hover': { color: '#c4b5fd' },
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Home
                </Anchor>
                <Anchor 
                  component="button"
                  onClick={() => {
                    navigate('/about');
                    setMobileMenuOpen(false);
                  }}
                  c="white" 
                  fw={600} 
                  style={{ 
                    textDecoration: 'none', 
                    '&:hover': { color: '#c4b5fd' },
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  About
                </Anchor>
                <Anchor href="#" c="white" style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}>Ticket</Anchor>
                <Anchor href="#" c="white" fw={600} style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}>Contact</Anchor>
                <Button
                  variant="outline"
                  c="white"
                  style={{
                    borderColor: 'white',
                    borderRadius: '9999px',
                    paddingLeft: '32px',
                    paddingRight: '32px',
                    width: 'fit-content',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#7c3aed'
                    }
                  }}
                  onClick={() => {
                    navigate('/auth/login');
                    setMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Box>
          </Collapse>
        </Group>
      </Container>
    </Box>
  );
};

// Footer Component
const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      style={{
        backgroundColor: '#1e1b4b',
        color: 'white',
        padding: '48px 16px',
        '@media (min-width: 640px)': {
          padding: '48px 24px'
        }
      }}
    >
      <Container size="xl" style={{ maxWidth: '1280px' }}>
        <Grid gutter="xl" mb="xl">
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <Group gap="xs" mb="md" align="center">
              <Image src='/p-up-logo-4-white.svg' alt='logo' w={35} h={40} />
              <Text
                fw={700}
                c="white"
                style={{ fontFamily: 'gd-boing' }}
              >
                StageIQ
              </Text>
            </Group>
            <Text
              size="sm"
              c="#c4b5fd"
              mb="md"
              fw={600}
              style={{ lineHeight: 1.6 }}
            >
              StageIQ is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <Text fw={700} mb="md">Plan Events</Text>
            <Stack gap="xs">
              <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
                Create and Set Up
              </Anchor>
              <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
                Sell Tickets
              </Anchor>
              <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
                Online Events
              </Anchor>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <Text fw={700} mb="md">StageIQ</Text>
            <Stack gap="xs">
              <Anchor 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/about');
                }}
                c="#c4b5fd" 
                size="sm" 
                fw={600} 
                style={{ '&:hover': { color: 'white' } }}
              >
                About Us
              </Anchor>
              <Anchor href="#" c="#c4b5fd" size="sm" fw={600} style={{ '&:hover': { color: 'white' } }}>
                Contact Us
              </Anchor>
              <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
                How it Works
              </Anchor>
              <Anchor 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/privacy-policy');
                }}
                fw={600} 
                c="#c4b5fd" 
                size="sm" 
                style={{ '&:hover': { color: 'white' } }}
              >
                Privacy
              </Anchor>
              <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
                Terms
              </Anchor>
            </Stack>
          </Grid.Col>
        </Grid>

        <Box
          style={{
            borderTop: '1px solid #6b46c1',
            paddingTop: '24px',
            textAlign: 'center'
          }}
        >
          <Text size="sm" fw={600} c="#c4b5fd">
            Copyright © 2025 StageIQ
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateEventClick = () => {
    navigate('/auth/login');
  };

  const handleTicketClick = () => {
    navigate('/events');
  };

  return (
    <>
      {/* Hero Section with Header */}
      <Box
        component="section"
        style={{
          backgroundImage: "url('/headerBg.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '200px',
          color: 'white',
          padding: '60px 16px 40px 16px',
          position: 'relative'
        }}
      >
        <Header 
          onCreateEventClick={handleCreateEventClick}
          onTicketClick={handleTicketClick}
          navigate={navigate}
        />
        <Container size="xl" style={{ maxWidth: '1280px', marginTop: '80px' }}>
          <Text
            component="h1"
            fw={700}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.2,
              marginBottom: '16px',
              fontFamily: 'gd-boing',
              textAlign: 'center'
            }}
          >
            Privacy Policy
          </Text>
          <Text
            c="white"
            size="lg"
            fw={600}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: 1.6,
              textAlign: 'center',
              opacity: 0.9
            }}
          >
            Your privacy is important to us
          </Text>
        </Container>
      </Box>

      {/* Content Section */}
      <Container size="md" py="xl">
        <Stack gap="xl">
          <Title order={1} size="h1" mb="md">StageIQ: Privacy Policy</Title>
          <Text c="dimmed">
            Your privacy is important to us. It is StageIQ Ltd.'s policy to
            respect your privacy and comply with the Nigeria Data Protection
            Regulation (NDPR) and any other applicable data protection laws. This
            policy outlines how we collect, use, and protect your personal
            information when you visit our website,{" "}
            <Anchor href="https://stageiq.com" target="_blank">
              https://stageiq.com
            </Anchor>
            , and any other platforms we own or operate.
          </Text>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">Information We Collect</Title>
            <Text mb="md">
              We collect information in two ways:{" "}
              <Text component="span" fw={700}>voluntarily provided information</Text> and{" "}
              <Text component="span" fw={700}>automatically collected information</Text>.
            </Text>
            <List>
              <List.Item>
                <Text component="span" fw={700}>Voluntarily provided information</Text> — details you
                actively give us, such as your name, email address, and any
                information submitted through forms or during registration.
              </List.Item>
              <List.Item>
                <Text component="span" fw={700}>Automatically collected information</Text> — includes log
                data such as IP address, browser type, pages visited, time spent on
                the site, and technical details about your device.
              </List.Item>
            </List>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">Use of Personal Information</Title>
            <Text mb="md">
              We use your personal information to provide and improve our services,
              communicate with you, and ensure compliance with applicable laws.
              Specifically, we may use your data for:
            </Text>
            <List>
              <List.Item>Service delivery and account management</List.Item>
              <List.Item>Responding to support and product enquiries</List.Item>
              <List.Item>Improving user experience and website functionality</List.Item>
              <List.Item>Marketing communications (with your consent)</List.Item>
              <List.Item>Compliance with legal and regulatory requirements</List.Item>
            </List>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">
              Legal Basis for Processing (NDPR)
            </Title>
            <Text mb="md">
              Under NDPR, we process your personal data based on at least one of the
              following legal grounds:
            </Text>
            <List>
              <List.Item>Your consent</List.Item>
              <List.Item>Performance of a contract or pre-contractual steps</List.Item>
              <List.Item>Compliance with legal obligations</List.Item>
              <List.Item>Legitimate interests pursued by StageIQ</List.Item>
            </List>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">
              Protection and Security of Data
            </Title>
            <Text>
              We use commercially acceptable methods to protect your personal
              information from unauthorized access, disclosure, or alteration. While
              no electronic system is 100% secure, we continually enhance our
              security measures to safeguard your data.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">Data Retention</Title>
            <Text>
              We retain your personal information only for as long as it is needed
              for the purpose it was collected, or as required by law. When data is
              no longer needed, it will be securely deleted or anonymized.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">Your Rights (NDPR)</Title>
            <Text mb="md">
              Under the NDPR, you have the following rights regarding your personal
              data:
            </Text>
            <List>
              <List.Item>Right to access and obtain a copy of your personal data</List.Item>
              <List.Item>Right to request correction or deletion of inaccurate data</List.Item>
              <List.Item>Right to object to processing or withdraw consent</List.Item>
              <List.Item>Right to data portability</List.Item>
              <List.Item>Right to lodge complaints with the NITDA Data Protection Bureau</List.Item>
            </List>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">
              Disclosure of Personal Information
            </Title>
            <Text mb="md">
              We may share personal data with third-party service providers that
              help us operate our platform, such as hosting, analytics, and payment
              services. These third parties are contractually required to protect
              your data and only use it for the purpose we specify.
            </Text>

            <Text>
              We may also disclose information to regulatory authorities or law
              enforcement when required by law or to protect our rights and users'
              safety.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">Use of Cookies</Title>
            <Text>
              Our website uses cookies to enhance user experience and analyze site
              usage. You can manage or disable cookies through your browser settings.
              For more details, please review our{" "}
              <Anchor href="/cookie-policy">
                Cookie Policy
              </Anchor>
              .
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">Children's Privacy</Title>
            <Text>
              Our services are not directed at individuals under 13 years old, and
              we do not knowingly collect personal data from children.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">International Data Transfers</Title>
            <Text>
              Where personal data is transferred outside Nigeria, we ensure it is
              protected under adequate safeguards compliant with NDPR standards or
              other recognized international data protection frameworks.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">Updates to This Policy</Title>
            <Text>
              StageIQ Ltd. reserves the right to update this policy to reflect
              changes in legal, technical, or business requirements. Updates will be
              posted on this page, and where necessary, you will be notified via
              email or platform notice.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">Contact Us</Title>
            <Text mb="md">
              For any privacy-related questions, data access requests, or complaints
              under NDPR, please contact us:
            </Text>

            <Paper p="md" withBorder>
              <Text size="sm">
                <Text component="span" fw={700}>StageIQ Ltd.</Text>
                <br />
                Email:{" "}
                <Anchor href="mailto:privacy@stageiq.com">
                  privacy@stageiq.com
                </Anchor>
                <br />
                Address: Lagos, Nigeria
              </Text>
            </Paper>
          </div>

          <Text c="dimmed" mt="xl">
            Effective Date: January 11, 2025
            <br />
            © {new Date().getFullYear()} StageIQ Ltd. All rights reserved.
          </Text>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
