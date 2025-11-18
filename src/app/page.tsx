import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
export default function Home() {
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF91] ">
        <Navbar />
      </div>
      <HomeSection />
    </div>
  );
}
