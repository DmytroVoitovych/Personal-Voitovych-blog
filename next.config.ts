import type { NextConfig } from "next";
const {
  NEXT_PUBLIC_PASSWORD,
  NEXT_PUBLIC_MAIL_FROM,
  NEXT_PUBLIC_HOST,
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY,
} = process.env;

const nextConfig: NextConfig = {
  /* config options here */

  env: {
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_HOST,
    NEXT_PUBLIC_MAIL_FROM,
    NEXT_PUBLIC_PASSWORD,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },

  experimental: {
    useCache: true,

    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.ts",
        },
      },
    },
  },
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
