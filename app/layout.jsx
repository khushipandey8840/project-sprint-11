import "./globals.css";

export const metadata = {
  title: "Cine-Stream",
  description: "Discover popular movies with Cine-Stream",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}