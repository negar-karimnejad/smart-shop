import Image from "next/image";
import banner from "../../public/banner-image.png";
import Container from "./Container";

function Hero() {
  return (
    <Container>
      <div className="mt-5 py-5 bg-sky-500 flex items-center justify-evenly flex-col md:flex-row gap-10 md:gap-0">
        <div className="text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">Summer Sale!</h1>
          <p className="text-sm mb-2">Enjoy discounts on selected items</p>
          <p className="text-2xl font-extrabold text-yellow-400">GET 50% OFF</p>
        </div>
        <div className="max-w-sm">
          <Image
            className="max-w-full object-contain"
            src={banner}
            alt="Banner Image"
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
