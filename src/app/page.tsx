import Image from "next/image";
import { Instagram, Facebook, GanttChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TemporaryPage() {
  return (
    <div className="relative min-h-screen w-full bg-bc-1 flex flex-col items-center justify-center overflow-hidden">
      {/* Large logo at bottom left with opacity */}
      <div className="absolute bottom-0 left-0 h-[80%] w-auto opacity-5 -mb-40 -ml-32">
        <Image
          src="/svgs/logo.svg"
          alt="Logo"
          className="h-full w-auto"
          width={100}
          height={100}
        />
      </div>

      {/* Center content */}
      <div className="z-10 text-center px-4 max-w-md">
        <h1 className="text-4xl font-extrabold mb-6 text-bc-2">Oof, talk about bad timing.</h1>
        <p className="text-lg font-extralight mb-6 text-bc-2">
          We are very sorry about this, we&apos;re currently improving our website to serve you better. 
          Please come back again at another time.
        </p>

        {/* Social buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" aria-label="TikTok">
            <GanttChart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}