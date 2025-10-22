import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export interface EmailData {
  name: string;
  email: string;
}

class EmailService {
  private serviceId = "qoichert"; // e.g., 'gmail'
  private templateId = "template_as8ibpi"; // e.g., 'feedback_form'
  private publicKey = "AqmjzVT6vNYSg034z";

  constructor() {
    emailjs.init(this.publicKey);
  }

  async sendPreregistrationEmail(data: EmailData): Promise<boolean> {
    try {
      const result = await emailjs.send(this.serviceId, this.templateId, {
        form_name: data.name,
        form_email: data.email,
        to_name: "StoryCraft",
        message: `Новая регистрация ${data.name} (${data.email})`,
      });

      console.log("Email sent successfully: ", result);
      return true;
    } catch (error) {
      console.error("Failed to send email: ", error);
      return false;
    }
  }
}

export const emailService = new EmailService();
