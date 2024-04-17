/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^electron$/
    }))
    return config
  }
}
