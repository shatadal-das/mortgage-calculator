import useMortgageStore from "@/zustand/mortgage";

const types = [
  { id: "repayment", label: "Repayment" },
  { id: "interest-only", label: "Interest Only" },
] as const;

type MortgageTypes = (typeof types)[number]["id"];

function MortgageType() {
  const { setValues } = useMortgageStore();
  return (
    <fieldset
      className="space-y-1"
      onChange={(e) => {
        setValues({
          mortgageType: (e.target as HTMLInputElement).value as MortgageTypes,
        });
      }}
    >
      <legend className="label">Mortgage Type</legend>
      <div className="space-y-1.5">
        {types.map((type) => (
          <label
            key={type.id}
            htmlFor={type.id}
            className="input-box flex cursor-pointer gap-[0.5em] px-[1em] py-[0.65em]"
          >
            <input
              type="radio"
              id={type.id}
              name="mortgage-type"
              className="w-max"
              value={type.id}
            />
            <span className="text-[0.9em] font-bold">{type.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
export default MortgageType;
