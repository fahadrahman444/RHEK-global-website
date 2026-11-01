# Rate Global — Production Launch & Deployment Guide

This document outlines the standard production launch procedures for the Rate Global company profile website in fulfillment of **Phase 5 (Launch)** from [`docs/SRS.md`](file:///home/fahad/Desktop/rate-global-website/docs/SRS.md#L1121-L1126).

---

## 1. Hosting Architecture Options

The Rate Global website is built on **Next.js 15 (App Router)** and TypeScript. It can be deployed via managed cloud platforms or self-hosted Linux VPS.

### Option A: Self-Hosted Linux VPS (Ubuntu/Debian) with PM2 & Nginx (Recommended for Full Control)
* **Process Supervisor:** PM2 (Cluster Mode) via [`ecosystem.config.js`](file:///home/fahad/Desktop/rate-global-website/ecosystem.config.js) or Systemd unit [`deployment/rateglobal.service`](file:///home/fahad/Desktop/rate-global-website/deployment/rateglobal.service).
* **Reverse Proxy:** Nginx via [`deployment/nginx-rateglobal.conf`](file:///home/fahad/Desktop/rate-global-website/deployment/nginx-rateglobal.conf).
* **SSL Certificate:** Free automated Let's Encrypt TLS via `certbot`.

### Option B: Managed Edge Platform (Vercel / Cloudflare)
* Connect repository directly to Vercel or Cloudflare Pages.
* Framework Preset: Next.js.
* Build Command: `npm run build`.
* Output Directory: Automatically detected.

---

## 2. Step-by-Step Linux VPS Deployment

### Step 1: Clone & Install Dependencies
```bash
git clone <repository_url> /var/www/rateglobal
cd /var/www/rateglobal
npm ci
```

### Step 2: Configure Environment Variables
```bash
cp .env.example .env.production
# Adjust NEXT_PUBLIC_SITE_URL or custom ports if required
```

### Step 3: Compile Production Build
```bash
npm run build
```

### Step 4: Start Process with PM2
```bash
# Start cluster with zero-downtime autorestart
pm2 start ecosystem.config.js

# Save PM2 process list to restore on server reboots
pm2 save
pm2 startup
```

### Step 5: Configure Nginx & SSL
```bash
# Copy and enable Nginx site configuration
sudo cp deployment/nginx-rateglobal.conf /etc/nginx/sites-available/rateglobal
sudo ln -s /etc/nginx/sites-available/rateglobal /etc/nginx/sites-enabled/

# Verify Nginx syntax
sudo nginx -t

# Obtain Let's Encrypt Certificate
sudo certbot --nginx -d rateglobal.com -d www.rateglobal.com

# Reload Nginx
sudo systemctl reload nginx
```

---

## 3. Domain & DNS Configuration

Configure the following DNS records at your domain registrar:

| Record Type | Host | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `<YOUR_SERVER_IP>` | 300 / Auto |
| **CNAME** | `www` | `rateglobal.com` | 300 / Auto |

---

## 4. Post-Launch Verification & Search Engine Onboarding

Once DNS and SSL propagation are complete, perform these post-launch checks:

1. **HTTPS Enforcement:**
   * Verify visiting `http://rateglobal.com` automatically redirects to `https://rateglobal.com`.
2. **Form Delivery Smoke Test:**
   * Submit an inquiry through `/contact` or the homepage modal.
   * Verify response time is `< 500ms` and confirmation state renders cleanly.
3. **Search Engine Sitemap Registration:**
   * Submit `https://rateglobal.com/sitemap.xml` to [Google Search Console](https://search.google.com/search-console).
   * Submit sitemap to Bing Webmaster Tools.
4. **Crawl Directive Verification:**
   * Verify `https://rateglobal.com/robots.txt` displays valid directives.
5. **Core Web Vitals Benchmark:**
   * Run [Google PageSpeed Insights](https://pagespeed.web.dev/) against `https://rateglobal.com`.
   * Verify LCP $\le 2.5\text{s}$, CLS $\le 0.1$, and INP $\le 200\text{ms}$.
