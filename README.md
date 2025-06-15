# politzek.org – Platform for Supporting Political Prisoners in Russia

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The platform provides a searchable database and information hub for political prisoners in Russia.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Code Generation](#code-generation)
- [Testing & Linting](#testing--linting)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search and filter political prisoners by region, age, gender, and interests
- Detailed prisoner profiles with articles, photos, and status
- Letter writing support for prisoners
- Responsive UI with custom theming
- Data fetching via GraphQL (Apollo Client)
- Storybook for UI component development
- Docker support for containerized deployment

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [MUI (Material UI)](https://mui.com/)
- [Storybook](https://storybook.js.org/)
- [Docker](https://www.docker.com/)
- [Supabase](https://supabase.com/) (API backend)
- [Moment.js](https://momentjs.com/) (date formatting)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/politzek-frontend.git
   cd politzek-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in the required values.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/                # Next.js app directory (pages, layouts, components)
│   ├── components/     # Shared and feature components
│   ├── prisoner/       # Dynamic prisoner profile pages
│   ├── prisoners/      # Prisoners list and search
│   └── ...             # Other routes and assets
├── apollo/             # Apollo GraphQL setup and generated types
├── gql/                # GraphQL queries and fragments
├── helpers/            # Utility functions (e.g., getRegions)
├── theming/            # Theme configuration for MUI
├── public/             # Static assets (images, icons)
├── .storybook/         # Storybook configuration
├── Dockerfile          # Docker build instructions
├── docker-compose.yml  # Docker Compose setup
├── codegen.ts          # GraphQL codegen config
├── package.json
└── ...
```

## Environment Variables

Create a `.env.local` file based on `.env.example`. Required variables include:

- `NEXT_PUBLIC_API_URL` – GraphQL API endpoint
- `NEXT_PUBLIC_SUPABASE_KEY` – Supabase API key

## Scripts

- `dev` – Start the development server
- `build` – Build the application for production
- `start` – Start the production server
- `lint` – Run ESLint
- `storybook` – Run Storybook for UI development
- `codegen` – Generate GraphQL types

## Code Generation

GraphQL types and hooks are generated using [GraphQL Code Generator](https://www.graphql-code-generator.com/):

```bash
npm run codegen
```

Configuration is in [`codegen.ts`](codegen.ts).

## Testing & Linting

- **Linting:**  
  Run `npm run lint` to check code style and quality. Pre-commit hooks are set up via Husky.

- **Formatting:**  
  Uses Prettier (`.prettierrc`).

## Deployment

### Vercel

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Docker

Build and run with Docker:

```bash
docker build -t politzek-frontend .
docker run -p 3000:3000 --env-file .env.local politzek-frontend
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

[MIT](LICENSE) © politzek.org contributors