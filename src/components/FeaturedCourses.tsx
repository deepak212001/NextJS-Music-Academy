"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";

// let name:string = "deepak";
// name=10;
// ye ha ts vo type bta rhi hai and bad me es hi type me change hoga na ki kisi aur type me , to abhi name =10 error dega

// yaha course ek json hai us me kya hai aur uska type bta rhe hai

interface CourseType {
  id: Number;
  title: string;
  slug: string;
  description: string;
  price: Number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: CourseType) => course.isFeatured
  );

  //   yaha cousre ta type bta rha hai

  return (
    <div className="py-12 bg-gray-900 w-full h-full">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {featuredCourses.map((course: CourseType) => (
            <div key={String(course.id)} className=" flex justify-center rounded-lg ">
              <BackgroundGradient>
                <div className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                    <Link href={`/courses/${course.slug}`}>View Course</Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="inline-block rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700"
        >
          Browse All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
