/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["personalimages.s3.ir-thr-at1.arvanstorage.ir"],
  },
}

module.exports = nextConfig
