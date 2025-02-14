import Image from "next/image";
import Link from "next/link";
import Rectangle from "../components/Rectangle";

export default function Page3() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 25 }).map((_, index) => {
          return <Rectangle key={index} color={index % 2 == 0 ? 'gray':'white'} />;
        })}
      </div>
      
      <Link href="/" className="text-blue-500 hover:underline"> 
        Go to home 
      </Link>
      <Link href="/page2" className="text-blue-500 hover: underline">
      Go to page 2
      </Link>

    </div>
  );
}
