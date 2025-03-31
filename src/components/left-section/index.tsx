import CalculateButton from "./calculate-button";
import ClearAll from "./clear-all";
import InterestRate from "./interest-rate";
import MortgageAmount from "./mortgage-amount";
import MortgageTerm from "./mortgage-term";
import MortgageType from "./mortgage-type";

function LeftSection() {
  return (
    <form
      className="space-y-[1.75em] px-[2em] py-[1.5em]"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex items-center justify-between gap-[0.5em]">
        <h1 className="text-[1.25em] font-bold">Mortgage Calculator</h1>
        <ClearAll />
      </div>

      <div className="space-y-[1.25em] text-[0.9em]">
        <MortgageAmount />

        <section className="grid grid-cols-2 gap-[1em]">
          <MortgageTerm />
          <InterestRate />
        </section>

        <MortgageType />

        <CalculateButton />
      </div>
    </form>
  );
}

export default LeftSection;
