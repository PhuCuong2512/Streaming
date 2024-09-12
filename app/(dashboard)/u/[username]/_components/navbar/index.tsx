import { Logo } from "./logo";
import { Actions } from "./actions";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <Actions />
    </nav>
  );
};
// Compare this snippet from app/%28browse%29/_components/navbar/index.tsx: