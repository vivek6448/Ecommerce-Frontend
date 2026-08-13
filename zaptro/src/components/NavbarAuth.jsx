import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";

const NavbarAuth = () => {
  const { openSignIn } = useClerk();

  return (
    <>
      <SignedOut>
        <button
          onClick={() => openSignIn()}
          className="rounded-full px-2.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-200 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
        >
          Sign in
        </button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default NavbarAuth;
