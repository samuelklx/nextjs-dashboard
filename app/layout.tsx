import "@/app/ui/global.css"  // Import global CSS styles for the application
import { inter } from "@/app/ui/fonts"; // Importing the Inter font for use in the page
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
