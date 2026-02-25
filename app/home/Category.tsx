import Image from "next/image";
import { mockCategories } from "../services/categories";
import Link from "next/link";

function Category() {


  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 ">
        
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Shop by Category</h2>
          <button className="text-green-600 text-sm font-medium hover:underline">
            see all →
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide ">
          {mockCategories.map((category, index) => (
            <Link
              href={`/Products?category=${encodeURIComponent(category.category)}`}
              key={index}
              className="flex flex-col items-center min-w-[110px] cursor-pointer group hover:text-green-600"
            >
              {/* Image Card */}
              <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition">
                <Image
                  src={category.image}
                  alt={category.category}
                  fill
                  className="object-cover"
                />
              </div>

              {/* category */}
              <p className="text-xs md:text-sm text-center mt-2 font-medium ">
                {category.category}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Category;
