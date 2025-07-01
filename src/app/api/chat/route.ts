import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const body = await req.json();
  const messages = body.messages;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are an intelligent agentic assistant.' },
      ...messages,
    ],
  });

  const reply = response.choices[0].message.content;
  return new Response(JSON.stringify({ reply }), { status: 200 });
}
