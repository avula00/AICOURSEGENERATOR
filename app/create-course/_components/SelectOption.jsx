import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 🎓 Difficulty Level */}
        <div className="w-full">
          <label className="text-sm block mb-1">🎓 Difficulty Level</label>
          <Select
            onValueChange={(value) => handleInputChange("level", value)}
            defaultValue={userCourseInput?.level}
          >
            <SelectTrigger className="w-full h-10 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 🕒 Course Duration */}
        <div className="w-full">
          <label className="text-sm block mb-1">🕒 Course Duration</label>
          <Select
            onValueChange={(value) => handleInputChange("duration", value)}
            defaultValue={userCourseInput?.duration}
          >
            <SelectTrigger className="w-full h-10 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hours">1 Hours</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* ▶️ Add Video */}
        <div className="w-full">
          <label className="text-sm block mb-1">▶️ Add Video</label>
          <Select
            onValueChange={(value) => handleInputChange("displayVideo", value)}
            defaultValue={userCourseInput?.displayVideo}
          >
            <SelectTrigger className="w-full h-10 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 📖 No of Chapters */}
        <div className="w-full">
          <label className="text-sm block mb-1">📖 No of Chapters</label>
          <Input
            type="number"
            className="w-full h-10 text-lg"
            placeholder="Enter number of chapters"
            defaultValue={userCourseInput?.noOfChapter}
            onChange={(event) =>
              handleInputChange("noOfChapter", event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
