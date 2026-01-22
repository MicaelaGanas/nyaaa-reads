# Contact Form Setup Guide

## What's Been Added

1. **ContactForm Component** (`app/components/ContactForm.tsx`)
   - Modern contact form with social media links
   - Direct links to your GitHub, Facebook, Instagram, and email
   - Message form that sends emails directly to mikaysabelbg14@gmail.com

2. **Contact API Route** (`app/api/contact/route.ts`)
   - Handles form submissions
   - Sends emails using Resend API service

3. **Navigation Updates**
   - "Contact Developer" link added to Header info menu
   - "Contact Developer" link added to Footer
   - Proper routing integrated throughout the app

4. **Social Media Links**
   - GitHub: https://github.com/MicaelaGanas
   - Facebook: https://www.facebook.com/mikyeonie13/
   - Instagram: https://www.instagram.com/leblaine_reset/
   - Email: mikaysabelbg14@gmail.com

## Setup Instructions

### Step 1: Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address
4. Go to API Keys section
5. Create a new API key
6. Copy the API key (starts with `re_`)

### Step 2: Configure Environment Variable

1. Create a file named `.env.local` in the root directory
2. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Replace `re_your_actual_api_key_here` with your actual Resend API key

### Step 3: Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain in Resend:

1. Go to Resend dashboard → Domains
2. Add your domain
3. Add the DNS records they provide
4. Update the API route to use your verified domain in the "from" field

**Current setting** (for testing):
```typescript
from: "NyaaReads Contact <onboarding@resend.dev>"
```

**Production setting** (after domain verification):
```typescript
from: "NyaaReads Contact <contact@yourdomain.com>"
```

### Step 4: Test the Contact Form

1. Run the development server: `npm run dev`
2. Navigate to the app
3. Click "Info" menu in the header
4. Click "Contact Developer"
5. Fill out the form and submit
6. Check your email at mikaysabelbg14@gmail.com

## Features

- **Direct Contact**: Users can send messages directly to your email
- **Social Links**: Quick access to all your social media profiles
- **Form Validation**: Built-in validation ensures all fields are filled
- **Success/Error Messages**: Users get feedback when they submit the form
- **Mobile Responsive**: Works perfectly on all device sizes
- **Consistent Theme**: Matches the aquamarine color scheme of your site

## Free Tier Limits (Resend)

- 100 emails per day
- 3,000 emails per month
- Perfect for a personal portfolio site!

## Troubleshooting

**Issue**: Form submission fails
- **Solution**: Make sure your `.env.local` file has the correct RESEND_API_KEY

**Issue**: Emails not arriving
- **Solution**: Check your spam folder, or verify your Resend account is active

**Issue**: Build errors
- **Solution**: Make sure you've installed all dependencies with `npm install`

## Next Steps

1. Set up your Resend account
2. Add the API key to `.env.local`
3. Test the contact form
4. (Optional) Verify your domain for production use
5. Deploy your site!

Enjoy your new contact form! 🎉
