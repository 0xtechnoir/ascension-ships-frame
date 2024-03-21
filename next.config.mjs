/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
      return [
        {
          source: '/playgame',
          destination: 'https://ascension-dojo.vercel.app/',
          permanent: false
        },
        {
          source: '/blogpost',
          destination: 'https://www.bitkraft.vc/insights/dungeons-and-dojos-exploring-onchain-game-development-with-mud-and-dojo/',
          permanent: false
        }
      ]
    }
  };
  
  export default nextConfig;