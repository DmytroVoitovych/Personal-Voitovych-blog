import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  
  experimental:{
  
  
    turbo: {
      
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.ts',
        },
      },
    },
  },
  transpilePackages: ['next-mdx-remote'],

  
};

export default nextConfig;
