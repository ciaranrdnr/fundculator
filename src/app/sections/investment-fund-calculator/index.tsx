import Button from "@/app/components/button";
import EmergencyFundSection from "../emergency-fund";
import ClockRefreshIcon from "@/app/assets/icons/clock-refresh";
import SandGlassIcon from "@/app/assets/icons/sand-glass";
import TargetIcon from "@/app/assets/icons/target";

const InvestmentFundCalculator = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-4 sm:gap-6 px-6 sm:px-20 desktop-lg:px-0 pt-20 sm:pt-0">
        <div className="flex flex-col items-center sm:gap-2">
          <h1 className="text-center sm:text-left text-xl mobile-md:text-xl sm:text-4xl uppercase font-bold">
            Investment Fundculator
          </h1>
          <p className="text-base text-center sm:text-xl text-grey-50">
            Tiba di tujuan finansial dengan terarah bersama NAVI
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            className="sm:px-6 sm:py-4 p-1 text-sm sm:text-lg font-semibold"
            variant="contained"
            label={
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2.5 items-center">
                <ClockRefreshIcon size={24} />
                <p>Goal Investment</p>
              </div>
            }
          />
          <Button
            className="sm:px-6 sm:py-4 p-1 text-sm sm:text-lg font-semibold"
            variant="contained"
            isDisabled
            label={
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2.5 items-center">
                <SandGlassIcon size={24} />
                <p>Auto Invest Fund</p>
              </div>
            }
          />
          <Button
            className="sm:px-6 sm:py-4 p-1 text-sm sm:text-lg font-semibold"
            variant="contained"
            isDisabled
            label={
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2.5 items-center">
                <TargetIcon size={24} />
                <p>Delayed Fund</p>
              </div>
            }
          />
        </div>
        <EmergencyFundSection />
      </div>
    </section>
  );
};

export default InvestmentFundCalculator;
