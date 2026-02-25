import { Zap, MoveRight, Star } from 'lucide-react';

function HeroSection() {

    return (
        <>
            <div className="bg-yellow-300 py-10 px-4 flex flex-col lg:flex-row gap-10">
                <div className="max-w-5xl mx-auto ">
                    <div className='flex gap-2 bg-yellow-200 justify-center items-center py-1  px-6 py-3 rounded-xl w-fit'>
                        <Zap size={18} />
                        Delivery in minutes
                    </div>

                    <div className='mt-6 max-w-2xl'>
                        <h1 className="text-5xl font-bold">Groceries delivered in 10 minutes</h1>
                        <p className="mt-3 text-gray-700">Fresh fruits, vegetables, dairy, snacks & more. Get everything delivered to your doorstep in minutes.</p>
                    </div>

                    <div className='flex gap-2 bg-black text-white  px-6 py-3 rounded-xl w-fit mt-6'>Order Now <MoveRight />
                    </div>
                </div>

                <div className='max-w-5xl mx-auto flex flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center items-center '>
                        <div className='bg-yellow-200 py-2  px-4 sm:px-6 sm:py-3 rounded-xl w-fit h-fit flex flex-col j items-center '>
                            <span className='font-bold  text-xl sm:text-2xl lg:text-3xl'>10+</span>
                            <p className='text-gray-500 text-sm whitespace-nowrap'>Minutes Delivery</p>
                        </div>

                        <div className='bg-yellow-200 py-2  px-4 sm:px-6 sm:py-3 rounded-xl w-fit h-fit flex flex-col j items-center '>
                            <span className='font-bold  text-xl sm:text-2xl lg:text-3xl'>1000+</span>
                            <p className='text-gray-500 text-sm whitespace-nowrap'>Products</p>
                        </div>
                        
                        <div className='bg-yellow-200 py-2  px-4 sm:px-6 sm:py-3 rounded-xl w-fit h-fit flex flex-col j items-center '>
                            <span className='flex gap-2 justify-center items-center font-bold text-xl sm:text-2xl lg:text-3xl'>4.9 <Star /> </span>
                            <p className='text-gray-500 text-sm whitespace-nowrap'>User Rating</p>
                        </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection