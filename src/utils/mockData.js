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

export const mockSavedArticles = [
  {
    source: "MacRumors",
    author: "Hartley Charlton",
    title: "Apple TV+ Reportedly Abandoning MLB Coverage",
    description:
      'Apple is apparently set to exit its partnership with Major League Baseball and discontinue its "Friday Night Baseball" package on Apple TV+.\n\n\n\n\n\nApple first entered Major League Baseball in March 2022 with a seven-year agreement valued at roughly $85 million…',
    url: "https://www.macrumors.com/2025/08/20/apple-tv-reportedly-abandoning-mlb-coverage/",
    image:
      "https://images.macrumors.com/t/85lIihM07VCr-nMGV8O-6eOBkgs=/1600x/article-new/2022/03/Apple-TV-plus-MLB-Friday-Night-Baseball-hero_big.jpg.medium_2x.jpg",
    date: "2025-08-20T12:33:45Z",
    keyword: "sports",
    content:
      'Apple is apparently set to exit its partnership with Major League Baseball and discontinue its "Friday Night Baseball" package on Apple TV+.\r\nApple first entered Major League Baseball in March 2022 w… [+2206 chars]',
  },
];

export const mockError = {
  login: "Invalid email or password.",
  register: "User already exists.",
  token: "Token is invalid or expired.",
  fetch: "Failed to fetch articles. Please try again later.",
};
