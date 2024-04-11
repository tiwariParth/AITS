import Courses from "../components/Courses";

const Course = () => {
  return (
    <div id="Courses" className=" h-[100vh] ">
      <div className="flex justify-center flex-col  h-full bg-gradient-to-l from-white to-violet-400">
        <h1 className="text-center text-3xl font-extrabold md-mb-10 mb-[3rem]">
          Courses We Offer
        </h1>

        <div className="flex md:flex-row flex-col items-center gap-5 justify-evenly py-4  ">
          <Courses
            title="CCNA"
            description={"asfddsafdsfasd"}
            tags={["network", "afds", "dafsad"]}
            img="lol"
          />
          <Courses
            title="CCNA"
            description={"asfddsafdsfasd"}
            tags={["network", "afds", "dafsad"]}
            img="lol"
          />
          <Courses
            title="CCNA"
            description={"asfddsafdsfasd"}
            tags={["network", "afds", "dafsad"]}
            img="lol"
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
