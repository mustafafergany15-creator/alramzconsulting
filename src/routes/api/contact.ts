import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().min(7).max(40),
  message: z.string().trim().min(2).max(2000),
});

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const parsed = ContactSchema.safeParse(await request.json().catch(() => null));

        if (!parsed.success) {
          return Response.json(
            { success: false, message: "بيانات الطلب غير مكتملة أو غير صحيحة" },
            { status: 400 },
          );
        }

        const { name, email, phone, message } = parsed.data;
        const origin = request.headers.get("origin") || new URL(request.url).origin;
        const submittedAt = new Date().toLocaleString("ar-EG", {
          dateStyle: "full",
          timeStyle: "short",
          timeZone: "Africa/Cairo",
        });

        const response = await fetch("https://formsubmit.co/ajax/alramzalmethaly@gmail.com", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Origin: origin,
            Referer: origin,
          },
          body: JSON.stringify({
            _subject: "طلب استشارة جديد من موقع الرمز المثالي",
            _template: "table",
            _captcha: "false",
            _replyto: email,
            "الاسم": name,
            "البريد الإلكتروني": email,
            "رقم الجوال": phone,
            "الرسالة": message,
            "وقت الإرسال": submittedAt,
          }),
        });

        const result = await response.json().catch(() => ({ message: "تعذّر قراءة رد خدمة البريد" }));

        if (!response.ok || (result.success !== true && result.success !== "true")) {
          return Response.json(
            { success: false, message: result.message || "تعذّر إرسال البريد" },
            { status: 502 },
          );
        }

        return Response.json({ success: true });
      },
    },
  },
});