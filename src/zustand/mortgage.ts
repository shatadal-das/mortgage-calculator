import { create } from "zustand";

interface MortgageState {
  loanAmount?: number;
  interestRate?: number;
  loanTerm?: number;
  mortgageType?: "repayment" | "interest-only";
  calculatedMortgage?: number;

  setValues: (values: Partial<MortgageState>) => void;
  resetValues: () => void;
  calc: () => number;
}

const useMortgageStore = create<MortgageState>((set, get) => ({
  setValues: (values: Partial<MortgageState>) => {
    set((state) => ({ ...state, ...values }));
  },
  resetValues: () => {
    set(() => ({
      loanAmount: undefined,
      interestRate: undefined,
      loanTerm: undefined,
      mortgageType: undefined,
    }));
  },
  calc: () => {
    const {
      loanAmount,
      interestRate,
      loanTerm,
      mortgageType,
      calculatedMortgage,
    } = get();

    // De Morgan's Law
    if (!(loanAmount && interestRate && loanTerm && mortgageType)) {
      return 0;
    }

    switch (mortgageType) {
      case "repayment":
        set({
          calculatedMortgage: calculateMortgage(
            loanAmount,
            interestRate,
            loanTerm,
          ),
        });
        break;
      case "interest-only":
        set({
          calculatedMortgage: calculateMonthlyInterest(
            loanAmount,
            interestRate,
          ),
        });
        break;
    }

    return calculatedMortgage ?? 0;
  },
}));

export default useMortgageStore;

function calculateMortgage(p: number, interestRate: number, years: number) {
  const r = interestRate / 12 / 100;
  const n = years * 12;
  return parseInt(
    ((p * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1)).toFixed(2),
  );
}

function calculateMonthlyInterest(p: number, interestRate: number) {
  const r = interestRate / 12 / 100;
  return parseInt((p * r).toFixed(2));
}
