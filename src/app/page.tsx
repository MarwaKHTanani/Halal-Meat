import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import OurIntro from '@/components/OurIntro';
import OurMenu from '@/components/OurMenu';
import Journey from '@/components/Journey';
import OurServices from '@/components/OurServices';
export default function Home() {
  return (
    <div className=" bg-white">
      <div className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF91] ">
        <Navbar />
      </div>
      <main>
      <HomeSection />
      <OurIntro />
      <OurMenu />
      <Journey />
      <OurServices/>
      </main>
    </div>
  );
}
