"use server"

import nodemailer from "nodemailer"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB in bytes

export async function submitJobApplication(formData: FormData) {
  // Extract form fields
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const role = formData.get('role') as string
  const message = formData.get('message') as string
  const resume = formData.get('resume') as File | null

  // Validation
  if (!name || !email) {
    return { success: false, message: 'Name and email are required' }
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Please enter a valid email address' }
  }

  // File validation
  let resumeBuffer: Buffer | null = null
  let resumeName = ''
  
  if (resume && resume.size > 0) {
    // Check file type
    if (resume.type !== 'application/pdf') {
      return { success: false, message: 'Only PDF files are accepted for resume upload' }
    }

    // Check file size
    if (resume.size > MAX_FILE_SIZE) {
      return { success: false, message: 'Resume file size must be less than 5MB' }
    }

    // Convert file to buffer for email attachment
    const arrayBuffer = await resume.arrayBuffer()
    resumeBuffer = Buffer.from(arrayBuffer)
    resumeName = resume.name
  }

  // Check if credentials exist - otherwise mock success for demo
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("EMAIL credentials not found. Mocking email send.")
    console.log("Career Application Data:", { name, email, role, message, resumeName })
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return { 
      success: true, 
      message: 'Application received! (Dev Mode: Email logged to console)' 
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions: any = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || "hr@techsonance.co.in",
      subject: `🎯 New Job Application: ${role || 'General Position'} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f4f4f4; }
            .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background: linear-gradient(135deg, #0A1A2F 0%, #1a3a52 100%); padding: 40px 30px; text-align: center; }
            .logo { width: 60px; height: 60px; margin: 0 auto 15px; }
            .company-name { color: #ffffff; font-size: 28px; font-weight: bold; margin: 0; letter-spacing: 1px; }
            .tagline { color: #00d4ff; font-size: 14px; margin: 5px 0 0; }
            .content { padding: 40px 30px; }
            .badge { display: inline-block; background: linear-gradient(135deg, #00d4ff, #0099cc); color: white; padding: 8px 20px; border-radius: 20px; font-size: 14px; font-weight: bold; margin-bottom: 20px; }
            .section { margin-bottom: 30px; }
            .section-title { color: #0A1A2F; font-size: 16px; font-weight: bold; margin-bottom: 10px; border-left: 4px solid #00d4ff; padding-left: 12px; }
            .info-row { background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 10px; }
            .info-label { color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .info-value { color: #0A1A2F; font-size: 16px; font-weight: 600; }
            .message-box { background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff; line-height: 1.6; color: #333; }
            .attachment-box { background: linear-gradient(135deg, #e3f2fd, #bbdefb); padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px; }
            .attachment-icon { font-size: 32px; margin-bottom: 10px; }
            .footer { background-color: #0A1A2F; color: #ffffff; padding: 30px; text-align: center; }
            .footer-info { font-size: 13px; line-height: 1.8; color: #b0b0b0; margin-bottom: 15px; }
            .footer-link { color: #00d4ff; text-decoration: none; }
            .divider { height: 1px; background: linear-gradient(to right, transparent, #ddd, transparent); margin: 25px 0; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <!-- Header -->
            <div class="header">
              <div class="logo">
                <img src="https://techsonance.co.in/logo.png" alt="TechSonance Logo" style="width: 60px; height: 60px; object-fit: contain;" />
              </div>
              <h1 class="company-name">TechSonance InfoTech LLP</h1>
              <p class="tagline">Building Reliable, Scalable & Secure Solutions</p>
            </div>

            <!-- Content -->
            <div class="content">
              <div class="badge">🎯 NEW JOB APPLICATION</div>
              
              <div class="section">
                <div class="section-title">Applicant Information</div>
                <div class="info-row">
                  <div class="info-label">Full Name</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Email Address</div>
                  <div class="info-value">${email}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Position Applied For</div>
                  <div class="info-value">${role || 'General / Not Specified'}</div>
                </div>
              </div>

              ${message ? `
              <div class="section">
                <div class="section-title">Cover Letter / Message</div>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}

              ${resumeBuffer ? `
              <div class="attachment-box">
                <div class="attachment-icon">📎</div>
                <div style="color: #0A1A2F; font-weight: bold; margin-bottom: 5px;">Resume Attached</div>
                <div style="color: #666; font-size: 14px;">${resumeName}</div>
              </div>
              ` : `
              <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; color: #856404;">
                ⚠️ No resume was attached with this application
              </div>
              `}

              <div class="divider"></div>

              <div style="background-color: #e8f5e9; padding: 15px; border-radius: 8px; text-align: center; color: #2e7d32;">
                <strong>📧 This application was submitted via TechSonance Career Page</strong><br>
                <small style="color: #666;">Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })}</small>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              <div class="footer-info">
                <strong>TechSonance InfoTech LLP</strong><br>
                UG-15, Palladium Plaza, Vip Road, Vesu<br>
                Surat, Gujarat - 395007, India<br>
                📧 <a href="mailto:hr@techsonance.co.in" class="footer-link">hr@techsonance.co.in</a> | 
                📞 <a href="tel:+919173101711" class="footer-link">+91 91731 01711</a><br>
                🌐 <a href="https://techsonance.co.in" class="footer-link">www.techsonance.co.in</a>
              </div>
              <div style="font-size: 11px; color: #888; margin-top: 15px;">
                This is an automated email from TechSonance Career Portal.<br>
                Please do not reply to this email directly.
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Add resume attachment if available
    if (resumeBuffer && resumeName) {
      mailOptions.attachments = [{
        filename: resumeName,
        content: resumeBuffer,
        contentType: 'application/pdf'
      }]
    }

    await transporter.sendMail(mailOptions)
    
    return { 
      success: true, 
      message: 'Application received! We\'ll review your profile and get back to you soon.' 
    }
  } catch (error) {
    console.error('Career email error:', error)
    return { 
      success: false, 
      message: 'Failed to submit application. Please try again later.' 
    }
  }
}
