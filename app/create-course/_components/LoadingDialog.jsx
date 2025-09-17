import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

function LoadingDialog({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {/* For accessibility, keep this title */}
          <AlertDialogTitle className="sr-only">
            AI Course Generation In Progress
          </AlertDialogTitle>

          {/* Move content outside AlertDialogDescription */}
          <div className="flex flex-col items-center py-10">
            <Image
              src="/loader.gif"
              width={100}
              height={100}
              alt="Loading Spinner"
            />
            <h2 className="mt-4 text-center">
              Please wait... AI is working on your course
            </h2>
          </div>

          {/* Keep AlertDialogDescription for screen readers or text only */}
          <AlertDialogDescription className="sr-only">
            The course is being generated. This may take a few seconds.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LoadingDialog;
