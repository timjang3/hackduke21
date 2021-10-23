module.exports = {
  async redirects() {
    return [
      {
        source: "/prebuilds",
        destination: "/keyboards/all",
        permanent: true,
      },
      {
        source: "/groupbuys",
        destination: "/groupbuys/all",
        permanent: true,
      },
      {
        source: "/switches",
        destination: "/switches/all",
        permanent: true,
      },
      {
        source: "/keycaps",
        destination: "/keycaps/all",
        permanent: true,
      },
      {
        source: "/kits",
        destination: "/parts/all",
        permanent: true,
      },
      {
        source: "/accessories",
        destination: "/accessories/all",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api",
        destination: "http://143.198.143.184", // Proxy to Backend
      },
    ]
  },
}
