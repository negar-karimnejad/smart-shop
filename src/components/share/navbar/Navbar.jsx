import { Redressed } from "next/font/google";
import Link from "next/link";
import Container from "../../ui/Container";
import NavSearch from "./NavSearch";
import UserNav from "./UserNav";
import { getCurrentUser } from "../../../../providers/getCurrentUser";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

async function Navbar() {
  const currentUser = await getCurrentUser();
  console.log("👻 user=>>>", currentUser);

  return (
    <>
      <div className="bg-slate-200 sticky top-0 right-0 z-50">
        <Container>
          <div className="py-5 flex justify-between items-center">
            <Link
              href="/"
              className={`${redressed.className} flex-1 text-2xl font-bold`}
            >
              E-Shop
            </Link>
            <NavSearch />
            <UserNav currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
