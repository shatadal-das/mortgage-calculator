import { EmptyStateIllustration } from "@/assets/svg";
import useMortgageStore from "@/zustand/mortgage";
import { PoundSterling } from "lucide-react";

function RightSection() {
  const { calculatedMortgage } = useMortgageStore();
  return (
    <section className="bg-secondary flex flex-col items-center justify-center space-y-[0.75em] rounded-bl-[2.75rem] p-[1.5em] text-white">
      {calculatedMortgage ? (
        <Result />
      ) : (
        <>
          <EmptyStateIllustration className="size-[8em]" />
          <h2 className="text-[1.2em] font-bold">Results Show Here</h2>
          <p className="text-center text-[0.75em] font-medium opacity-70">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </>
      )}
    </section>
  );
}

export default RightSection;

function Result() {
  const { calculatedMortgage } = useMortgageStore();
  return (
    <div>
      <div>
        <h2>Your results</h2>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
      </div>
      <div>
        <h3>Your monthly repayments</h3>
        <section>
          <PoundSterling />
          {calculatedMortgage}
        </section>
      </div>
    </div>
  );
}
