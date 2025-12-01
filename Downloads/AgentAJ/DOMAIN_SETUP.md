# Connecting Your Domain (agentaj.ca) to Vercel

Follow these steps to connect your custom domain to your Vercel deployment:

## Step 1: Get Your Formspree Form ID

1. Go to [Formspree.io](https://formspree.io) and sign up for a free account
2. Click "New Form" and create a form
3. Set the email recipient to: `homesbyjawid@gmail.com`
4. Copy your Form ID (it will look like: `xvgkqyzw` or similar)
5. Replace `YOUR_FORM_ID` in `contact.html` with your actual Form ID

## Step 2: Add Domain to Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Click on your **AgentAJ** project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter `agentaj.ca` and click **Add**
6. You'll see DNS configuration instructions

## Step 3: Configure DNS Records

You need to add DNS records at your domain registrar (where you bought agentaj.ca):

### Option A: Root Domain (agentaj.ca)
Add these DNS records:

**Type:** `A`  
**Name:** `@` (or leave blank)  
**Value:** `76.76.21.21`

**Type:** `CNAME`  
**Name:** `www`  
**Value:** `cname.vercel-dns.com.`

### Option B: If your registrar doesn't support A records for root domain
Add this CNAME record:

**Type:** `CNAME`  
**Name:** `@`  
**Value:** `cname.vercel-dns.com.`

## Step 4: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate
- Vercel will automatically detect when DNS is configured correctly
- You can check status in Vercel dashboard under **Domains**

## Step 5: SSL Certificate

- Vercel automatically provisions SSL certificates for your domain
- Once DNS is configured, HTTPS will be enabled automatically
- This usually takes a few minutes after DNS is verified

## Troubleshooting

- If domain doesn't connect: Check DNS records are correct at your registrar
- If SSL fails: Wait a few hours for DNS to fully propagate
- Check Vercel dashboard for any error messages

## Alternative: Using a Subdomain

If you prefer, you can use a subdomain like `www.agentaj.ca`:
- Just add the CNAME record for `www` pointing to `cname.vercel-dns.com.`
- This is often easier and faster to set up

