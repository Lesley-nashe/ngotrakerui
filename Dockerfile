# === 1. Build Stage ===================================
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only the files needed to install dependencies
COPY package*.json ./
RUN npm ci

# Copy the full project and build it
COPY . .

# Build with standalone output
RUN npm run build

# === 2. Production Image ==============================
FROM node:18-alpine AS runner

WORKDIR /app

# Minimal runtime dependencies only
ENV NODE_ENV=production

# Copy the standalone .next output and required files
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Set port and start the app
EXPOSE 3000
CMD ["node", "server.js"]
