import useMortgageStore from "@/zustand/mortgage";
import { PoundSterling } from "lucide-react";

function MortgageAmount() {
  const { loanAmount, setValues } = useMortgageStore();

  return (
    <section className="grid gap-1">
      <label htmlFor="mortgage-amount" className="label">
        Mortgage Amount
      </label>
      <section className="input-box grid-cols-[auto_1fr]">
        <div className="bg-primary p-[0.65em]">
          <PoundSterling className="stroke-primary-dark/50 size-[0.95em] stroke-3" />
        </div>
        <input
          type="number"
          id="mortgage-amount"
          className="px-[0.95em]"
          onChange={(e) => setValues({ loanAmount: Number(e.target.value) })}
          value={loanAmount}
        />
      </section>
    </section>
  );
}
export default MortgageAmount;
