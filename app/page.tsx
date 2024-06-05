import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main className="border h-full flex items-center justify-center">
      <Link href="/resume-import" className="block">
        <Button size="lg">Resume Builder</Button>
      </Link>
    </main>
  );
}
