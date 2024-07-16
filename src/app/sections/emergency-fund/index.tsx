"use client";
import { use, useEffect, useMemo, useState } from "react";
import CalculatorInput from "./calculator-input";
import EmergencyFundTabs from "./tab";
import Image from "next/image";
import { calculateInvestment, moneyDot } from "@/helper";

const tabContents = [
  { id: 0, title: "Dana darurat", image: "/dana-darurat.png" },
  { id: 1, title: "Dana Pendidikan", image: "/dana-pendidikan.png" },
  { id: 2, title: "Dana Liburan", image: "/dana-liburan.png" },
  { id: 3, title: "Dana Pensiun", image: "/dana-pensiun.png" },
];

const EmergencyFundSection = () => {
  const [selectedTab, setSelectedTab] = useState(tabContents[0]);
  const [investment, setInvestment] = useState<{
    targetAmount?: number;
    returnRate?: number;
    period?: number;
    inflation?: number;
  }>();

  const result = useMemo(() => {
    const isNotNull =
      investment?.targetAmount &&
      investment?.period &&
      investment?.inflation &&
      investment?.returnRate;
    if (isNotNull) {
      const { monthlyInvestment, totalAmountPayable } = calculateInvestment(
        investment?.targetAmount ?? 0,
        investment?.returnRate ?? 0,
        investment?.period ?? 0,
        investment?.inflation ?? 0
      );
      return { monthlyInvestment, totalAmountPayable };
    }
  }, [
    investment,
    investment?.inflation,
    investment?.period,
    investment?.returnRate,
    investment?.targetAmount,
  ]);

  useEffect(() => {
    switch (selectedTab.id) {
      case 0:
        setInvestment({
          inflation: 4,
          period: 5,
          returnRate: 4.3,
          targetAmount: 72000000,
        });
        break;
      case 1:
        setInvestment({
          inflation: 4,
          period: 10,
          returnRate: 7.5,
          targetAmount: 120000000,
        });
        break;
      case 2:
        setInvestment({
          inflation: 4,
          period: 1,
          returnRate: 4.3,
          targetAmount: 60000000,
        });
        break;
      default:
        setInvestment({
          inflation: 4,
          period: 5,
          returnRate: 13,
          targetAmount: 8000000000,
        });
        break;
    }
  }, [selectedTab]);

  return (
    <div className="border w-full h-fit rounded-[40px] overflow-clip select-none drop-shadow-md">
      <EmergencyFundTabs
        tabs={tabContents}
        selectedTab={selectedTab}
        onClick={setSelectedTab}
      />
      <div className="flex bg-white p-20 gap-20 pb-30">
        <div className="flex-grow flex flex-col gap-20">
          <CalculatorInput
            range={{ min: 0, max: 1000000000 }}
            variant="money"
            title="target jumlah investasi reksa dana"
            defaultValue={investment?.targetAmount}
            getValue={(value) =>
              setInvestment({ ...investment, targetAmount: value })
            }
          />
          <CalculatorInput
            range={{ min: 0, max: 100 }}
            variant="percentage"
            title="Perkiraan imbal hasil"
            defaultValue={investment?.returnRate}
            getValue={(value) =>
              setInvestment({ ...investment, returnRate: value })
            }
          />
          <CalculatorInput
            range={{ min: 0, max: 10 }}
            variant="years"
            title="Periode Investasi"
            defaultValue={investment?.period}
            getValue={(value) =>
              setInvestment({ ...investment, period: value })
            }
          />
          <CalculatorInput
            range={{ min: 0, max: 20 }}
            variant="percentage"
            title="Tingkat Inflasi"
            defaultValue={investment?.inflation}
            getValue={(value) =>
              setInvestment({ ...investment, inflation: value })
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <Image src={selectedTab.image} alt="" width={354} height={239} />
          <div className="border rounded-3xl flex flex-col p-4 gap-4">
            <div>
              <p>Monthly Investment Needed</p>
              <p className="font-bold text-3xl">
                Rp{moneyDot(result?.monthlyInvestment) || 0}
              </p>
            </div>
            <div>
              <p>Total Amount Payable</p>
              <p className="font-bold text-3xl">
                Rp {moneyDot(result?.totalAmountPayable) || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyFundSection;
