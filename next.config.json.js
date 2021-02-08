module.export = {
  async headers() {
    return [
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=180, s-maxage=180, stale-while-revalidate=180"
          }
        ]
      }
    ];
  }
};
