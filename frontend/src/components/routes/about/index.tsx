'use client'

import React, { useState } from 'react';
import {
  Box,
  Container,
  Group,
  Text,
  Button,
  Image,
  Stack,
  Grid,
  Card,
  Anchor,
  Flex,
  Burger,
  Collapse,
  SimpleGrid,
  ThemeIcon,
  Badge,
  Timeline
} from '@mantine/core';
import { 
  IconMenu2, 
  IconX, 
  IconUsers, 
  IconCalendar, 
  IconTrendingUp, 
  IconHeart,
  IconTarget,
  IconBulb,
  IconShield,
  IconRocket,
  IconStar,
  IconCheck,
  IconArrowRight
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
          <Group align="center" gap="sm">
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

          {/* Desktop Navigation */}
          <Box visibleFrom="md" style={{ marginLeft: 'auto' }}>
            <Group gap="md" align="center" justify="flex-end">
              <Anchor 
                href="#" 
                c="white" 
                fw={600} 
                style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/landing');
                }}
              >
                Home
              </Anchor>
              <Anchor href="#" c="white" fw={600} style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}>About</Anchor>
              <Anchor href="#" fw={600} c="white" style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}>Contact</Anchor>
              {/* <Button
                variant="outline"
                c="white"
                fw={600}
                style={{
                  borderColor: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#7c3aed'
                  }
                }}
                onClick={() => navigate('/auth/login')}
              >
                Login
              </Button> */}
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
                backgroundColor: 'rgba(124, 58, 237, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '16px',
                borderRadius: '0 0 8px 8px'
              }}
            >
              <Stack gap="md">
                <Anchor 
                  href="#" 
                  c="white" 
                  fw={600} 
                  style={{ textDecoration: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/landing');
                    setMobileMenuOpen(false);
                  }}
                >
                  Home
                </Anchor>
                <Anchor href="#" c="white" fw={600} style={{ textDecoration: 'none' }}>About</Anchor>
                <Anchor href="#" c="white" fw={600} style={{ textDecoration: 'none' }}>Contact</Anchor>
                <Button
                  variant="outline"
                  c="white"
                  fw={600}
                  style={{ borderColor: 'white' }}
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

// Hero Section
const HeroSection = () => (
  <Box
    component="section"
    style={{
      backgroundImage: "url('/headerBg.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '60px 16px 120px 16px',
      '@media (min-width: 640px)': {
        padding: '88px 24px 120px 24px'
      }
    }}
  >
    <Header />
    <Container size="xl" style={{ maxWidth: '1280px', marginTop: '80px' }}>
      <Stack align="center" gap="xl" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <Badge
          size="lg"
          variant="light"
          color="violet"
          style={{
            backgroundColor: 'rgba(196, 181, 253, 0.1)',
            color: '#c4b5fd',
            border: '1px solid rgba(196, 181, 253, 0.2)'
          }}
        >
          About StageIQ
        </Badge>
        
        <Text
          component="h1"
          fw={700}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            lineHeight: 1.1,
            fontFamily: 'gd-boing',
            background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Revolutionizing Events, One Ticket at a Time
        </Text>
        
        <Text
          c="rgba(255, 255, 255, 0.9)"
          fw={500}
          style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            lineHeight: 1.6,
            maxWidth: '700px'
          }}
        >
          We're democratizing event management by providing powerful, intuitive tools that make it easy for anyone to create, promote, and manage successful events worldwide.
        </Text>

        {/* <Group gap="lg" style={{ marginTop: '32px' }}>
          <Button
            size="lg"
            radius="xl"
            px="xl"
            style={{
              backgroundColor: '#ec4899',
              fontWeight: 600,
              fontSize: '1.1rem',
              height: '50px',
              '&:hover': {
                backgroundColor: '#db2777'
              }
            }}
          >
            Get Started Today
          </Button>
          <Button
            size="lg"
            variant="outline"
            radius="xl"
            px="xl"
            style={{
              borderColor: 'white',
              color: 'white',
              fontWeight: 600,
              fontSize: '1.1rem',
              height: '50px',
              '&:hover': {
                backgroundColor: 'white',
                color: '#7c3aed'
              }
            }}
          >
            Learn More
          </Button>
        </Group> */}
      </Stack>
    </Container>
  </Box>
);

// Mission Section
const MissionSection = () => (
  <Box
    component="section"
    py="xl"
    px={{ base: 'md', sm: 'xl' }}
    style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#ffffff' }}
  >
        <Container size="xl" style={{ maxWidth: '1280px' }}>
          {/* Visual Separator */}
          <Box style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Box
              style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #7c3aed, #ec4899)',
                borderRadius: '2px',
                margin: '0 auto 20px auto'
              }}
            />
            <Text
              c="#6b7280"
              size="sm"
              fw={500}
              style={{ textTransform: 'uppercase', letterSpacing: '2px' }}
            >
              Our Journey
            </Text>
          </Box>
          
          <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="xl">
            <Box>
              <Badge
                size="md"
                variant="light"
                color="violet"
                mb="md"
                style={{
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  color: '#7c3aed'
                }}
              >
                Our Mission
              </Badge>
              <Text
                component="h2"
                fw={700}
                c="#1f2937"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontFamily: 'gd-boing',
                  lineHeight: 1.2,
                  marginBottom: '24px'
                }}
              >
                Empowering Event Creators Worldwide
              </Text>
              <Text
                c="#6b7280"
                style={{
                  fontSize: 'clamp(1.125rem, 3vw, 1.375rem)',
                  lineHeight: 1.7,
                  marginBottom: '32px'
                }}
              >
                At StageIQ, we believe that every event has the power to bring people together and create lasting memories. Our mission is to democratize event management by providing powerful, intuitive tools that make it easy for anyone to create, promote, and manage successful events.
              </Text>
            </Box>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              <Box>
                <ThemeIcon
                  size="lg"
                  radius="md"
                  variant="light"
                  color="violet"
                  mb="md"
                >
                  <IconUsers size={24} />
                </ThemeIcon>
                <Text fw={600} c="#1f2937" mb="xs" style={{ fontSize: '1.125rem' }}>
                  Community First
                </Text>
                <Text c="#6b7280" size="sm">
                  Building connections and fostering communities through memorable events.
                </Text>
              </Box>

              <Box>
                <ThemeIcon
                  size="lg"
                  radius="md"
                  variant="light"
                  color="violet"
                  mb="md"
                >
                  <IconRocket size={24} />
                </ThemeIcon>
                <Text fw={600} c="#1f2937" mb="xs" style={{ fontSize: '1.125rem' }}>
                  Innovation
                </Text>
                <Text c="#6b7280" size="sm">
                  Continuously improving our platform with cutting-edge technology.
                </Text>
              </Box>
            </SimpleGrid>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box style={{ position: 'relative' }}>
            <Image
              src="/createEvent.svg"
              alt="Our Mission"
              radius="lg"
              style={{
                width: '100%',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
              }}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  </Box>
);

// Values Section
const ValuesSection = () => {
  const values = [
    {
      icon: IconTarget,
      title: 'Purpose-Driven',
      description: 'Every feature we build serves a clear purpose: making event management effortless and enjoyable.',
      color: '#ec4899'
    },
    {
      icon: IconBulb,
      title: 'Innovation',
      description: 'We continuously push boundaries to deliver cutting-edge solutions for modern event creators.',
      color: '#f59e0b'
    },
    {
      icon: IconShield,
      title: 'Trust & Security',
      description: 'Your data and your attendees\' information are protected with enterprise-grade security.',
      color: '#10b981'
    },
    {
      icon: IconUsers,
      title: 'Community First',
      description: 'We prioritize building strong communities and fostering meaningful connections through events.',
      color: '#3b82f6'
    },
    {
      icon: IconHeart,
      title: 'Passion',
      description: 'We are passionate about helping people create memorable experiences and lasting connections.',
      color: '#ef4444'
    },
    {
      icon: IconStar,
      title: 'Excellence',
      description: 'We strive for excellence in every interaction, every feature, and every event experience.',
      color: '#8b5cf6'
    }
  ];

  return (
    <Box
      component="section"
      py="xl"
      px={{ base: 'md', sm: 'xl' }}
      style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#f8fafc' }}
    >
      <Container size="xl" style={{ maxWidth: '1280px' }}>
        <Stack align="center" gap="xl" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <Badge
            size="md"
            variant="light"
            color="violet"
            style={{
              backgroundColor: 'rgba(124, 58, 237, 0.1)',
              color: '#7c3aed'
            }}
          >
            Our Values
          </Badge>
          <Text
            component="h2"
            fw={700}
            c="#1f2937"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontFamily: 'gd-boing',
              lineHeight: 1.2
            }}
          >
            What Drives Us Forward
          </Text>
          <Text
            c="#6b7280"
            style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.375rem)',
              lineHeight: 1.7,
              maxWidth: '700px'
            }}
          >
            These core values guide everything we do and shape how we build our platform to serve event creators worldwide.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {values.map((value, index) => (
            <Card
              key={index}
              shadow="sm"
              padding="xl"
              radius="xl"
              style={{
                height: '100%',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                  borderColor: value.color
                }
              }}
            >
              <Stack gap="lg">
                <ThemeIcon
                  size="xl"
                  radius="xl"
                  variant="light"
                  style={{
                    backgroundColor: `${value.color}15`,
                    color: value.color,
                    border: `2px solid ${value.color}30`
                  }}
                >
                  <value.icon size={28} />
                </ThemeIcon>
                <Box>
                  <Text
                    fw={700}
                    c="#1f2937"
                    mb="sm"
                    style={{
                      fontSize: '1.25rem',
                      fontFamily: 'gd-boing'
                    }}
                  >
                    {value.title}
                  </Text>
                  <Text 
                    c="#6b7280" 
                    style={{ 
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}
                  >
                    {value.description}
                  </Text>
                </Box>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

// Story Section
const StorySection = () => {
  const milestones = [
    {
      year: '2024',
      title: 'The Beginning',
      description: 'StageIQ was founded by passionate event organizers frustrated with outdated, complicated tools.',
      icon: <IconRocket size={20} />
    },
    {
      year: 'Q2 2024',
      title: 'First Platform Launch',
      description: 'Launched our MVP with core event creation and ticketing features, serving our first 100 events.',
      icon: <IconStar size={20} />
    },
    {
      year: 'Q4 2024',
      title: 'Rapid Growth',
      description: 'Reached 10,000+ events created and expanded our team to serve event creators worldwide.',
      icon: <IconTrendingUp size={20} />
    },
    {
      year: '2025',
      title: 'Innovation Continues',
      description: 'Introducing AI-powered features and advanced analytics to revolutionize event management.',
      icon: <IconBulb size={20} />
    }
  ];

  return (
    <Box
      component="section"
      py="xl"
      px={{ base: 'md', sm: 'xl' }}
      style={{ 
        paddingTop: '120px', 
        paddingBottom: '120px', 
        backgroundColor: '#f8fafc',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)'
        }
      }}
    >
      <Container size="xl" style={{ maxWidth: '1280px' }}>
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Box>
                <Badge
                  size="md"
                  variant="light"
                  color="violet"
                  mb="md"
                  style={{
                    backgroundColor: 'rgba(124, 58, 237, 0.1)',
                    color: '#7c3aed'
                  }}
                >
                  Our Story
                </Badge>
                <Text
                  component="h2"
                  fw={700}
                  c="#1f2937"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontFamily: 'gd-boing',
                    lineHeight: 1.2,
                    marginBottom: '24px'
                  }}
                >
                  From Frustration to Innovation
                </Text>
                <Text
                  c="#6b7280"
                  style={{
                    fontSize: 'clamp(1.125rem, 3vw, 1.375rem)',
                    lineHeight: 1.7,
                    marginBottom: '40px'
                  }}
                >
                  Born from the frustration of organizing events with outdated tools, StageIQ emerged as the solution event creators were waiting for.
                </Text>
              </Box>

              <Timeline active={3} bulletSize={24} lineWidth={2} color="violet">
                {milestones.map((milestone, index) => (
                  <Timeline.Item
                    key={index}
                    bullet={
                      <ThemeIcon
                        size={24}
                        variant="light"
                        color="violet"
                        radius="xl"
                      >
                        {milestone.icon}
                      </ThemeIcon>
                    }
                    title={
                      <Group gap="sm" align="center">
                        <Text fw={700} c="#1f2937" style={{ fontSize: '1.125rem' }}>
                          {milestone.title}
                        </Text>
                        <Badge size="sm" variant="light" color="violet">
                          {milestone.year}
                        </Badge>
                      </Group>
                    }
                  >
                    <Text c="#6b7280" size="sm" style={{ lineHeight: 1.6, marginTop: '8px' }}>
                      {milestone.description}
                    </Text>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ position: 'relative' }}>
              <Image
                src="/heroImg.svg"
                alt="Our Story"
                radius="lg"
                style={{
                  width: '100%',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

// CTA Section
const CTASection = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      py="xl"
      px={{ base: 'md', sm: 'xl' }}
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />
      
      <Container size="xl" style={{ maxWidth: '1280px', position: 'relative', zIndex: 1 }}>
        <Stack align="center" gap="xl">
          <Badge
            size="lg"
            variant="light"
            color="white"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              backdropFilter: 'blur(10px)'
            }}
          >
            Join the Revolution
          </Badge>
          
          <Text
            component="h2"
            fw={700}
            c="white"
            ta="center"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontFamily: 'gd-boing',
              lineHeight: 1.1,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            Ready to Create Amazing Events?
          </Text>
          
          <Text
            c="rgba(255, 255, 255, 0.95)"
            ta="center"
            style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
              lineHeight: 1.7,
              maxWidth: '700px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}
          >
            Join thousands of event creators who trust StageIQ to bring their visions to life. 
            Start creating memorable experiences today.
          </Text>
          
          <Group gap="lg" justify="center" mt="xl">
            <Button
              size="xl"
              variant="white"
              color="dark"
              radius="lg"
              leftSection={<IconRocket size={20} />}
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                padding: '16px 40px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => navigate('/auth/login')}
            >
              Get Started Free
            </Button>
            
            {/* <Button
              size="xl"
              variant="outline"
              color="white"
              radius="lg"
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                padding: '16px 40px',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => navigate('/landing')}
            >
              Learn More
            </Button> */}
          </Group>
          
          <Group gap="xl" mt="xl" justify="center">
            <Group gap="xs" align="center">
              <ThemeIcon size="sm" variant="light" color="white" radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
              <Text c="rgba(255, 255, 255, 0.9)" size="sm" fw={500}>
                Free to start
              </Text>
            </Group>
            
            <Group gap="xs" align="center">
              <ThemeIcon size="sm" variant="light" color="white" radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
              <Text c="rgba(255, 255, 255, 0.9)" size="sm" fw={500}>
                No credit card required
              </Text>
            </Group>
            
            <Group gap="xs" align="center">
              <ThemeIcon size="sm" variant="light" color="white" radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
              <Text c="rgba(255, 255, 255, 0.9)" size="sm" fw={500}>
                Setup in minutes
              </Text>
            </Group>
          </Group>
        </Stack>
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
                Online RSVP
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
                c="#c4b5fd" 
                size="sm" 
                fw={600} 
                style={{ '&:hover': { color: 'white' } }}
                onClick={(e) => {
                  e.preventDefault();
                  // Already on About page
                }}
              >
                About Us
              </Anchor>
              <Anchor href="#" c="#c4b5fd" size="sm" fw={600} style={{ '&:hover': { color: 'white' } }}>
                Contact Us
              </Anchor>
              <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
                Help Center
              </Anchor>
              <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
                How it Works
              </Anchor>
              <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
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

// Main About Page Component
export default function AboutPage() {
  return (
    <Box>
      <HeroSection />
      <MissionSection />
      {/* <ValuesSection /> */}
      <StorySection />
      <CTASection />
      <Footer />
    </Box>
  );
}