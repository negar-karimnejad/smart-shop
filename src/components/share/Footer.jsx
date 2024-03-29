import { categories, customerServices } from "../../utilities/data";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Container from "../ui/Container";

function Footer() {
  return (
    <div className="bg-slate-700 py-10 mt-24">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 text-white">
          <div className="flex flex-col gap-2 ">
            <h1 className="font-bold">Shop Categories</h1>
            {categories.slice(1).map((category) => (
              <Link
                href={"/"}
                key={category.title}
                className="text-sm text-gray-300 hover:text-white"
              >
                {category.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Customer Services</h1>
            {customerServices.map((service, index) => (
              <Link
                key={index}
                href={"/"}
                className="text-sm text-gray-300 hover:text-white"
              >
                {service}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold">About Us</h1>
            <p className="text-sm text-gray-300">
              The next time you&apos;re wondering, “Where&apos;s an electronics
              store near me?” odds are Best Buy is your closest option. With
              more than 1,100 electronics stores across the United States, and
              online at BestBuy.com, we&apos;re always ready to show you
              what&apos;s new in consumer electronics technology.
            </p>
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <MdFacebook
                size={24}
                className="cursor-pointer text-gray-300 hover:text-white"
              />
              <AiFillTwitterCircle
                size={24}
                className="cursor-pointer text-gray-300 hover:text-white"
              />
              <AiFillInstagram
                size={24}
                className="cursor-pointer text-gray-300 hover:text-white"
              />
              <AiFillYoutube
                size={24}
                className="cursor-pointer text-gray-300 hover:text-white"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
