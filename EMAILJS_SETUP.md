# EmailJS Setup Instructions

This guide will help you set up EmailJS to receive contact form submissions via email.

## Step 1: Install EmailJS Package

Run the following command in your terminal:

```bash
npm install @emailjs/browser
```

## Step 2: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month on free tier)
3. Verify your email address

## Step 3: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email
5. **Copy the Service ID** (you'll need this)

## Step 4: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. **Choose Code Editor** (recommended) - This gives you better control and ensures variables work correctly
   - If you prefer Design Editor, you can use it, but make sure to use the exact variable names shown below

4. **Template Name:** Contact Form Submission (or any name you prefer)

5. **Subject Line:**
```
New Contact Form Submission from {{from_name}}
```

6. **Email Content** (paste this in the Code Editor):

```
Hello,

You have received a new contact form submission from your website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Required: {{service}}

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You can contact this client at:
- Email: {{from_email}}
- Phone: {{phone}}

This email was sent from your website contact form.
```

**Important Variable Names** (must match exactly):
- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email address
- `{{phone}}` - Client's phone number (or "Not provided")
- `{{service}}` - Service they selected
- `{{message}}` - Their project details/message

7. **Save the template**
8. **Copy the Template ID** (you'll need this - it's shown at the top of the template page)

### Using Design Editor Instead?

If you prefer the Design Editor:
- Click on "Design Editor" tab
- Add text and use the variable picker to insert `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service}}`, and `{{message}}`
- Make sure the variable names match exactly as shown above

## Step 5: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key**
3. **Copy the Public Key**

## Step 6: Configure Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs and keys

## Step 7: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox for the notification

## Troubleshooting

- **"EmailJS configuration is missing"**: Make sure your `.env` file exists and contains all three variables
- **"Failed to send message"**: Check that your Service ID, Template ID, and Public Key are correct
- **Email not received**: Check your spam folder and verify your email service is properly connected in EmailJS

## Security Note

The `.env` file is already in `.gitignore` to prevent committing your keys. Never commit your actual `.env` file to version control.
