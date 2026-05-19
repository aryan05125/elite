import "./globals.css";

export const metadata = {
  title: "EliteAI",
  description: "Advanced AI Solutions Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}