import Homepage from "@/Component/Homebanner/Homepage";
import Homebook from "@/Component/Homebook/Homebook";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col  font-sans bg-white text-black">
     <Homepage></Homepage>
     <Homebook></Homebook>
    </div>
  );
}
