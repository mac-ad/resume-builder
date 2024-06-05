import UploaderComponent from "@/components/UploadComponent/UploadComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResumeImportPage() {
  return (
    <main className="border h-full w-full flex items-center justify-center">
      {/* <Button variant="outline">import resume</Button> */}
      <div className="w-full max-w-[600px] flex flex-col gap-4">
        <UploaderComponent />
        <div className="text-center text-lg uppercase">Or</div>
        <Link className="block flex" href="/resume-builder">
          <Button className="mx-auto py-6" size="lg">
            Create From Scratch
          </Button>
        </Link>
      </div>
    </main>
  );
}
