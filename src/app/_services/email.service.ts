import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { Email } from '../_models/email';
import { MagicString } from '../_models/magic-string';
import { Options } from '@emailjs/browser/es/types/Options';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  getOpenEmailUrl(recipient: string, subject: string = '', body: string = '') : string {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return mailtoLink;
  }

  async send(email: Email): Promise<boolean> {
    let body: Record<string, unknown> = {
      user_name: email.user_name,
      user_message: email.user_message,
      user_subject: email.user_subject,
      user_email: email.user_email,
    };
    let options: Options | string = {
      publicKey: MagicString.emailjs.publicKey
    };

    try {
      await emailjs.send(MagicString.emailjs.serviceId, MagicString.emailjs.templateId, body, options);
      return true;
    }
    catch {
      return false;
    }
  }
}
