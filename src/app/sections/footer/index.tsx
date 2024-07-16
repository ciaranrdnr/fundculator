import Image from "next/image";
import Button from "../../components/button";

const Footer = () => {
  return (
    <footer className="pt-20 bg-blue-100 text-white w-full">
      <div className="flex flex-col items-center w-full justify-center gap-10 max-w-[1440px] mx-auto desktop-lg:px-0 px-6 sm:px-20">
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-grey font-bold text-lg sm:text-4xl sm:leading-[59px] sm:text-left text-center">
            Subscribe NewsLetter
          </p>
          <p>To Know more about Reksa Dana, please enter your emails below</p>
        </div>

        <div className="flex gap-1 h-10 sm:h-15 text-sm sm:text-lg max-w-[1440px] w-full justify-center">
          <div className="flex-grow desktop-lg:max-w-[20vw] rounded-l-lg bg-white">
            <input
              className="h-full rounded-lg sm:pl-6 pl-4"
              placeholder="Enter your E-mail"
            />
          </div>
          <Button
            variant="contained"
            label={<p>Subscribe</p>}
            className="sm:px-12 w-full sm:w-fit rounded-l-none"
          />
        </div>
      </div>

      <nav className="bg-white text-grey-100 sm:px-20 px-6 flex sm:flex-row flex-col border border-t-4 border-apricot-50 mt-20 py-[21px] justify-between space-y-12 sm:space-y-0">
        <div className="flex sm:flex-row flex-col w-full desktop-lg:mx-auto desktop-lg:max-w-[1440px]">
          <div className="flex flex-col space-y-[15px] sm:w-1/2">
            <Image src={"/main-logo.svg"} width={157} height={56} alt="paper" />
            <div className="flex sm:flex-row flex-col sm:space-x-8 text-grey text-sm">
              <div className="flex sm:flex-row flex-col space-y-6 sm:space-y-0 sm:space-x-7 sm:max-w-[75%]">
                <div className="flex-col space-y-2.5 ">
                  <p className="font-bold text-sm">
                    Mirae Asset Sekuritas | Member of Indonesia Stock Exchange
                  </p>
                  <p className="text-grey-25">
                    District 8, Treasury Tower 50th floor SCBD lot 28, Jl. Jend.
                    Sudirman Kav, 52-54 Jakarta 12190
                  </p>
                  <p className="text-grey-10 text-xs pt-4">
                    © 1997 - 2022 Mirae Asset Financial Group. All Rights
                    Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex text-xs sm:flex-row flex-col space-y-6 sm:space-y-0  text-grey space-x-8">
            <div>
              <p className="font-bold text-sm">Our Product</p>
              <div className="flex space-x-8 pt-[10px]">
                <ul className="flex flex-col space-y-[10px]">
                  <li>Capital Market</li>
                  <li>NAVI by Mirae Asset</li>
                  <li>Investment Banking</li>
                  <li>ETF</li>
                </ul>
              </div>
            </div>
            <ul className="hidden sm:flex flex-col space-y-[10px]">
              <li className="font-bold text-sm">Legal</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Risk Warning</li>
            </ul>
            <ul className="hidden sm:flex flex-col space-y-[10px]">
              <li className="font-bold text-sm">Company</li>
              <li>About Us</li>
              <li>Security</li>
            </ul>
            <div className="hidden sm:flex flex-col space-y-[10px]">
              <div className="font-bold text-sm">Connect with Us</div>
              <Image src={"/sosmed.png"} width={145} height={25} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
