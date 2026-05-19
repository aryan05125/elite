export const metadata = {
  title: "EliteAI",
  description: "Advanced AI Solutions Company",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}