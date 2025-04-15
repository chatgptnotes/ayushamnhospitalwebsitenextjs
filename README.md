# Ayushman Nagpur Hospital Website

A professional website for Ayushman Nagpur Hospital, showcasing orthopedic services provided by Dr. Murali B.K.

## Project Overview

This website includes:
- Homepage with hospital information
- Services/Procedures pages
- Blog section with health articles
- Doctor profile for Dr. Murali B.K.
- Contact information

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Server Deployment Guide

This guide walks through deploying the website to a Linux VPS (Ubuntu/Debian).

### Prerequisites

- A VPS or cloud server (DigitalOcean, AWS, Linode, etc.)
- Domain name pointing to your server
- SSH access to your server

### Step 1: Server Setup

```bash
# Update server packages
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Set up firewall if needed
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw enable
```

### Step 2: Deploy Application

```bash
# Clone repository (if using Git)
git clone <your-repo-url> /var/www/ayushman-hospital

# Or upload files via SFTP
# scp -r ./test-next-app username@your_server_ip:/var/www/ayushman-hospital

# Navigate to application directory
cd /var/www/ayushman-hospital

# Edit .env.local file with MongoDB Atlas connection
# Note: You MUST set up MongoDB Atlas and update the connection string

# Run deployment script
./deploy.sh
```

### Step 3: Configure Nginx

```bash
# Copy Nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/ayushman-hospital

# Create symlink to enable site
sudo ln -s /etc/nginx/sites-available/ayushman-hospital /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### Step 4: Set Up SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d ayushmannagpurhospital.com -d www.ayushmannagpurhospital.com

# Certbot will automatically update your Nginx configuration
```

### MongoDB Setup

For production, you'll need to use MongoDB Atlas:

1. Create a free account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Set up a database user with password
4. Get your connection string from Atlas dashboard
5. Update the `.env.local` file with your connection string

## Maintenance

- To view logs: `pm2 logs ayushman-hospital`
- To restart application: `pm2 restart ayushman-hospital`
- To pull updates: Update your code then run `./deploy.sh`

## Alternative Hosting Options

For simpler deployment, consider:
- Vercel: Connect GitHub repo for automatic deployment
- Netlify: Similar to Vercel, with free tier available
- AWS Amplify: Good for AWS users
