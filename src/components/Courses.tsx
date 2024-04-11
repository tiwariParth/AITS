interface CoursesProps {
  title: string;
  description: string;
  tags: string[];
  img: string;
}

const Courses = ({ title, description, tags, img }: CoursesProps) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tags[0]}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tags[1]}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tags[2]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Courses;
