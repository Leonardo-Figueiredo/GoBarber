export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: '2305c90d4753d0',
    pass: 'cd05a8699ab3a8',
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

/**
 * SMTP Services for production
 *
 * Amazon SES
 * Mailgun
 * Sparkpost
 * Mandril (Mailchimp)
 */

//  SMTP for devs
// Mailtrap
