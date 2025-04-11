// "use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { useSession } from "next-auth/react";

import { auth } from "@/auth";

export default async function Navbar() {
  // const { data: session } = useSession();

  // console.log(session);

  const session = await auth();
  return (
    <nav className="flex justify-between items-center py-3 px-4 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        Auth.js
      </Link>

      {!session ? (
        <Link href="/auth/signin">
          <Button variant="default">Sign In</Button>
        </Link>
      ) : (
        <form>
          <Button variant="default" type="submit">
            Sign Out
          </Button>
        </form>
      )}
    </nav>
  );
}
