# TourTap

*Your control center for managing group tours!*

TourTap is built with a simple, event-driven setup:

- Backend: Go (REST API + booking workflow logic)
- Message Broker: RabbitMQ (asynchronous event processing)
- Frontend: Vue + TypeScript
- Database: PostgreSQL with sqlc
- Containerization: Docker
- Orchestration: Docker Compose

The application currently runs as a monolith, but the codebase is structured in a modular way. If needed, parts of the system could be split into separate services later.

The project intentionally starts as a monolith to keep deployment simple and operational overhead low.


### Try the demo:

Admin: <https://tourtap.dev/>

Customer Booking: <https://booking.tourtap.dev/>

Log in with the demo credentials

- Email: `test@email.com`
- Password: `password`

Please note that the UI isn't adapted for phone screens yet.

## Motivation

First-hand experience of handling large quantities of tour bookings manually. This experience made me think how to automate the workflow.

### Goal

- An open source alternative for smaller companies to automate their workflow regarding bookings, without breaking the bank and without the need to be a coding virtuoso.
- Simplicity and mobility: Containerization makes it a breeze to either self-host or run in the cloud.

## Quick Start

### Requirements

- Docker
- Docker Compose

### Installation

1. Clone this repo
2. Create a new `.env` file (or rename `.env.example` and update the values)
3. Start the development environment:

```bash
docker compose -f docker-compose.dev.yml up --build
```

The development environment includes:

- Frontend
- Backend
- PostgreSQL database
- RabbitMQ message broker
- Database migrations
- Demo user seeding

Remember to backup your database!

## Usage

### Local development

The admin interface is available at: <http://localhost:5371/>

The customer booking form is available at: <http://booking.localhost:5371>

Demo credentials:
- Email: `test@email.com`
- Password: `password`

The local development setup supports hot reloading of the frontend.

### Production deployment

The production environment uses Docker Compose together with GitHub Actions.

When changes are pushed to the deployment branch:

1. GitHub Actions builds Docker images for:
- Frontend
- Backend
- Database migration service

2. Images are pushed to GHCR
3. The production server pulls the latest images and restarts the Docker Compose stack.

The production environment uses the same containerized architecture as local development, keeping deployment simple and reproducible.

## Workflow

- New bookings pop up under the **Pending** tab.
- Accepting a request creates a booking.
- If more groups join the same tour on the same date they are merged into the same booking.
- Active bookings can be viewed and filtered by date under the **Bookings** tab.

## Noteworthy features

- Secure API with JWT authentication and refresh tokens.
- Real-time toast notifications via SSE.
- Event-driven booking workflow using RabbitMQ
- Fully containerized setup with database, broker, migrations etc
- Automated database migrations and demo user seeding for local development.
- Production deployment using GitHub Actions and Docker images.

## Status/Future of TourTap

This project is in active development.

### Planned features

- Complete JWT protection on the remaining endpoints.
- Automatic Email Notifications.
- PayPal integration.
- Individual group detail page.
- Admin page for:
  - creating users
  - creating tours
- Expanded test suite.
- Adapt to phone screens.

## Contributing

If you would like to contribute, fork the repo and open a pull request to the `main` branch.

Any help and feedback is welcome!
