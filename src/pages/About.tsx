import img from "../assets/stefan-stefancik-QXevDflbl8A-unsplash.jpg";

const About = () => {
  return (
    <div
      id="About"
      className={`h-auto pt-7 bg-gradient-to-r from-white to-violet-400  text-black `}
    >
      <h1 className="text-4xl font-bold text-center">About the Author </h1>
      <main className="flex md:flex-row flex-col justify-center gap-10 py-[3rem] bg-gradient-to-r from-white to-violet-400 text-black ">
        <div className=" md:h-[60%] md:px-0 px-4  h-full md:w-[30%] w-full">
          <img src={img} alt="Instructor" />
        </div>
        <div className="md:w-[50%] w-full md:px-2 px-4 text-justify">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam
            enim quisquam suscipit quis eius laborum qui minima, quidem
            aspernatur deleniti vero explicabo obcaecati incidunt libero ratione
            magni nostrum itaque. Eligendi, nemo facere et dolore ab aut dolorem
            nisi aliquid dolor cupiditate molestiae. Perferendis neque ut et
            cumque non! Hic.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
