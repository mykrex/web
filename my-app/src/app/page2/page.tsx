import Image from "next/image";
import Link from "next/link";
import GreenRectangle from "../components/GreenRectangle"; /* Importado para el rectangulo que hicimos primero*/
import Rectangle from "../components/Rectangle";

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: 25 }).map((_, index) => {
                return <Rectangle key={index} color={index % 2 == 0 ? 'yellow':'green'} />;
              })}
      </div>
      
      <Link href="/" className="text-blue-500 hover:underline"> 
        Go to home 
      </Link>
      <Link href="/page3" className="text-blue-500 hover:underline"> 
        Go to page3
      </Link>
    </div>
  );
}
