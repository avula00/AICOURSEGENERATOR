import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import { CourseList } from "@/configs/schema";

function EditChapters({ course, index, refreshData }) {
  const Chapters = course?.courseOutput?.course?.chapters;
  const [name, setName] = useState();
  const [about, setAbout] = useState();

  useEffect(() => {
    setName(Chapters[index].name);
    setAbout(Chapters[index].about);
  }, [course]);

  const onUpdateHandler = async () => {
    // Create a deep copy to avoid mutating the original object
    const updatedCourseOutput = JSON.parse(JSON.stringify(course.courseOutput));
    updatedCourseOutput.course.chapters[index].name = name;
    updatedCourseOutput.course.chapters[index].about = about;

    // Debug logging
    console.log("Course object:", course);
    console.log("Course ID:", course.id);
    console.log("Updated course output:", updatedCourseOutput);

    // Check if the object can be properly serialized
    try {
      JSON.stringify(updatedCourseOutput);
      console.log("Object can be serialized successfully");
    } catch (serializeError) {
      console.error("Object serialization failed:", serializeError);
      return;
    }

            try {
            if (!course.id) {
                throw new Error("Course ID is undefined");
            }

            // Log the exact query being built
            console.log("Building update query for course ID:", course.id);
            console.log("Setting courseOutput to:", updatedCourseOutput);

            // Test database connection with a simple select first
            console.log("Testing database connection...");
            try {
                const testResult = await db.select().from(CourseList).where(eq(CourseList.id, course.id)).limit(1);
                console.log("Database connection test successful:", testResult);
            } catch (testError) {
                console.error("Database connection test failed:", testError);
                throw new Error("Database connection failed");
            }

            const result = await db
                .update(CourseList)
                .set({
                    courseOutput: updatedCourseOutput,
                })
                .where(eq(CourseList.id, course.id))
                .returning({ id: CourseList.id });

            console.log("Update successful:", result);
            refreshData(true);
        } catch (error) {
      console.error("Database update failed:", error);
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        courseId: course.id,
        courseOutput: updatedCourseOutput,
      });
      // You might want to show an error message to the user here
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <HiPencilSquare />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Chapter</DialogTitle>
          {/* keep description text only, remove divs from inside */}
          <DialogDescription>
            Update the details of this chapter below.
          </DialogDescription>
        </DialogHeader>

        {/* moved out of DialogDescription */}
        <div className="mt-3">
          <label>Course Title</label>
          <Input
            defaultValue={Chapters[index].name}
            onChange={(event) => setName(event?.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <Textarea
            className="h-40"
            defaultValue={Chapters[index].about}
            onChange={(event) => setAbout(event?.target.value)}
          />
        </div>

        <DialogFooter>
          {/* fix: avoid button nesting by using asChild */}
          <DialogClose asChild>
            <Button onClick={onUpdateHandler}>Update</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditChapters;
