'use client'

import React, { useState, useMemo, useEffect } from 'react';
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
  Select,
  TextInput,
  Anchor,
  Flex,
  Burger,
  Collapse,
  Loader
} from '@mantine/core';
import { IconChevronDown, IconMenu2, IconX } from '@tabler/icons-react';
import { eventsClientPublic } from '../../../api/event.client';
import { useQuery } from '@tanstack/react-query';
import { Event } from '../../../types';
import { useNavigate } from 'react-router';

// ChevronDown component for compatibility
const ChevronDown = ({ className }: { className?: string }) => (
  <IconChevronDown size={16} />
);

// Header Component
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
              <Anchor href="#" c="white" fw={600} style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}>Home</Anchor>
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
              {/* <Anchor href="#" fw={600} c="white" style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}>Speakers</Anchor> */}
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
                <Anchor href="#" c="white" style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}>Home</Anchor>
                <Anchor href="#" c="white" style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}>Speakers</Anchor>
                <Anchor href="#" c="white" style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}>Ticket</Anchor>
                <Anchor
                  href="#"
                  c="white"
                  fw={600}
                  style={{ textDecoration: 'none', '&:hover': { color: '#c4b5fd' } }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/about');
                  }}
                >
                  About
                </Anchor>
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

// Hero Section Component
const HeroSection = ({ onCreateEventClick, onTicketClick, navigate }: { onCreateEventClick: () => void; onTicketClick: () => void; navigate: (path: string) => void }) => (
  <Box
    component="section"
    style={{
      backgroundImage: "url('/headerBg.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '60px 16px 88px 16px',
      '@media (min-width: 640px)': {
        padding: '88px 24px'
      }
    }}
  >
    <Header onCreateEventClick={onCreateEventClick} onTicketClick={onTicketClick} navigate={navigate} />
    <Container size="xl" style={{ maxWidth: '1280px', marginTop: '64px' }}>
      <Grid gutter={{ base: 'xl', sm: 'xl', lg: '80px' }} align="center">
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
          <Stack gap="md" style={{ textAlign: 'left' }}>
            <Text
              component="h1"
              fw={700}
              style={{
                fontSize: 'clamp(1.875rem, 5vw, 3rem)',
                lineHeight: 1.2,
                marginBottom: '8px',
                fontFamily: 'gd-boing'
              }}
            >
              Let's find Entertainment catered to you
            </Text>
            <Text
              c="white"
              mb="md"
              fw={600}
              style={{
                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                lineHeight: 1.6,
              }}
            >
              Look no further! Our STAGE tickets are the simplest and most elegant way for you to experience any event
            </Text>
            <Group gap="md" style={{ alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
              <Button
                size="lg"
                radius="xl"
                px="xl"
                style={{
                  backgroundColor: '#ec4899',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#db2777'
                  }
                }}
                onClick={onTicketClick}
              >
                Get Ticket
              </Button>
              <Button
                variant="outline"
                size="lg"
                radius="xl"
                px="xl"
                style={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#7c3aed'
                  }
                }}
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
          <Box style={{ position: 'relative' }}>
            <Image
              src="/heroImg.svg"
              alt='hero'
              radius="md"
              style={{
                width: '100%',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            />
            <Box
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -24,
                height: 48,
                backgroundColor: '#141572',
                opacity: 1,
                filter: 'blur(32px)',
                borderRadius: '0 0 12px 12px'
              }}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  </Box>
);

// Event Card Component
interface EventCardProps {
  date: string;
  month: string;
  title: string;
  description: string;
  image: string;
}
const EventCard = ({ date, month, title, description, image }: EventCardProps) => (
  <Card
    shadow="md"
    radius="lg"
    style={{
      backgroundColor: 'white',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s ease',
      width: '100%',
      maxWidth: '343px',
      margin: '0 auto',
      '&:hover': {
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }
    }}
  >
    <Card.Section>
      <Image
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '160px',
          objectFit: 'cover'
        }}
      />
    </Card.Section>
    <Box p="md">
      <Group gap="md" align="flex-start">
        <Box style={{ textAlign: 'center', flexShrink: 0 }}>
          <Text size="xs" c="#3D37F1">{month}</Text>
          <Text size="xl" fw={700} c="black">{date}</Text>
        </Box>
        <Box style={{ flex: 1 }}>
          <Text
            component="h3"
            fw={700}
            c="#374151"
            mb="xs"
            style={{ fontFamily: 'gd-boing' }}
          >
            {title}
          </Text>
          <Text size="sm" c="#6b7280">{description}</Text>
        </Box>
      </Group>
    </Box>
  </Card>
);

// Upcoming Events Section
interface UpcomingEventsProps {
  events: Array<{
    date: string;
    month: string;
    title: string;
    description: string;
    image: string;
    location: string;
    category: string;
    eventType: string;
  }>;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  eventTypeFilter: string;
  setEventTypeFilter: (value: string) => void;
  weekdayFilter: string;
  setWeekdayFilter: (value: string) => void;
  clearFilters: () => void;
}

const UpcomingEvents = ({
  events,
  categoryFilter,
  setCategoryFilter,
  eventTypeFilter,
  setEventTypeFilter,
  weekdayFilter,
  setWeekdayFilter,
  clearFilters
}: UpcomingEventsProps) => {

  return (
    <Box
      component="section"
      py="xl"
      px={{ base: 'md', sm: 'xl' }}
      style={{
        backgroundColor: '#f9fafb',
        paddingTop: '64px',
        paddingBottom: '64px'
      }}
    >
      <Container size="xl" style={{ maxWidth: '1280px' }}>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'flex-start', sm: 'center' }}
          justify="space-between"
          mb="xl"
          gap="md"
        >
          <Text
            component="h2"
            fw={700}
            c="#1a1a1a"
            style={{
              fontSize: '2rem',
              fontFamily: 'gd-boing',
              lineHeight: 1.2
            }}
          >
            Upcoming Events
          </Text>
          <Group gap="sm" style={{ flexWrap: 'nowrap' }} visibleFrom="sm">
            <Select
              data={[
                { value: '', label: 'Weekday' },
                { value: 'monday', label: 'Monday' },
                { value: 'tuesday', label: 'Tuesday' },
                { value: 'wednesday', label: 'Wednesday' },
                { value: 'thursday', label: 'Thursday' },
                { value: 'friday', label: 'Friday' },
                { value: 'saturday', label: 'Saturday' },
                { value: 'sunday', label: 'Sunday' }
              ]}
              placeholder="Weekday"
              value={weekdayFilter}
              onChange={(value) => setWeekdayFilter(value || '')}
              size="sm"
              radius="md"
              w={120}
              styles={{
                input: {
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: 500,
                  '&:focus': {
                    borderColor: '#3D37F1'
                  }
                },
                dropdown: {
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }
              }}
            />
            <Select
              data={[
                { value: '', label: 'Event Type' },
                { value: 'concert', label: 'Concert' },
                { value: 'conference', label: 'Conference' },
                { value: 'workshop', label: 'Workshop' },
                { value: 'festival', label: 'Festival' }
              ]}
              placeholder="Event Type"
              value={eventTypeFilter}
              onChange={(value) => setEventTypeFilter(value || '')}
              size="sm"
              radius="md"
              w={120}
              styles={{
                input: {
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: 500,
                  '&:focus': {
                    borderColor: '#3D37F1'
                  }
                },
                dropdown: {
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }
              }}
            />
            <Select
              data={[
                { value: '', label: 'Any Category' },
                { value: 'music', label: 'Music' },
                { value: 'technology', label: 'Technology' },
                { value: 'business', label: 'Business' },
                { value: 'arts', label: 'Arts' },
                { value: 'sports', label: 'Sports' }
              ]}
              placeholder="Any Category"
              value={categoryFilter}
              onChange={(value) => setCategoryFilter(value || '')}
              size="sm"
              radius="md"
              w={140}
              styles={{
                input: {
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  color: '#374151',
                  fontSize: '14px',
                  fontWeight: 500,
                  '&:focus': {
                    borderColor: '#3D37F1'
                  }
                },
                dropdown: {
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }
              }}
            />
          </Group>

          {/* Mobile filters */}
          <Stack gap="xs" hiddenFrom="sm" w="100%">
            <Group gap="xs">
              <Select
                data={[
                  { value: '', label: 'Weekday' },
                  { value: 'monday', label: 'Monday' },
                  { value: 'tuesday', label: 'Tuesday' },
                  { value: 'wednesday', label: 'Wednesday' },
                  { value: 'thursday', label: 'Thursday' },
                  { value: 'friday', label: 'Friday' },
                  { value: 'saturday', label: 'Saturday' },
                  { value: 'sunday', label: 'Sunday' }
                ]}
                placeholder="Weekday"
                value={weekdayFilter}
                onChange={(value) => setWeekdayFilter(value || '')}
                size="sm"
                radius="md"
                style={{ flex: 1 }}
              />
              <Select
                data={[
                  { value: '', label: 'Event Type' },
                  { value: 'concert', label: 'Concert' },
                  { value: 'conference', label: 'Conference' },
                  { value: 'workshop', label: 'Workshop' },
                  { value: 'festival', label: 'Festival' }
                ]}
                placeholder="Event Type"
                value={eventTypeFilter}
                onChange={(value) => setEventTypeFilter(value || '')}
                size="sm"
                radius="md"
                style={{ flex: 1 }}
              />
            </Group>
            <Group gap="xs">
              <Select
                data={[
                  { value: '', label: 'Any Category' },
                  { value: 'music', label: 'Music' },
                  { value: 'technology', label: 'Technology' },
                  { value: 'business', label: 'Business' },
                  { value: 'arts', label: 'Arts' },
                  { value: 'sports', label: 'Sports' }
                ]}
                placeholder="Any Category"
                value={categoryFilter}
                onChange={(value) => setCategoryFilter(value || '')}
                size="sm"
                radius="md"
                style={{ flex: 1 }}
              />
              <Button
                variant="outline"
                size="sm"
                radius="md"
                onClick={clearFilters}
                style={{
                  borderColor: '#3D37F1',
                  color: '#3D37F1',
                  fontSize: '14px',
                  minWidth: '100px'
                }}
              >
                Clear
              </Button>
            </Group>
          </Stack>
        </Flex>

        {events.length === 0 ? (
          <Box style={{ textAlign: 'center', padding: '48px 0' }}>
            <Text size="lg" c="#6b7280" mb="md">
              No events found matching your search criteria.
            </Text>
            <Button
              variant="outline"
              radius="xl"
              onClick={clearFilters}
              style={{
                borderColor: '#3D37F1',
                color: '#3D37F1',
                '&:hover': {
                  backgroundColor: '#3D37F1',
                  color: 'white'
                }
              }}
            >
              Clear Filters
            </Button>
          </Box>
        ) : (
          <Grid gutter="xl">
            {events.map((event, idx) => (
              <Grid.Col key={idx} span={{ base: 12, sm: 6, lg: 4 }}>
                <EventCard {...event} />
              </Grid.Col>
            ))}
          </Grid>
        )}

        <Box style={{ textAlign: 'center', marginTop: '32px' }}>
          <Button
            variant="outline"
            radius="xl"
            px="xl"
            style={{
              borderColor: '#3D37F1',
              color: '#3D37F1',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#3D37F1',
                color: 'white'
              }
            }}
          >
            Load More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

// Create Event Section
const CreateEventSection = ({ onCreateEventClick }: { onCreateEventClick: () => void }) => (
  <Box
    component="section"
    style={{
      position: 'relative',
      paddingTop: '100px', // Space for illustration to extend above
      paddingBottom: '60px'
    }}
  >
    {/* Purple Background Box - 300px height */}
    <Box
      style={{
        backgroundColor: '#e9d5ff',
        height: '252px',
        position: 'absolute',
        top: '100px', // Start below the space for illustration overflow
        left: 0,
        right: 0,
        zIndex: 1
      }}
    />

    <Container
      size="xl"
      style={{
        maxWidth: '1280px',
        position: 'relative',
        zIndex: 2,
        paddingLeft: '24px',
        paddingRight: '24px'
      }}
    >
      {/* Mobile Layout */}
      <Box hiddenFrom="md" style={{ textAlign: 'center' }}>
        <Stack align="center" gap="lg">
          <Image
            src="/createEvent.svg"
            alt="event"
            style={{
              height: '280px',
              width: 'auto',
              marginBottom: '20px'
            }}
          />
          <Text
            component="h2"
            fw={700}
            c="#374151"
            style={{
              fontSize: '2rem',
              fontFamily: 'gd-boing',
              marginBottom: '16px'
            }}
          >
            Make your own Event
          </Text>
          <Text
            c="#6b7280"
            size="lg"
            style={{
              marginBottom: '24px',
              lineHeight: 1.6
            }}
          >
            Create your event in a few minutes. It's easy, fast and free!
          </Text>
          <Button
            size="lg"
            radius="xl"
            px="xl"
            style={{
              backgroundColor: '#ec4899',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#db2777'
              }
            }}
            onClick={onCreateEventClick}
          >
            Create Event
          </Button>
        </Stack>
      </Box>

      {/* Desktop Layout */}
      <Grid visibleFrom="md" gutter="xl" style={{ height: '252px', position: 'relative' }}>
        {/* Image Section */}
        <Grid.Col span={6}>
          <Box style={{
            height: '252px', // Match the purple container height
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end', // Push content to bottom
            justifyContent: 'center'
          }}>
            <Image
              src="/createEvent.svg"
              alt="event"
              style={{
                height: '303px', // Tall enough to extend outside
                width: 'auto',
                maxWidth: '100%'
              }}
            />
          </Box>
        </Grid.Col>

        {/* Content Section */}
        <Grid.Col span={6}>
          <Box style={{
            paddingLeft: '40px',
            // paddingBottom: '40px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center the content vertically in the container
            alignItems: 'flex-start', // Align content to the left
            textAlign: 'left' // Left-align text
          }}>
            <Text
              component="h2"
              fw={700}
              c="#374151"
              style={{
                fontSize: '2.0rem',
                fontFamily: 'gd-boing',
                // marginBottom: '12px', // Reduced from 20px
                lineHeight: 1.2
              }}
            >
              Make your own Event
            </Text>
            <Text
              c="#6b7280"
              size="lg"
              style={{
                marginBottom: '20px', // Reduced from 32px
                lineHeight: 1.6,
                fontSize: '1.125rem'
              }}
            >
              Create your event in a few minutes. It's easy, fast and free!
            </Text>
            <Button
              size="lg"
              radius="xl"
              px="xl"
              style={{
                backgroundColor: '#ec4899',
                fontWeight: 600,
                fontSize: '1rem',
                height: '48px',
                width: 'fit-content',
                '&:hover': {
                  backgroundColor: '#db2777'
                }
              }}
              onClick={onCreateEventClick}
            >
              Create Event
            </Button>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  </Box>
);

// Brands Section
const BrandsSection = () => (
  <Box
    component="section"
    py="xl"
    px={{ base: 'md', sm: 'xl' }}
    style={{ paddingTop: '64px', paddingBottom: '64px' }}
  >
    <Container size="xl" style={{ maxWidth: '1280px', textAlign: 'center' }}>
      <Text
        component="h2"
        fw={700}
        c="#374151"
        mb="md"
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
          fontFamily: 'gd-boing'
        }}
      >
        Join these brands
      </Text>
      <Text
        c="#6b7280"
        mb="xl"
        style={{
          fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
          marginBottom: '48px'
        }}
      >
        We've had the pleasure of working with industry-defining brands. These are just some of them.
      </Text>

      <Stack gap="xl" align="center">
        {/* Top Row - 5 Logos */}
        <Group
          justify="center"
          gap="xl"
          style={{ flexWrap: 'wrap', flexDirection: 'row' }}
        >
          <Image src="/spotify.svg" alt="Spotify" style={{ width: 'auto', flexShrink: 0 }} />
          <Image src="/boxmall-sol-FINAL.png" alt="Google" style={{ width: 'auto', flexShrink: 0, height: '60px' }} />
          <Image src="/p-up-logo-4.svg" alt="Stripe" style={{ width: 'auto', flexShrink: 0, height: '60px' }} />
          {/* <Image src="/youtube.svg" alt="YouTube" style={{ width: 'auto', flexShrink: 0 }} />
          <Image src="/microsoft.svg" alt="Microsoft" style={{ width: 'auto', flexShrink: 0 }} /> */}
        </Group>

        {/* Bottom Row - 4 Logos */}
        {/* <Group
          justify="center"
          gap="xl"
          style={{ flexWrap: 'wrap', flexDirection:'row' }}
        >
          <Image src="/medium.svg" alt="Medium" style={{ width: 'auto',  flexShrink: 0 }} />
          <Image src="/zoom.svg" alt="Zoom" style={{ width: 'auto',  flexShrink: 0 }} />
          <Image src="/uber.svg" alt="Uber" style={{ width: 'auto',  flexShrink: 0 }} />
          <Image src="/grab.svg" alt="Grab" style={{ width: 'auto',  flexShrink: 0 }} />
        </Group> */}
      </Stack>
    </Container>
  </Box>
);

// Blog Card Component
interface BlogCardProps {
  title: string;
  description: string;
  image: string;
}
const BlogCard = ({ title, description, image }: BlogCardProps) => (
  <Card
    shadow="md"
    radius="lg"
    style={{
      backgroundColor: 'white',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s ease',
      height: 'auto',
      width: '100%',
      maxWidth: '343px',
      margin: '0 auto',
      '@media (min-width: 640px)': {
        height: '453px'
      },
      '&:hover': {
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }
    }}
  >
    <Card.Section>
      <Image
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '210px',
          objectFit: 'cover'
        }}
      />
    </Card.Section>
    <Box p="xl">
      <Text
        component="h3"
        c="#374151"
        mb="md"
        fw={700}
        style={{ fontFamily: 'gd-boing' }}
      >
        {title}
      </Text>
      <Text size="sm" c="#6b7280" mb="md">
        {description}
      </Text>
      <Group gap="md">
        <Text size="xs" c="#9ca3af">12 Nov - 2020</Text>
        <Text size="xs" c="#9ca3af">200 likes</Text>
      </Group>
    </Box>
  </Card>
);

// Blog Section
const BlogSection = () => {
  const blogs = [
    {
      title: '6 Strategies to Find Your Conference Keynote and Other Speakers',
      description: 'Sekerang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
      image: '/blog1.svg'
    },
    {
      title: 'How Successfully Used Paid Marketing to Drive Incremental Ticket Sales',
      description: 'Sekerang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
      image: '/blog2.svg'
    },
    {
      title: 'Introducing Workspaces: Work smarter, not harder with new navigation',
      description: 'Sekerang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
      image: '/blog3.svg'
    }
  ];

  return (
    <Box
      component="section"
      py="xl"
      px={{ base: 'md', sm: 'xl' }}
      style={{
        backgroundColor: '#f9fafb',
        paddingTop: '64px',
        paddingBottom: '64px'
      }}
    >
      <Container size="xl" style={{ maxWidth: '1152px' }}>
        <Box style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Text
            component="h2"
            fw={700}
            c="#374151"
            mb="md"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
              fontFamily: 'gd-boing'
            }}
          >
            Blog
          </Text>
          <Text c="#6b7280">
            Check out our latest articles and news
          </Text>
        </Box>

        <Grid gutter="xl">
          {blogs.map((blog, idx) => (
            <Grid.Col key={idx} span={{ base: 12, sm: 6, lg: 4 }}>
              <BlogCard {...blog} />
            </Grid.Col>
          ))}
        </Grid>

        <Box style={{ textAlign: 'center', marginTop: '32px' }}>
          <Button
            variant="outline"
            radius="xl"
            px="xl"
            style={{
              borderColor: '#3D37F1',
              color: '#3D37F1',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#3D37F1',
                color: 'white'
              }
            }}
          >
            Load More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

// Footer Component
const Footer = ({
  navigate,
  // onCreateAndSetUpClick, 
  onSellTicketsClick,
  onOnlineEventsClick
}: {
  navigate: (path: string) => void;
  // onCreateAndSetUpClick: () => void;
  onSellTicketsClick: () => void;
  onOnlineEventsClick: () => void;
}) => (
  <Box
    component="footer"
    style={{
      backgroundColor: '#1e1b4b', // Changed from '#312e81' to indigo-950
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
              size="xl"
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
          {/* <Group gap="xs">
            <Anchor
              href="#"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: '#1d4ed8'
                }
              }}
            >
              f
            </Anchor>
            <Anchor
              href="#"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#60a5fa',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: '#3b82f6'
                }
              }}
            >
              t
            </Anchor>
            <Anchor
              href="#"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#1d4ed8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: '#1e40af'
                }
              }}
            >
              in
            </Anchor>
          </Group> */}
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
          <Text fw={700} mb="md">Plan Events</Text>
          <Stack gap="xs">
            {/* <Anchor 
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
            </Anchor> */}
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
            {/* <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
              Online RSVP
            </Anchor> */}
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
          <Text fw={700} mb="md">Company</Text>
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
            {/* <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
              Help Center
            </Anchor> */}
            {/* <Anchor href="#" fw={600} c="#c4b5fd" size="sm" style={{ '&:hover': { color: 'white' } }}>
              How it Works
            </Anchor> */}
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

        {/* <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
          <Text fw={700} mb="md">Stay In The Loop</Text>
          <Text size="sm" c="#c4b5fd" mb="md" style={{ lineHeight: 1.6 }}>
            Join our mailing list to stay in the loop with our newest for Event and concert
          </Text>
          <Group
            style={{
              backgroundColor: 'white',
              borderRadius: '30px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              height: '60px',
              width: '100%',
              maxWidth: '300px',
              padding: '4px'
            }}
          >
            <TextInput
              placeholder="Enter your email address.."
              variant="unstyled"
              style={{
                flex: 1,
                fontSize: '10px',
                color: '#374151',
                paddingLeft: '12px'
              }}
            />
            <Button
              radius="xl"
              px="lg"
              style={{
                backgroundColor: '#ec4899',
                fontSize: '10px',
                fontWeight: 600,
                height: '48px',
                flexShrink: 0,
                '&:hover': {
                  backgroundColor: '#db2777'
                }
              }}
            >
              Subscribe Now
            </Button>
          </Group>
        </Grid.Col> */}
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

// Main App Component
// Helper function to transform Event data to EventCard format
const transformEventToCard = (event: Event) => {
  const startDate = new Date(event.start_date);
  const month = startDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const date = startDate.getDate().toString();

  return {
    date,
    month,
    title: event.title,
    description: event.description_preview || event.description || 'No description available',
    image: event.images?.[0]?.url || '/event1.svg', // Fallback to default image
    location: event.location_details?.venue_name ||
      event.location_details?.address_line_1 ||
      'Location TBD',
    category: event.category || 'General',
    eventType: 'Event' // Default event type since it's not in the Event interface
  };
};

// Fallback events data
const FALLBACK_EVENTS = [
  {
    date: '14',
    month: 'APR',
    title: 'Wonder Girls 2010 Wonder Girls World Tour San Francisco',
    description: "We'll get you directly seated and inside for you to enjoy the show.",
    image: '/event1.svg',
    location: 'San Francisco',
    category: 'Music',
    eventType: 'Concert'
  },
  {
    date: '20',
    month: 'AUG',
    title: 'JYJ 2011 JYJ Worldwide Concert Barcelona',
    description: 'Directly seated and inside for you to enjoy the show.',
    image: '/event2.svg',
    location: 'Barcelona',
    category: 'Music',
    eventType: 'Concert'
  },
  {
    date: '18',
    month: 'SEP',
    title: "2011 Super Junior SM Town Live '10 World Tour New York City",
    description: 'Directly seated and inside for you to enjoy the show.',
    image: '/event3.svg',
    location: 'New York City',
    category: 'Music',
    eventType: 'Concert'
  },
  {
    date: '14',
    month: 'APR',
    title: 'Wonder Girls 2010 Wonder Girls World Tour San Francisco',
    description: "We'll get you directly seated and inside for you to enjoy the show.",
    image: '/event4.svg',
    location: 'San Francisco',
    category: 'Music',
    eventType: 'Concert'
  },
  {
    date: '20',
    month: 'AUG',
    title: 'JYJ 2011 JYJ Worldwide Concert Barcelona',
    description: 'Directly seated and inside for you to enjoy the show.',
    image: '/event5.svg',
    location: 'Barcelona',
    category: 'Music',
    eventType: 'Concert'
  },
  {
    date: '18',
    month: 'SEP',
    title: "2011 Super Junior SM Town Live '10 World Tour New York City",
    description: 'Directly seated and inside for you to enjoy the show.',
    image: '/event6.svg',
    location: 'New York City',
    category: 'Music',
    eventType: 'Concert'
  }
];

export default function App() {
  const navigate = useNavigate();

  // Search state management
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState('');
  const [weekdayFilter, setWeekdayFilter] = useState('');

  // Fallback state management
  const [showFallback, setShowFallback] = useState(false);

  // Navigation handlers
  const handleCreateEventClick = () => {
    navigate('/auth/login');
  };

  const handleTicketClick = () => {
    const upcomingEventsSection = document.getElementById('upcoming-events');
    if (upcomingEventsSection) {
      upcomingEventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Footer navigation handlers
  const handleCreateAndSetUpClick = () => {
    navigate('/auth/login');
  };

  const handleSellTicketsClick = () => {
    navigate('/auth/login');
  };

  const handleOnlineEventsClick = () => {
    const upcomingEventsSection = document.getElementById('upcoming-events');
    if (upcomingEventsSection) {
      upcomingEventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fetch all public events
  const { data: eventsResponse, isLoading, error } = useQuery({
    queryKey: ['publicEvents'],
    queryFn: () => eventsClientPublic.all(),
  });

  // Handle fallback timeout when there's an error
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (error && !showFallback) {
      timeout = setTimeout(() => {
        setShowFallback(true);
      }, 5000);
    } else if (!error && showFallback) {
      // Reset fallback when there's no error
      setShowFallback(false);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [error, showFallback]);



  // Transform and filter events
  const transformedEvents = useMemo(() => {
    // Use fallback events if showing fallback, otherwise use API data
    if (showFallback) {
      // Handle fallback events
      let filteredFallbackEvents = FALLBACK_EVENTS;

      // Apply search query filter for fallback events
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        filteredFallbackEvents = filteredFallbackEvents.filter(event =>
          event.title.toLowerCase().includes(query) ||
          event.description?.toLowerCase().includes(query)
        );
      }

      // Apply location filter for fallback events
      if (locationFilter && locationFilter !== 'Any Location') {
        filteredFallbackEvents = filteredFallbackEvents.filter(event =>
          event.location?.toLowerCase().includes(locationFilter.toLowerCase())
        );
      }

      // Apply category filter for fallback events
      if (categoryFilter && categoryFilter !== 'Any Category') {
        filteredFallbackEvents = filteredFallbackEvents.filter(event =>
          event.category?.toLowerCase() === categoryFilter.toLowerCase()
        );
      }

      return filteredFallbackEvents;
    }

    // Handle API events
    if (!eventsResponse?.data) return [];

    let filteredEvents = eventsResponse.data;

    // Apply search query filter for API events
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filteredEvents = filteredEvents.filter(event =>
        event.title.toLowerCase().includes(query) ||
        event.description?.toLowerCase().includes(query) ||
        event.organizer?.name?.toLowerCase().includes(query)
      );
    }

    // Apply location filter for API events
    if (locationFilter && locationFilter !== 'Any Location') {
      filteredEvents = filteredEvents.filter(event =>
        event.location_details?.city?.toLowerCase().includes(locationFilter.toLowerCase()) ||
        event.location_details?.address_line_1?.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    // Apply category filter for API events
    if (categoryFilter && categoryFilter !== 'Any Category') {
      filteredEvents = filteredEvents.filter(event =>
        event.category?.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Apply date filter for API events
    if (dateFilter && dateFilter !== '') {
      const now = new Date();
      filteredEvents = filteredEvents.filter(event => {
        const eventDate = new Date(event.start_date);

        switch (dateFilter) {
          case 'today':
            return eventDate.toDateString() === now.toDateString();
          case 'tomorrow':
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            return eventDate.toDateString() === tomorrow.toDateString();
          case 'this_week':
            const weekStart = new Date(now);
            weekStart.setDate(now.getDate() - now.getDay());
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 7);
            return eventDate >= weekStart && eventDate < weekEnd;
          case 'this_month':
            return eventDate.getMonth() === now.getMonth() &&
              eventDate.getFullYear() === now.getFullYear();
          default:
            return true;
        }
      });
    }

    return filteredEvents.map(transformEventToCard);
  }, [eventsResponse?.data, searchQuery, locationFilter, categoryFilter, dateFilter, eventTypeFilter, showFallback]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setLocationFilter('');
    setDateFilter('');
    setCategoryFilter('');
    setEventTypeFilter('');
    setWeekdayFilter('');
  };

  // Determine what to show
  const shouldShowLoading = isLoading || (error && !showFallback);
  const shouldShowEvents = !isLoading && (!error || showFallback);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onCreateEventClick={handleCreateEventClick} onTicketClick={handleTicketClick} navigate={navigate} />
      <Box
        style={{
          position: 'relative',
          zIndex: 30,
          marginTop: '-48px',
          display: 'flex',
          justifyContent: 'center',
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width: 640px)': {
            paddingLeft: '24px',
            paddingRight: '24px'
          }
        }}
      >
        <Box
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1152px',
            backgroundColor: '#15178C',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            overflow: 'visible',
            '@media (min-width: 640px)': {
              padding: '24px'
            }
          }}
        >
          <Grid gutter="md">
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Text size="xs" c="rgba(196, 181, 253, 1)" mb="xs" style={{ display: 'block' }}>
                Search Event
              </Text>
              <TextInput
                placeholder="Search events..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.currentTarget.value)}
                variant="unstyled"
                style={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '14px',
                  fontFamily: 'gd-boing',
                  '& input': {
                    color: 'white',
                    backgroundColor: 'transparent',
                    border: 'none',
                    '&::placeholder': {
                      color: 'rgba(196, 181, 253, 0.7)'
                    }
                  }
                }}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Text size="xs" c="rgba(196, 181, 253, 1)" mb="xs" style={{ display: 'block' }}>
                Place
              </Text>
              <Select
                placeholder="Select location"
                value={locationFilter}
                onChange={(value) => setLocationFilter(value || '')}
                data={[
                  { value: '', label: 'All Locations' },
                  { value: 'Abuja', label: 'Abuja' },
                  { value: 'Lagos', label: 'Lagos' },
                  // { value: 'New York City', label: 'New York City' }
                ]}
                // variant="unstyled"
                style={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '14px',
                  fontFamily: 'gd-boing',
                  '& input': {
                    color: 'white',
                    backgroundColor: 'transparent',
                    border: 'none'
                  }
                }}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 12, md: 4 }}>
              <Text size="xs" c="rgba(196, 181, 253, 1)" mb="xs" style={{ display: 'block' }}>
                Time
              </Text>
              <Group justify="space-between" align="center">
                <Group justify="space-between" style={{ flex: 1, paddingBottom: '4px' }}>
                  <Select
                    placeholder="Any date"
                    value={dateFilter}
                    onChange={(value) => setDateFilter(value || '')}
                    data={[
                      { value: '', label: 'Any date' },
                      { value: 'today', label: 'Today' },
                      { value: 'tomorrow', label: 'Tomorrow' },
                      { value: 'this_week', label: 'This week' },
                      { value: 'this_month', label: 'This month' }
                    ]}
                    // variant="unstyled"
                    style={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '14px',
                      fontFamily: 'gd-boing',
                      flex: 1,
                      '& input': {
                        color: 'white',
                        backgroundColor: 'transparent',
                        border: 'none'
                      }
                    }}
                  />
                  <IconChevronDown size={16} />
                </Group>
              </Group>
            </Grid.Col>
          </Grid>

          {/* Shadow BELOW only for this container */}
          <Box
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: '-24px',
              height: '40px',
              backgroundColor: 'rgba(61, 55, 241, 0.19)',
              filter: 'blur(48px)',
              borderRadius: '0 0 12px 12px'
            }}
          />
        </Box>
      </Box>

      {/* Loading state - only show when actually loading or waiting for fallback */}
      {shouldShowLoading && (
        <Box style={{ textAlign: 'center', padding: '40px' }}>
          <Loader size="lg" />
          <Text mt="md" c="#6b7280">Loading events...</Text>
        </Box>
      )}

      {/* Events section - show when not loading and either no error or showing fallback */}
      {shouldShowEvents && (
        <div id="upcoming-events">
          <UpcomingEvents
            events={transformedEvents}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            eventTypeFilter={eventTypeFilter}
            setEventTypeFilter={setEventTypeFilter}
            weekdayFilter={weekdayFilter}
            setWeekdayFilter={setWeekdayFilter}
            clearFilters={clearFilters}
          />
        </div>
      )}

      <div id="create-event-section">
        <CreateEventSection onCreateEventClick={handleCreateEventClick} />
      </div>
      <BrandsSection />
      {/* <BlogSection /> */}
      <Footer
        navigate={navigate}
        // onCreateAndSetUpClick={handleCreateAndSetUpClick}
        onSellTicketsClick={handleSellTicketsClick}
        onOnlineEventsClick={handleOnlineEventsClick}
      />
    </div>
  );
}