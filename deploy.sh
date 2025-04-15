#!/bin/bash

# Stop any running applications
pm2 stop ayushman-hospital || true
pm2 delete ayushman-hospital || true

# Pull latest changes if using Git
# git pull origin main

# Install dependencies
npm install

# Build the application
npm run build

# Start the application with PM2
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

# Restart Nginx
sudo systemctl restart nginx

echo "Deployment completed successfully!" 