import { Facebook, Instagram, Twitter , Linkedin, Phone, Mail, MapPin, Copyright } from 'lucide-react';
function Footer() {
    return (
        <>
            <footer className="bg-gray-100 px-4 md:px-24 lg:px-28 px-10 py-5 pb-6">
                <div className='flex gap-5 py-5 px-2  items-center flex-col lg:flex-row'>
                    <div className='flex flex-col gap-4'>
                        {/* Logo */}
                        <div className="flex  items-center gap-2 font-bold">
                            <div className="bg-yellow-400 p-2 text-white rounded-lg">
                                FOA
                            </div>
                            <p>FOA-Food</p>
                        </div>

                       <div className='flex flex-col gap-4'>
                            <p>Your one-stop shop for groceries & essentials - delivered fast!</p>

                            <div className='flex gap-5'>
                                <Facebook /> <Instagram /> <Twitter /> <Linkedin />
                            </div>
                        </div> 
                    </div>

                   <div className='flex gap-5 justify-between items-center w-full flex-wrap lg:flex-nowrap'>
                     <div>
                        <div className='font-bold mb-2'>Useful Links</div>
                        <div>
                            <div>All Products</div>
                            <div>Categories</div>
                            <div>Track Order</div>
                            <div>My Account</div>
                        </div>
                    </div>

                    <div>
                        <div className='font-bold mb-2'>Partner</div>
                        <div>
                            <div>Sell on FOA-food</div>
                            <div>Become a Rider</div>
                            <div>Corporate</div>
                            <div>Warehouse</div>
                        </div>
                    </div>

                    <div>
                        <div className='font-bold mb-2'>Contact</div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'> <Phone size={18} color='green'/>1800-123-4567</div>
                            <div className='flex gap-2'> <Mail size={18} color='green'/> help@foafood.com</div>
                            <div className='flex gap-2'><MapPin size={18} color='green'/> Gurugram, Haryana</div>
                        </div>
                    </div>
                   </div>
                </div>

                <div className='bg-gray-300 py-[1px]'></div>

                <div className='flex justify-between py-5 px-10  gap-5 flex-col lg:flex-row'>
                    <div className='flex gap-1 items-center sm:text-wrap lg:whitespace-nowrap'><Copyright size={18} />2026 FOA-food. All rights reserved.</div>
                    <div className='flex gap-3'>
                        <p>Privacy</p>
                        <p>Terms</p>
                        <p>Refunds</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer