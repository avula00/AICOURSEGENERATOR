import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between p-5 shadow-sm">
      <Link href={"/"}>
        <Image src={"/logo.svg"} width={150} height={100} alt="logo" />
      </Link>

      {/* <Button className="bg-blue-600 text-white hover:bg-blue-700">
        About us
      </Button> */}
    </div>
  );
}

export default Header;
