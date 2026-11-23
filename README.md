# Omegup

Marketing site for the Omegup studio. The pages keep the original layout. Sections live under `src/components/sections`, the header and footer under `src/components/layout`.

## Develop

```bash
cp .env.example .env.local
npm install
npm run dev
```

Set `MONGODB_URI` before using the contact form. Messages are validated in `src/lib/contact.ts` and stored through `src/app/api/contact`.

## Production

```bash
npm run build
npm start
```

The Docker image builds the Next.js standalone output and listens on port 3000.
