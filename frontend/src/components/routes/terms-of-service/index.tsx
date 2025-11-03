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
              <Anchor 
                href="#" 
                fw={600} 
                c="white" 
                style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}
              >
                Contact
              </Anchor>
              <Button
                variant="outline"
                size="sm"
                radius="xl"
                style={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 600,
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

          {/* Mobile Navigation Menu */}
          <Box
            hiddenFrom="md"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              zIndex: 10
            }}
          >
            <Collapse in={mobileMenuOpen}>
              <Box
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  padding: '16px',
                  borderRadius: '8px',
                  margin: '8px'
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
                    fw={600} 
                    style={{ 
                      textDecoration: 'none', 
                      '&:hover': { color: '#c4b5fd' },
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
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
                      cursor: 'pointer',
                      textAlign: 'left'
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
                      setMobileMenuOpen(false);
                    }}
                  >
                    Ticket
                  </Anchor>
                  <Anchor 
                    href="#" 
                    fw={600} 
                    c="white" 
                    style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}
                  >
                    Contact
                  </Anchor>
                  <Button
                    variant="outline"
                    size="sm"
                    radius="xl"
                    style={{
                      borderColor: 'white',
                      color: 'white',
                      fontWeight: 600,
                      width: 'fit-content',
                      '&:hover': {
                        backgroundColor: 'white',
                        color: '#7c3aed'
                      }
                    }}
                    onClick={() => {
                      onCreateEventClick();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Create Event
                  </Button>
                </Stack>
              </Box>
            </Collapse>
          </Box>
        </Group>
      </Container>
    </Box>
  );
};

// Footer component
const Footer = () => {
  const navigate = useNavigate();

  const onCreateAndSetUpClick = () => {
    navigate('/auth/login');
  };

  const onSellTicketsClick = () => {
    navigate('/auth/login');
  };

  const onOnlineEventsClick = () => {
    navigate('/auth/login');
  };

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
              <Text fw={700} c="white" size="lg" style={{ fontFamily: 'gd-boing' }}>
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
              <Anchor 
                href="#" 
                fw={600} 
                c="#c4b5fd" 
                size="sm" 
                style={{ '&:hover': { color: 'white' } }}
                onClick={(e) => {
                  e.preventDefault();
                  onCreateAndSetUpClick();
                }}
              >
                Create and Set Up
              </Anchor>
              <Anchor 
                href="#" 
                fw={600} 
                c="#c4b5fd" 
                size="sm" 
                style={{ '&:hover': { color: 'white' } }}
                onClick={(e) => {
                  e.preventDefault();
                  onSellTicketsClick();
                }}
              >
                Sell Tickets
              </Anchor>
              <Anchor 
                href="#" 
                fw={600} 
                c="#c4b5fd" 
                size="sm" 
                style={{ '&:hover': { color: 'white' } }}
                onClick={(e) => {
                  e.preventDefault();
                  onOnlineEventsClick();
                }}
              >
                Online Events
              </Anchor>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <Text fw={700} mb="md">Eventick</Text>
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
                  window.scrollTo(0, 0);
                }}
                c="#c4b5fd" 
                size="sm" 
                fw={600} 
                style={{ '&:hover': { color: 'white' } }}
              >
                Privacy
              </Anchor>
              <Anchor 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/terms-of-service');
                  window.scrollTo(0, 0);
                }}
                fw={600} 
                c="#c4b5fd" 
                size="sm" 
                style={{ '&:hover': { color: 'white' } }}
              >
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

const TermsOfService: React.FC = () => {
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
            Terms of Service
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
            Please read these terms carefully
          </Text>
        </Container>
      </Box>

      {/* Content Section */}
      <Container size="md" py="xl">
        <Stack gap="xl">
          <Title order={1} size="h1" mb="md">StageIQ Ltd. Terms of Service</Title>
          <Text c="dimmed">
            These Terms of Service govern your use of the website located at{" "}
            <Anchor href="https://pup.finance" target="_blank">
              https://pup.finance
            </Anchor>{" "}
            and any related services provided by StageIQ Ltd.
          </Text>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">1. Acceptance of Terms</Title>
            <Text>
              By accessing or using our website or any of our services, you agree to abide by these Terms of Service and to comply with all applicable laws and regulations of the Federal Republic of Nigeria. If you do not agree with these Terms, you are prohibited from using or accessing the website or services provided by StageIQ Ltd.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">2. Changes to Terms</Title>
            <Text>
              We, StageIQ Ltd., reserve the right to review and amend any of these Terms of Service at our sole discretion. Upon doing so, we will update this page. Any changes to these Terms will take effect immediately from the date of publication.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">3. Limitations of Use</Title>
            <Text mb="md">By using our website and services you warrant that you will not:</Text>
            <List>
              <List.Item>modify, copy, prepare derivative works of, decompile or reverse-engineer any materials or software on this website;</List.Item>
              <List.Item>remove any copyright or proprietary notices from any materials or software on this website;</List.Item>
              <List.Item>transfer the materials to another person or "mirror" the materials on any other server;</List.Item>
              <List.Item>knowingly or negligently use the website or services in a way that disrupts our networks or any other service StageIQ Ltd. provides;</List.Item>
              <List.Item>use the website or services to transmit or publish harassing, indecent, fraudulent or unlawful material;</List.Item>
              <List.Item>use the website or services in violation of any applicable laws or regulations, including but not limited to those relating to fintech, banking, payments, data protection, anti-money laundering and the licensing of financial service providers;</List.Item>
              <List.Item>use the website for sending unauthorized advertising or spam;</List.Item>
              <List.Item>harvest, collect or gather user data without consent;</List.Item>
              <List.Item>use the website or services in such a way that may infringe the privacy, intellectual property rights or other rights of third parties.</List.Item>
            </List>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">4. Intellectual Property</Title>
            <Text>
              The intellectual property in the materials on this website are owned by or licensed to StageIQ Ltd. and are protected by applicable copyright, trademark and other laws. We grant you permission to download one copy of the materials for your personal, non-commercial transitory use only. This constitutes a licence, not a transfer of title. This licence automatically terminates if you violate any restrictions or these Terms, and may be terminated by StageIQ Ltd. at any time.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">5. User-Generated Content</Title>
            <Text mb="md">
              You retain ownership rights over content you submit to us (e.g., posts, uploads, shares) under applicable intellectual property laws. However, by submitting such content you grant StageIQ Ltd. a non-exclusive, royalty-free, transferable, sub-licensable, worldwide licence to use, distribute, modify, publicly display, translate or create derivative works of your content consistent with your privacy preferences and our Privacy Policy.
            </Text>
            <Text>
              You can terminate this licence by deleting your content, but to the extent we (or our partners) have used your content in connection with commercial or sponsored activities, the licence will continue until the relevant activity is discontinued.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">6. Liability</Title>
            <Text mb="md">
              Our website and the materials on our website are provided "as is". To the fullest extent permitted by law, StageIQ Ltd. makes no warranties, express or implied, and hereby disclaims all warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, non-infringement of intellectual property or violation of rights.
            </Text>
            <Text mb="md">
              In no event shall StageIQ Ltd., its affiliates or suppliers be liable for any consequential loss or damage arising from the use or inability to use the website or its materials, even if StageIQ Ltd. has been informed of the possibility of such damage. In this context, "consequential loss" includes (but is not limited to) indirect loss, loss of profit, loss of business, loss of savings, loss of data, loss of reputation, loss of opportunity or goodwill, whether under statute, contract, tort (including negligence), equity or otherwise.
            </Text>
            <Text>
              Because some jurisdictions do not allow the exclusion or limitation of implied warranties or liability for incidental or consequential damages, these limitations may not apply to you.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">7. Accuracy of Materials</Title>
            <Text>
              The materials appearing on our website are not comprehensive and are for general information only. StageIQ Ltd. does not warrant or make any representations regarding the accuracy, likely results or reliability of the use of the materials on our website or on any related resources linked to our website.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">8. Links</Title>
            <Text>
              StageIQ Ltd. has not reviewed all sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement, approval or control by StageIQ Ltd. Use of any such linked site is at your own risk.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">9. Right to Terminate</Title>
            <Text>
              We may suspend or terminate your access to our website and services, and terminate these Terms of Service immediately upon written notice to you for any breach of these Terms.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">10. Severance</Title>
            <Text>
              If any provision of these Terms is wholly or partially invalid, void or unenforceable, such provision shall be severed to the extent of such invalidity or unenforceability, and the remaining provisions will continue in full force and effect.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">11. Governing Law and Jurisdiction</Title>
            <Text>
              These Terms of Service are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. You irrevocably submit to the exclusive jurisdiction of the courts in Nigeria in respect of any dispute arising under or in connection with these Terms.
            </Text>
          </div>

          <div>
            <Title order={2} size="h2" mt="xl" mb="md">Contact Us</Title>
            <Text mb="md">
              For any questions regarding these Terms of Service, please contact us:
            </Text>

            <Paper p="md" withBorder>
              <Text size="sm">
                <Text component="span" fw={700}>StageIQ Ltd.</Text>
                <br />
                Email:{" "}
                <Anchor href="mailto:legal@stageiq.com">
                  support@pup.finance
                </Anchor>
                <br />
                Address: Victoria Island, Lagos, Nigeria
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

export default TermsOfService;
