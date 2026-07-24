#!/bin/bash

echo "Installing Vercel CLI..."
npm install -g vercel

echo "Logging into Vercel..."
vercel login

echo "Deploying to production..."
vercel --prod

echo "Deployment complete!"
