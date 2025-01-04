import Link from "next/link";
const ClosingCTA = () => {
  return (
    <div className="bg-[#0A5346] py-16 font-Begum text-center">
      {/* Headline */}
      <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
        Ready for Smooth, Hair-Free Skin?
      </h2>

      {/* Sub-headline */}
      <p className="text-lg md:text-xl text-gray-400 mb-6">
        Don’t wait! Take the first step toward confidence and convenience today!
      </p>

      {/* CTA Button */}
      <button className="hover:bg-[#0A5346] text-white px-8 py-3 text-lg font-bold rounded-md bg-[#69baabcd] transition-all duration-300">
        <Link href={"#"}> Claim up to 85% Off*</Link>
      </button>
    </div>
  );
};

export default ClosingCTA;
