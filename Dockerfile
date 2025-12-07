# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better build caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build Next.js app
RUN npm run build

# Runner stage
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only necessary output from builder
COPY --from=builder /app ./

# Expose Next.js port
EXPOSE 3000

CMD ["npm", "start"]
