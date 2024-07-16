import Topbar from "./components/topbar";
import BenefitSection from "./sections/benefit";
import HowToSection from "./sections/how-to";
import Footer from "./sections/footer";
import CheckoutSection from "./sections/checkout";
import TopSection from "./sections/top-section";
import { Montserrat, Lato } from "next/font/google";
import InvestmentFundCalculator from "./sections/investment-fund-calculator";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "900",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main
      className={`relative mx-auto ${montserrat.variable} ${lato.variable}`}
    >
      <Topbar />
      <TopSection />
      <HowToSection />
      <InvestmentFundCalculator />
      {/* <CheckoutSection />
      <BenefitSection /> */}
      {/* <Footer /> */}
    </main>
  );
}
