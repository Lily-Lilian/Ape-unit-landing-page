const Header = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row justify-between mt-12  pr-[64px] text-2xl pl-[64px]">
      <h1 className="text-2xl max-w-[94px]">Ape Unit</h1>
      <p className="max-w-[806px]">
        Unit➇ is a pioneering technology company specialing in decentralised
        technologies that creates end-to-end digital experiences for protocols
        including{" "}
        <span className="text-purple">
          Ethereum, Tezos, Near, Algorand, Celo{" "}
        </span>{" "}
        and more. Its team of 2,500+ digital specialists across 30+ locations on
        5 continents delivers pioneering work on a global scale with a boutique
        culture.{" "}
      </p>
    </div>
  );
};

export default Header;
