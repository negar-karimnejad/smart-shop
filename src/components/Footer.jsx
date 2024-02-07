import { categories, customerServices } from "@/data";
import Link from "next/link";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import Container from "./Container";

function Footer() {
  return (
    <div className="bg-slate-700 py-10 mt-10">
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
              The next time you're wondering, “Where's an electronics store near
              me?” odds are Best Buy is your closest option. With more than
              1,100 electronics stores across the United States, and online at
              BestBuy.com, we're always ready to show you what's new in consumer
              electronics technology.
            </p>
            <p className="text-sm text-gray-300">
              &copy; 2023 E-Shop. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="cursor-pointer text-gray-300 hover:text-white" />
              <FaTwitter className="cursor-pointer text-gray-300 hover:text-white" />
              <PiInstagramLogoFill className="cursor-pointer text-gray-300 hover:text-white" />
              <BsYoutube className="cursor-pointer text-gray-300 hover:text-white" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
