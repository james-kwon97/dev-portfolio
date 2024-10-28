import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return (
    <div className="py-32 ">
      <div className="container">
        <div className="flex flex-col items-center ">
          <Image src={memojiImage} className="size-[100px]" alt="Person behind laptop emoji" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-semibold ">Available for new projects</div>
          </div>
          <h1>Building Exceptional User Experiences</h1>
          <p>
            I specialise in transformation designs into functional, high-performing web
            applications. Let's discuss your next project.
          </p>
        </div>
      </div>
      <button>
        <span>Explore My Work</span>
        <ArrowDown />
      </button>
      <button>
        <span>👋🏻</span>
        <span>Let's Connect!</span>
      </button>
    </div>
  );
};
