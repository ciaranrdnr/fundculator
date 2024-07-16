import ClockRefreshIcon from "@/app/assets/icons/clock-refresh";
import SandGlassIcon from "@/app/assets/icons/sand-glass";
import TargetIcon from "@/app/assets/icons/target";
import Button from "@/app/components/button";
import EmergencyFundSection from "../emergency-fund";

const InvestmentFundCalculator = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col items-center gap-2 pb-4">
          <h1 className="text-4xl uppercase font-bold">
            Investment Fundculator
          </h1>
          <p className="text-xl text-grey-50">
            Tiba di tujuan finansial dengan terarah bersama NAVI
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            className="px-6 py-4 text-lg font-semibold"
            variant="contained"
            label={
              <div className="flex gap-2.5 items-center">
                <ClockRefreshIcon size={24} />
                <p>Goal Investment</p>
              </div>
            }
          />
          <Button
            className="px-6 py-4 text-lg font-semibold"
            variant="contained"
            isDisabled
            label={
              <div className="flex gap-2.5 items-center">
                <SandGlassIcon size={24} />
                <p>Auto Invest Fund</p>
              </div>
            }
          />
          <Button
            className="px-6 py-4 text-lg font-semibold"
            variant="contained"
            isDisabled
            label={
              <div className="flex gap-2.5 items-center">
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
