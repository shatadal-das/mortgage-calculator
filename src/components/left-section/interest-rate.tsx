import useMortgageStore from "@/zustand/mortgage";
import { Percent } from "lucide-react";

function InterestRate() {
  const { interestRate, setValues } = useMortgageStore();
  return (
    <section className="grid grid-rows-[auto_1fr] gap-1">
      <label htmlFor="interest-rate" className="label">
        Interest Rate
      </label>
      <div className="input-box grid-cols-[1fr_auto]">
        <input
          type="number"
          id="interest-rate"
          className="px-[0.95em]"
          onChange={(e) => setValues({ interestRate: Number(e.target.value) })}
          value={interestRate}
        />
        <div className="bg-primary p-[0.65em] px-[0.65em]">
          <Percent className="stroke-primary-dark/50 size-[0.95em] stroke-3" />
        </div>
      </div>
    </section>
  );
}
export default InterestRate;
