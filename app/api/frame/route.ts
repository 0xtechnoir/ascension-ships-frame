import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)

  const nextId = idAsNumber + 1

  if(idAsNumber === 6){
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 7</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNc3QFDn9E6rLhgTixErHYe89G9PRv4SFB9wBPgLsBb6D/ship_6.png" />
    <meta property="fc:frame:button:1" content="Play Ascension" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="Learn More" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  } else {
  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNc3QFDn9E6rLhgTixErHYe89G9PRv4SFB9wBPgLsBb6D/ship_${id}.png" />
    <meta property="fc:frame:button:1" content="Next Ship" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';