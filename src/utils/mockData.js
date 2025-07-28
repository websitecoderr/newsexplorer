export const mockUser = {
  name: "Elisa",
  email: "foo5@example.com",
  password: "password123",
  token: "mock-jwt-token-12345",
};

export const mockLoginResponse = {
  token: mockUser.token,
  user: {
    name: mockUser.name,
    email: mockUser.email,
  },
};

export const mockTokenValidationResponse = {
  name: mockUser.name,
  email: mockUser.email,
};

export const mockArticles = [
  {
    title: "Climate Change Threatens Coastal Cities",
    description:
      "Rising sea levels are putting millions at risk in low-lying areas.",
    url: "https://example.com/article1",
    urlToImage: "https://source.unsplash.com/featured/?climate",
    publishedAt: "2024-07-01T10:00:00Z",
    source: { name: "BBC News" },
  },
  {
    title: "Global Economy Faces Uncertainty",
    description: "Markets react to inflation and geopolitical tensions.",
    url: "https://example.com/article2",
    urlToImage: "https://source.unsplash.com/featured/?economy",
    publishedAt: "2024-07-02T08:30:00Z",
    source: { name: "Reuters" },
  },
  {
    title: "AI Revolutionizes Healthcare Diagnostics",
    description:
      "Machine learning tools are improving early disease detection.",
    url: "https://example.com/article3",
    urlToImage: "https://source.unsplash.com/featured/?healthcare",
    publishedAt: "2024-07-03T14:45:00Z",
    source: { name: "The Verge" },
  },
  {
    title: "SpaceX Launches New Satellite Fleet",
    description: "The latest mission expands global internet coverage.",
    url: "https://example.com/article4",
    urlToImage: "https://source.unsplash.com/featured/?space",
    publishedAt: "2024-07-04T12:00:00Z",
    source: { name: "NASA" },
  },
  {
    title: "Renewable Energy Surpasses Fossil Fuels",
    description: "Solar and wind power lead the global energy transition.",
    url: "https://example.com/article5",
    urlToImage: "https://source.unsplash.com/featured/?renewable",
    publishedAt: "2024-07-05T09:15:00Z",
    source: { name: "National Geographic" },
  },
  {
    title: "Breakthrough in Quantum Computing",
    description: "Researchers achieve stable qubit entanglement at scale.",
    url: "https://example.com/article6",
    urlToImage: "https://source.unsplash.com/featured/?quantum",
    publishedAt: "2024-07-06T16:20:00Z",
    source: { name: "MIT Tech Review" },
  },
];

export const mockSavedArticles = [
  {
    title: "Climate Change Threatens Coastal Cities",
    description:
      "Rising sea levels are putting millions at risk in low-lying areas.",
    url: "https://example.com/article1",
    image: "https://source.unsplash.com/featured/?climate",
    date: "2024-07-01",
    source: "BBC News",
    keyword: "Climate",
  },
  {
    title: "AI Revolutionizes Healthcare Diagnostics",
    description:
      "Machine learning tools are improving early disease detection.",
    url: "https://example.com/article3",
    image: "https://source.unsplash.com/featured/?healthcare",
    date: "2024-07-03",
    source: "The Verge",
    keyword: "Health",
  },
  {
    title: "AI Revolutionizes Healthcare Diagnostics",
    description:
      "Machine learning tools are improving early disease detection.",
    url: "https://example.com/article3",
    image: "https://source.unsplash.com/featured/?healthcare",
    date: "2024-07-03",
    source: "The Verge",
    keyword: "Health",
  },
  {
    title: "AI Revolutionizes Healthcare Diagnostics",
    description:
      "Machine learning tools are improving early disease detection.",
    url: "https://example.com/article3",
    image: "https://source.unsplash.com/featured/?healthcare",
    date: "2024-07-03",
    source: "The Verge",
    keyword: "Health",
  },
  {
    title: "AI Revolutionizes Healthcare Diagnostics",
    description:
      "Machine learning tools are improving early disease detection.",
    url: "https://example.com/article3",
    image: "https://source.unsplash.com/featured/?healthcare",
    date: "2024-07-03",
    source: "The Verge",
    keyword: "Health",
  },
];

export const mockError = {
  login: "Invalid email or password.",
  register: "User already exists.",
  token: "Token is invalid or expired.",
  fetch: "Failed to fetch articles. Please try again later.",
};
