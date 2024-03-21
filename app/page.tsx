import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNf4W8kmL9B58skK5aSMdijGmZ1MTLFQ1r6weJCJEFoGS/ship_1.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Ascension Ships',
  description: 'A frame showcasing ships coming to Ascension soon',
  openGraph: {
    title: 'Ascension Ships',
    description: 'A frame showcasing ships coming to Ascension soon',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNf4W8kmL9B58skK5aSMdijGmZ1MTLFQ1r6weJCJEFoGS/ship_1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Ascension Ships</h1>
    </>
  );
}