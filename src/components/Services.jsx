import React from "react";
import assignment from "../assets/assignment.png";
import dissertation from "../assets/dissertation.png";
import courseWork from "../assets/courseWork.png";
import thesis from "../assets/thesis.png";
import essay from "../assets/essay.png";
import researchPaper from "../assets/researchPaper.png";
import ppt from "../assets/ppt.png";
import programming from "../assets/programming.png";
import paperWriting from "../assets/paperWriting.png";
import caseStudy from "../assets/caseStudy.png";
import speechWriting from "../assets/speechWriting.png";
import termPaper from "../assets/termPaper.png";
import coverLetter from "../assets/coverLetter.png";
import resumeMaker from "../assets/resumeMaker.png";
import star from "../assets/star.png";

const Services = () => {
  const services = [
    {
      id: 1,
      image: assignment,
      title: "Assignment",
      stars: 5,
      ratings: 178,
    },
    {
      id: 2,
      image: dissertation,
      title: "Dissertation",
      stars: 5,
      ratings: 150,
    },
    {
      id: 3,
      image: courseWork,
      title: "Course Work",
      stars: 5,
      ratings: 120,
    },
    {
      id: 4,
      image: thesis,
      title: "Thesis",
      stars: 5,
      ratings: 129,
    },
    {
      id: 5,
      image: essay,
      title: "Essay",
      stars: 5,
      ratings: 47,
    },
    {
      id: 6,
      image: researchPaper,
      title: "Research Paper",
      stars: 5,
      ratings: 59,
    },
    {
      id: 7,
      image: ppt,
      title: "Power Point Presentation",
      stars: 5,
      ratings: 89,
    },
    {
      id: 8,
      image: programming,
      title: "Programming",
      stars: 5,
      ratings: 134,
    },
    {
      id: 9,
      image: paperWriting,
      title: "Paper Writing",
      stars: 5,
      ratings: 193,
    },
    {
      id: 10,
      image: caseStudy,
      title: "Case Study",
      stars: 5,
      ratings: 125,
    },
    {
      id: 11,
      image: speechWriting,
      title: "Speech Writing",
      stars: 5,
      ratings: 100,
    },
    {
      id: 12,
      image: termPaper,
      title: "Term Paper Writing",
      stars: 5,
      ratings: 135,
    },
    {
      id: 13,
      image: coverLetter,
      title: "Cover Letter Writing",
      stars: 5,
      ratings: 120,
    },
    {
      id: 14,
      image: resumeMaker,
      title: "Resume Maker",
      stars: 5,
      ratings: 132,
    },
  ];

  return (
    <div className="w-full h-max p-4 px-8 bg-white">
      <div className="w-full h-full bg-[#C414681A] flex flex-col gap-4 py-4 shadow-[0px_4px_4px_0px_#00000040] rounded-[5px]">
        <div className="w-full h-max flex flex-col items-center">
          <h2 className="font-cormorant font-[700] text-black text-3xl">
            Our Services
          </h2>
          <h3 className="font-cormorant font-[600] text-black text-xl">
            We offer some fantastic services
          </h3>
        </div>

        <div className="w-full h-max grid grid-cols-4 gap-4 place-items-center">
          {services.map((item) => {
            return (
              <div key={item.id} className="w-[15vw] h-[32vh] bg-white flex flex-col gap-1 rounded-[15px] overflow-hidden">
                <div className="w-full h-[70%]">
                  <img
                    src={item.image}
                    alt={`${item.title}`}
                    className="transition-all ease-in duration-200 cursor-pointer hover:scale-[1.1] w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col p-2 cursor-pointer">
                  <h4 className="font-cormorant font-[700] text-black text-xl">
                    {item.title}
                  </h4>
                  <div className="flex flex-row items-center gap-1">
                    <div className="flex flex-row ">
                      {[...Array(item.stars)].map((_, i) => (
                        <img
                          key={i}
                          src={star}
                          alt="Stars"
                          className="w-[15px] h-[15px]"
                        />
                      ))}
                    </div>
                    <span>({item.ratings})</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
