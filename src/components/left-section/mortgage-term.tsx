import useMortgageStore from "@/zustand/mortgage";

function MortgageTerm() {
  const { loanTerm, setValues } = useMortgageStore();
  return (
    <section className="grid grid-rows-[auto_1fr] gap-1">
      <label htmlFor="mortgage-term" className="label">
        Mortgage Term
      </label>
      <div className="input-box grid-cols-[1fr_auto]">
        <input
          type="number"
          id="mortgage-term"
          className="px-[0.95em]"
          onChange={(e) => setValues({ loanTerm: Number(e.target.value) })}
          value={loanTerm}
        />
        <div className="bg-primary text-primary-dark/70 p-[0.65em] px-[0.65em] text-[0.75em]">
          years
        </div>
      </div>
    </section>
  );
}
export default MortgageTerm;
