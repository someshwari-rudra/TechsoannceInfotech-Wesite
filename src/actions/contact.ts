"use server"

import { sendConsultancyEmail } from "./consultancy"

export async function sendContactEmail(formData: FormData) {
  return sendConsultancyEmail(formData)
}
