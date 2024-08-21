import bg1 from '../Images/bg1.jpg';
import { FaRegCircleDot } from "react-icons/fa6";
const Banner = () => {
    
    return (
        <div className="">
           {/* main banner */}
           <section className="relative w-full h-[700px]">
            <img src={bg1} className='w-full h-full object-cover object-left md:object-center' />
            <div className='absolute right-28 bottom-20 md:right-28 md:bottom-36 text-white flex flex-col gap-10'>
                <div className='bg-white text-orange-400 rounded-lg'>
                    <h1 className='text-xl md:text-5xl font-bold p-5'>We offer premium-quality <br /> white and brown sugar. <br /> Guaranteed to be 100% pure.</h1>
                    <div className="divider"><FaRegCircleDot className='text-6xl' /></div>
                    <button className='w-full text-orange-400 font-bold text-3xl py-8 hover:text-black'>Shop Now</button>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Banner;