#!/bin/bash

# Set the output directory
OUTPUT_DIR="./ayushman-hospital-deploy"

# Clean any existing output directory
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

# Build the application if not already built
echo "Building the application..."
npm run build

# Copy necessary files
echo "Copying files to deployment package..."
cp -r .next "$OUTPUT_DIR/"
cp -r public "$OUTPUT_DIR/"
cp package.json "$OUTPUT_DIR/"
cp package-lock.json "$OUTPUT_DIR/"
cp next.config.js "$OUTPUT_DIR/"
cp .env.production "$OUTPUT_DIR/"
cp nginx-godaddy.conf "$OUTPUT_DIR/"
cp GODADDY-DEPLOYMENT.md "$OUTPUT_DIR/README.md"
cp deploy.sh "$OUTPUT_DIR/"
cp ecosystem.config.js "$OUTPUT_DIR/"

# Create a minimal node_modules with only production dependencies
echo "Installing production dependencies..."
cd "$OUTPUT_DIR"
npm ci --production

# Create a zip file
echo "Creating zip archive..."
cd ..
zip -r ayushman-hospital-deploy.zip "$OUTPUT_DIR"

echo "Deployment package created: ayushman-hospital-deploy.zip"
echo "Upload this file to your GoDaddy hosting and follow the instructions in GODADDY-DEPLOYMENT.md" 