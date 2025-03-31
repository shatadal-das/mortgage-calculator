import useMortgageStore from "@/zustand/mortgage";
import { CalculatorIcon } from "lucide-react";

function CalculateButton() {
  const { calc } = useMortgageStore();
  return (
    <button
      onClick={calc}
      className="bg-accent flex cursor-pointer items-center gap-[0.5em] rounded-full px-[1.5em] py-[0.75em] text-[0.9em] hover:brightness-105"
    >
      <CalculatorIcon className="size-[1.25em]" />
      <p className="font-bold">Calculate Repayments</p>
    </button>
  );
}
export default CalculateButton;
