export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // Example: Send an email (You can integrate with Nodemailer, SendGrid, etc.)
    try {
      console.log("New Contact Form Submission:", { name, email, message });
      return res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
