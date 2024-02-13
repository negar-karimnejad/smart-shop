import { signOut } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";

function UserNavLinks({ setIsOpen, currentUser }) {
  const handleLogout = () => {
    toast.success("You logged out");
    signOut();
    setIsOpen(false);
  };

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed top-0 right-0 w-full h-screen bg-gray-200/60 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed top-16 right-4 bg-white z-50 text-sm rounded-md p-4 w-44 shadow-md shadow-gray-500 flex flex-col gap-4"
      >
        {currentUser !== null ? (
          <>
            <Link href={"/orders"}>Your Orders</Link>
            {currentUser.role === "ADMIN" && (
              <Link href={"/dashboard"}>Admin Dashboard</Link>
            )}
            <button className="border-t pt-2 text-left" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href={"/sign-in"} onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link href={"/sign-up"} onClick={() => setIsOpen(false)}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default UserNavLinks;
