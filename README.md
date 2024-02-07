# Emailer

This is a simple Node.js application for sending emails. It provides a basic HTML form to submit email details and sends the email using the specified subject and message.

## Features

- **Send Email:**
  - Submit a form to send an email with specified subject and message.

## Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/taiwoajasa245/Emailer.git
   cd node-mail-sender
   ```
2. **Configure Email:**

- Update email credentials and settings in utils/email.js.

3. **Run the Application:**

   ```bash
   npm run start
   ```

4. **Test the Application:**
- Access the application at http://localhost:4040.

### Note: 

if you see an error message "Greeting never received" with a **ETIMEDOUT** code typically indicates that the SMTP client (Nodemailer, in this case) is unable to establish a connection to the SMTP server within a certain timeout period. 

- Ensure that your server has a stable and active internet connection.
- Confirm that there are no network issues, firewalls, or proxies blocking the connection to the SMTP server.

