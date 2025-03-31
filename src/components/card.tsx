import LeftSection from "./left-section";
import RightSection from "./right-section";

function Card() {
  return (
    <main className="mx-auto grid w-full max-w-[45rem] grid-cols-2 overflow-hidden rounded-[1.25em] bg-white shadow-lg">
      <LeftSection />
      <RightSection />
    </main>
  );
}

export default Card;
