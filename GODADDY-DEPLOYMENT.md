# Deploying to GoDaddy Hosting

This guide provides step-by-step instructions for deploying your Ayushman Nagpur Hospital website on GoDaddy hosting.

## Prerequisites

1. A GoDaddy hosting plan (Linux-based with Node.js support)
2. Your domain (ayushmannagpurhospital.com) purchased from GoDaddy
3. FTP access to your hosting account
4. SSH access to your hosting (for most reliable deployment)

## Option 1: Using GoDaddy cPanel Hosting (Shared Hosting)

### Step 1: Prepare Your Application for Upload

1. Make sure you have a working production build:
   ```bash
   npm run build
   ```

2. Create a ZIP file of your application:
   ```bash
   # On Mac/Linux
   zip -r ayushman-hospital.zip .next node_modules package.json public .env.production next.config.js
   ```

### Step 2: Upload via cPanel File Manager

1. Log in to your GoDaddy cPanel
2. Open File Manager
3. Navigate to your domain's root directory (typically public_html)
4. Upload and extract the ZIP file

### Step 3: Set Up Node.js App in cPanel

1. In cPanel, find "Setup Node.js App" or similar
2. Create a new Node.js application:
   - Application mode: Production
   - Node.js version: 18.x (or latest available)
   - Application root: The directory where you extracted files
   - Application URL: ayushmannagpurhospital.com
   - Application startup file: node_modules/.bin/next start

2. Set environment variables:
   - NODE_ENV: production
   - PORT: 3000 (or as assigned by GoDaddy)

3. Start the application

## Option 2: Using GoDaddy VPS (Recommended for Better Performance)

### Step 1: Connect to Your VPS

```bash
ssh username@your-server-ip
```

### Step 2: Install Required Software

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Set up firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw enable
```

### Step 3: Set Up MongoDB Atlas

1. Create a free MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster and database user
3. Get your connection string
4. Update the `.env.production` file with your MongoDB connection string

### Step 4: Deploy Your Application

```bash
# Create directory for your app
sudo mkdir -p /var/www/ayushman-hospital

# Set proper ownership
sudo chown -R $USER:$USER /var/www/ayushman-hospital

# Clone or copy your files
# If using SCP from local machine:
# scp -r .next node_modules package.json public .env.production next.config.js username@your-server-ip:/var/www/ayushman-hospital

# Navigate to app directory
cd /var/www/ayushman-hospital

# Install dependencies (if needed)
npm ci --production

# Start with PM2
pm2 start npm --name "ayushman-hospital" -- start
pm2 save
pm2 startup
```

### Step 5: Configure Nginx

```bash
# Copy the Nginx configuration
sudo cp nginx-godaddy.conf /etc/nginx/sites-available/ayushman-hospital
sudo ln -s /etc/nginx/sites-available/ayushman-hospital /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### Step 6: Set Up SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d ayushmannagpurhospital.com -d www.ayushmannagpurhospital.com
```

## Troubleshooting

### MongoDB Connection Issues

If you see errors like "querySrv ENOTFOUND _mongodb._tcp.cluster0.mongodb.net":

1. Make sure your MongoDB Atlas cluster is properly configured
2. Verify your connection string in .env.production
3. Check if your IP address is whitelisted in MongoDB Atlas

### Application Not Starting

1. Check logs with: `pm2 logs ayushman-hospital`
2. Ensure proper Node.js version is installed
3. Verify all dependencies are installed: `npm ci --production`

### Nginx Not Serving Your Application

1. Check Nginx error logs: `sudo cat /var/log/nginx/error.log`
2. Verify your application is running: `pm2 status`
3. Ensure the Nginx configuration points to the correct port

## Updating Your Website

To update your website in the future:

1. Upload new files to your server
2. Rebuild if necessary: `npm run build`
3. Restart your application: `pm2 restart ayushman-hospital` 