"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { DragEventHandler, useRef, useState } from "react";
import Link from "next/link";

const UploaderComponent = () => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  const clickInputButton = () => {
    inputRef?.current?.click();
  };

  const dragOverHandler = (e: any) => {
    console.log("dragging");
    setDragging(true);
  };

  const dropHandler = (e: any) => {
    console.log("Drooping");
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log("files = ", file);
    setDragging(false);
  };

  const changeHandler = (e: any) => {
    const file = e.target?.files?.[0];
    setFile(file);
    e.target.value = "";
  };

  return (
    <div
      className="w-full"
      onDragOver={dragOverHandler}
      onDragLeave={() => setDragging(false)}
    >
      <Card className="border p-4 flex flex-col gap-4 w-full border-none">
        <h1 className="text-xl font-semibold text-center mb-4">
          Import data from existing resume
        </h1>
        {/* upload area */}
        {!file ? (
          <>
            <label
              htmlFor="upload"
              className="border-2 border-dashed rounded-md group cursor-pointer h-[300px] flex items-center justify-center"
              onDrop={dropHandler}
            >
              <div className="block p-14 flex items-center justify-center flex-col gap-1 pointer-events-none">
                <Icon
                  icon="material-symbols:picture-as-pdf-outline"
                  fontSize={50}
                  className=" opacity-60 group-hover:opacity-100 pointer-events-none"
                />
                {dragging ? (
                  <h1 className="opacity-60" pointer-events-none>
                    Drop your file here
                  </h1>
                ) : (
                  <>
                    <h3 className=" text-md font-semibold opacity-60 group-hover:opacity-100">
                      Browse a pdf or drop it here
                    </h3>
                    <p className="text-center mb-10 opacity-60 group-hover:opacity-100">
                      The pdf you upload here is locally and never leaves the
                      browser
                    </p>
                  </>
                )}
              </div>
            </label>
            <Button onClick={clickInputButton} className="">
              Browse File
            </Button>
          </>
        ) : (
          <>
            <div className="border flex items-center p-2 rounded-md text-center gap-2 justify-center">
              <span>{file?.name}</span>
              <Icon
                icon="gridicons:cross-circle"
                className="cursor-pointer opacity-50 hover:opacity-100"
                onClick={() => {
                  setFile(null);
                }}
              />
            </div>
            <Link href="/resume-builder" className="block">
              <Button className="w-full">Continue</Button>
            </Link>
          </>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          id="upload"
          className="hidden"
          onChange={changeHandler}
        />
      </Card>
    </div>
  );
};

export default UploaderComponent;
