# 📧 Formspree Setup Guide

## Steps to Connect Your Contact Form

1. **Go to [formspree.io](https://formspree.io)** and sign up (free)

2. **Create a new form:**
   - Click "New Form"
   - Enter your email: `umaraidevs@gmail.com`
   - Copy your Form ID (looks like: `abc123xyz`)

3. **Update the code:**
   - Open `src/components/Contact.tsx`
   - Find line: `const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {`
   - Replace `YOUR_FORM_ID` with your actual Form ID

4. **Done!** Messages will be sent to your email.

## Example:
```typescript
const response = await fetch("https://formspree.io/f/abc123xyz", {
```

## Features:
- ✅ Spam protection
- ✅ Email notifications
- ✅ Form submissions dashboard
- ✅ Free tier: 50 submissions/month
