import useMortgageStore from "@/zustand/mortgage";

function ClearAll() {
  const { resetValues } = useMortgageStore();
  
  return (
    <button
      type="reset"
      className="text-primary-dark/60 hover:text-primary-dark h-max cursor-pointer text-[0.7em] whitespace-nowrap underline underline-offset-2"
      onClick={resetValues}
    >
      Clear All
    </button>
  );
}
export default ClearAll;
