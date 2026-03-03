# Use Node 22 (required for Storybook v10)
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy entire project
COPY . .

# Expose port 8083
EXPOSE 8083

# Run Storybook on port 8083
CMD ["npm", "run", "storybook", "--", "-p", "8083", "--host", "0.0.0.0"]