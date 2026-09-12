export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { cafeName, cafeLocation, cafeVibe, cafeSpecialty, todaySpecial } = req.body;

  const prompt = `You are a premium social media manager for upscale independent cafes. Generate content for a cafe with these details:
Cafe name: ${cafeName}
Location: ${cafeLocation || 'not specified'}
Vibe: ${cafeVibe}
Specialty: ${cafeSpecialty || 'specialty coffee and food'}
Today's highlight: ${todaySpecial}

Return ONLY a JSON object with these exact keys (no markdown, no backticks):
{
  "igCaption": "2-3 sentence Instagram caption that feels premium, warm, and inviting. End with a soft CTA.",
  "igHashtags": "12 relevant hashtags as a single string starting with #",
  "waStatus": "1-2 punchy sentences for WhatsApp or Instagram story. Max 100 characters.",
  "googlePost": "2-3 professional sentences for a Google Business post. Mention the location naturally.",
  "calDays": [
    {"day":"Mon","idea":"short 6-word post idea"},
    {"day":"Tue","idea":"short 6-word post idea"},
    {"day":"Wed","idea":"short 6-word post idea"},
    {"day":"Thu","idea":"short 6-word post idea"},
    {"day":"Fri","idea":"short 6-word post idea"},
    {"day":"Sat","idea":"short 6-word post idea"},
    {"day":"Sun","idea":"short 6-word post idea"}
  ]
}`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  const data = await response.json();
  const raw = data.content.filter(b => b.type === 'text').map(b => b.text).join('');
  const clean = raw.replace(/```json|```/g, '').trim();

  try {
    const json = JSON.parse(clean);
    res.status(200).json(json);
  } catch {
    res.status(500).json({ error: 'Failed to parse response' });
  }
}
EOF
echo "done"
Output

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { cafeName, cafeLocation, cafeVibe, cafeSpecialty, todaySpecial } = req.body;

  const prompt = `You are a premium social media manager for upscale independent cafes. Generate content for a cafe with these details:
Cafe name: ${cafeName}
Location: ${cafeLocation || 'not specified'}
Vibe: ${cafeVibe}
Specialty: ${cafeSpecialty || 'specialty coffee and food'}
Today's highlight: ${todaySpecial}

Return ONLY a JSON object with these exact keys (no markdown, no backticks):
{
  "igCaption": "2-3 sentence Instagram caption that feels premium, warm, and inviting. End with a soft CTA.",
  "igHashtags": "12 relevant hashtags as a single string starting with #",
  "waStatus": "1-2 punchy sentences for WhatsApp or Instagram story. Max 100 characters.",
  "googlePost": "2-3 professional sentences for a Google Business post. Mention the location naturally.",
  "calDays": [
    {"day":"Mon","idea":"short 6-word post idea"},
    {"day":"Tue","idea":"short 6-word post idea"},
    {"day":"Wed","idea":"short 6-word post idea"},
    {"day":"Thu","idea":"short 6-word post idea"},
    {"day":"Fri","idea":"short 6-word post idea"},
    {"day":"Sat","idea":"short 6-word post idea"},
    {"day":"Sun","idea":"short 6-word post idea"}
  ]
}`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  const data = await response.json();
  const raw = data.content.filter(b => b.type === 'text').map(b => b.text).join('');
  const clean = raw.replace(/```json|```/g, '').trim();

  try {
    const json = JSON.parse(clean);
    res.status(200).json(json);
  } catch {
    res.status(500).json({ error: 'Failed to parse response' });
  }
}
