import LandingPage from '@/components/LandingPage';
import { ModeToggle } from "@/components/toggle";

export default function Page() {
  return (
    <div className="m-4">
      <div className="mt-2">
            <ModeToggle />
          </div>
      {/* <LandingPage/> */}
      <h1 className='text-center text-5xl mt-40'>COMING SOON</h1>
    </div>
  );
}