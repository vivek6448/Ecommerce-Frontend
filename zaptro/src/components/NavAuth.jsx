import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

const NavAuth = () => (
  <>
    <SignedOut>
      <SignInButton className="bg-red-500 text-white text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 py-1 rounded-md cursor-pointer hover:bg-red-600 transition" />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </>
);

export default NavAuth;
