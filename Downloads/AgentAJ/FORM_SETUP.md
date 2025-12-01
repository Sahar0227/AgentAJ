# Contact Form Setup Instructions

## Quick Setup Steps

### 1. Get Your Formspree Form ID

1. Go to **https://formspree.io** and sign up (free account)
2. Click **"New Form"** 
3. Set the email to: **homesbyjawid@gmail.com**
4. Copy your **Form ID** (looks like: `xvgkqyzw` or `abc123def`)

### 2. Update contact.html

Open `contact.html` and find this line:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual Formspree Form ID.

For example, if your Form ID is `xvgkqyzw`, it should be:
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xvgkqyzw" method="POST">
```

### 3. Test the Form

1. Deploy your changes to Vercel
2. Visit your contact page
3. Fill out and submit the form
4. Check homesbyjawid@gmail.com for the email

## Alternative: EmailJS (If you prefer)

If you'd rather use EmailJS instead:

1. Sign up at **https://www.emailjs.com** (free)
2. Create an email service connected to Gmail
3. Get your Service ID, Template ID, and Public Key
4. I can update the code to use EmailJS instead - just let me know!

## Current Setup

The form is already configured to:
- ✅ Send emails to: **homesbyjawid@gmail.com**
- ✅ Include all form fields (name, email, phone, message)
- ✅ Show success/error messages
- ✅ Format the email nicely with all contact details

You just need to add your Formspree Form ID!

