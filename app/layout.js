/* import '../normalize.css'; */
import './globals.css';
import './index.css';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.min.css';



import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: "Anime",
  description: "Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className} >
      <body >{children}
        <script src="assets/itc-slider.js" defer></script>
      </body>
    </html>
  );
}
