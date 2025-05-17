# Kananko Waitlist Landing Page

A dark-themed landing page for Kananko, the luggage delivery network that connects trusted transporters with people who want to send packages between countries.

## Features

- Modern dark-themed UI inspired by web3 designs
- Responsive waitlist form with sleek input fields
- Form data stored in Supabase
- Built with Next.js and Tailwind CSS

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory with your Supabase credentials:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

   > **Note:** The app includes a fallback for development mode if no environment variables are set, but for production you must set these values.

4. Make sure you have a Supabase table named `waitlist` with the following columns:
   - `id` (uuid, primary key)
   - `name` (text, required)
   - `email` (text, required)
   - `route` (text, required)
   - `company_name` (text, nullable)
   - `is_incorporated` (boolean, required)
   - `created_at` (timestamp with timezone, defaulted to `now()`)

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project can be deployed on Vercel, Netlify, or any other platform that supports Next.js.

Make sure to add your environment variables to your deployment platform.
