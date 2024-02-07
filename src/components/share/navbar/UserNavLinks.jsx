import Link from "next/link";

function UserNavLinks({ setIsOpen }) {
  const user = true;
  const isAdmin = true;

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed top-0 right-0 w-full h-screen bg-gray-200/60 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed top-16 right-4 bg-white z-50 text-sm rounded-md p-4 w-44 shadow-md shadow-gray-500 flex flex-col gap-4"
      >
        {user ? (
          <>
            <Link href={"/orders"}>Your Orders</Link>
            {isAdmin && <Link href={"/dashboard"}>Admin Dashboard</Link>}
            <button
              className="border-t pt-2 text-left"
              onClick={() => setIsOpen(false)}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href={"/sign-in"}>Login</Link>
            <Link href={"/sign-up"}>Register</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default UserNavLinks;
