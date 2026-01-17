"use client";
import React, { ReactNode } from "react";
import { Row } from "../ui/row";
import Image from "next/image";
import { Bookmark, BriefcaseBusiness, CircleUser } from "lucide-react";
import { useRouter } from "next/navigation";

const iconClassName =
  "text-orange-400 p-2 mr-5 bg-transparent hover:text-white hover:bg-orange-500 transition-all duration-300 cursor-pointer rounded-full";

type Props = {
  router: any;
};

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className="bg-white sticky top-0 z-50 mb-5">
        <Row className="justify-between shadow-[0_8px_9px_-2px_rgba(255,179,77,0.50)]">
          <Image
            className="justify-center items-center cursor-pointer"
            alt="icon-logo"
            width="100"
            height="100"
            src={"/images/philore_logo.png"}
            onClick={() => router.push("/")}
          />
          <NavButtons router={router} />
          <div></div>
        </Row>
      </header>
    </>
  );
}

const NavButtons = ({ router }: Props) => {
  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <Row className="flex justify-center items-center">
      <BriefcaseBusiness
        className={iconClassName}
        size={50}
        onClick={() => handleNavigation("/job-board")}
      />
      <Bookmark
        className={iconClassName}
        size={50}
        onClick={() => handleNavigation("/applied-jobs")}
      />
      <CircleUser
        className={iconClassName}
        size={50}
        onClick={() => handleNavigation("/my-profile")}
      />
    </Row>
  );
};
