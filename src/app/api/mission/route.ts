import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      missionType,
      organization,
      location,
      priority,
      contactMethod,
      contactInfo,
      details,
    } = body;

    const message = `
🚨 NEW MISSION REQUEST

📌 Mission Type:
${missionType}

🏢 Organization:
${organization}

📍 Location:
${location}

⚠️ Priority:
${priority}

📡 Preferred Contact Method:
${contactMethod}

👤 Contact Information:
${contactInfo}

📝 Details:
${details}
`;

    const telegramUrl =
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    if (!telegramResponse.ok) {
      throw new Error("Telegram API failed");
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
