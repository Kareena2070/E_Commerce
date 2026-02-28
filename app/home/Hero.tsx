import { Zap, MoveRight, Star } from 'lucide-react';
import Image from 'next/image';

function HeroSection() {

    return (
        <>
            <section className="bg-[#fff1e0] w-full py-8 px-4 md:px-8 lg:px-0 flex gap-5 lg:gap-20  items-center flex-col lg:flex-row ">
        {/* left side */}
        <div className="hidden lg:block">
          <Image
            src="/styleImage/veg-bag.png"
            alt="Vegetable bag"
            width={690}
            height={360}
            className="object-contain"
          />
        </div>

        <article className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left lg:w-1/2">
          <div className="bg-[#FF9F1C] rounded-2xl flex gap-2 py-1 px-3 w-fit">
            {" "}
            <Zap size={20} /> Delivery in minutes
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:5xl lg:6xl font-bold">
              Groceries delivered in 10 minutes
            </h1>
            <p className="text-xl text-gray-600">
              Fresh fruits, vegetables, dairy, snacks & more. Get everything
              delivered to your doorstep in minutes.
            </p>
          </div>
          <button className="bg-black text-white flex gap-2  items-center w-fit p-2 rounded-2xl">
            Order Now
            <MoveRight size={20} />{" "}
          </button>
        </article>

        <article className="flex items-center gap-5 justify-center whitespace-nowrap text-sm  lg:w-1/2">
          <div className="flex flex-col items-center bg-[#F4A261] p-2 rounded-xl">
            <span className="text-xl sm:text-2xl lg:text-4xl font-bold">
              10+
            </span>
            <p>Minutes Delivery</p>
          </div>

          <div className="flex flex-col items-center bg-[#F4A261] p-2 rounded-xl">
            <span className="text-xl sm:text-2xl lg:text-4xl font-bold">
              1000+
            </span>
            <p>Products</p>
          </div>

          <div className="flex flex-col items-center bg-[#F4A261] p-2 rounded-xl">
            <span className="flex gap-1 text-xl sm:text-2xl lg:text-4xl font-bold items-center ">
              4.3{" "}
              <Star className="fill-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </span>
            <p>User Rating</p>
          </div>
        </article>

        <div className="hidden lg:block ">
          <Image
            src="/styleImage/plate.png"
            alt="Plate"
            width={560}
            height={380}
            className="object-contain"
          />
        </div>
      </section>
        </>
    );
}

export default HeroSection