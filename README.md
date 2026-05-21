## AuraTiles — Next.js app (with Better Auth + MongoDB)

This repository is a Next.js (App Router) project that uses Better Auth for
authentication and MongoDB (Atlas) as the database. It can be extended with
AI integrations (OpenAI, Hugging Face, or local models) — instructions below.

**Live preview:** https://a-8-skil-shaper.vercel.app

**Quick summary:** auth (email/password + Google OAuth), protected routes,
profile editing, responsive UI with Tailwind + DaisyUI.

**Prerequisites**
- Node.js 18 or 20
- npm (bundled) or compatible package manager
- MongoDB Atlas cluster (connection string)

**Local setup**
- Install dependencies:

```bash
npm install
```
- Start dev server:

```bash
npm run dev
```

**Important npm scripts**
- `dev`: runs Next.js in development (`next dev`)
- `build`: builds for production (`next build`)
- `start`: runs the production server (`next start`)
- `lint`: runs ESLint

**Environment variables**
Create a `.env.local` in the project root (this file is gitignored).

Example `.env.local`:

```env
MONGO_URI="mongodb+srv://<db_username>:<db_password>@cluster0.sq0nbb4.mongodb.net/?appName=Cluster0"
GOOGLE_CLIENT_ID="<your-google-client-id>"
GOOGLE_CLIENT_SECRET="<your-google-client-secret>"
NEXT_PUBLIC_BETTER_AUTH_URL="/api/auth"
# Optional for AI features:
OPENAI_API_KEY="sk-..."
HUGGINGFACE_API_KEY="hf_..."
```

**Notes on env vars**
- `MONGO_URI` is used server-side (do not expose it publicly).
- `NEXT_PUBLIC_BETTER_AUTH_URL` is intentionally public so the client can
  call the auth endpoint.

**AI integration (optional)**
- To call OpenAI or similar from the server, add `OPENAI_API_KEY` and use it
  in server-side routes (never expose secret keys to the browser).
- For in-browser AI usage, proxy requests through server routes to keep keys
  private; or use `NEXT_PUBLIC_` prefixed tokens only for public-only services.

**Database**
- The project connects to MongoDB via `MONGO_URI`. Example client initialization
  is in `src/lib/auth.js`.

**Authentication**
- Server config: `src/lib/auth.js`
- Client helper: `src/lib/auth-client.js`
- API handler for Better Auth: `src/app/api/auth/[...all]/route.js`

**Security**
- Never commit `.env.local` or credentials to git. Rotate secrets if leaked.

**Deploy**
- Works on Vercel or any Node hosting that supports Next.js. Add env vars in
  the platform's dashboard (Vercel, Render, etc.).

**Where to edit**
- Auth server config: [src/lib/auth.js](src/lib/auth.js)
- Auth client config: [src/lib/auth-client.js](src/lib/auth-client.js)
- API route: [src/app/api/auth/[...all]/route.js](src/app/api/auth/[...all]/route.js)

If you'd like, I can:
- add an `AI` section with example server route using OpenAI, or
- add a setup script that validates env vars before starting.
