import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { CircleArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const BackButton: React.FC<Props> = ({ className }) => {
  return (
    <Button
        variant="outline"
      size={"icon"}
      className={cn("absolute top-2 left-2", className)}
    >
      <Link className="" href={"/"}>
        <CircleArrowLeft size={50} />
      </Link>
    </Button>
  );
};
