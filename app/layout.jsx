import "../styles/globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Evolve Coaching",
  description:
    "Join the Evolve family and embark on a transformative journey with a seasoned coach, father, veteran, and bodybuilder. With ten years of coaching and training experience, I understand the importance of time management and discipline in every facet of life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
      <script async src="https://link.msgsndr.com/js/form_embed.js" />
      <script
        async
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      />
    </html>
  );
}
