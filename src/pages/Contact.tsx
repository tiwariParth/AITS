import InputField from "../components/InputField";

const Contact = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center gap-10 px-10 bg-gradient-to-r from-white to-violet-400">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <InputField title="Name" placeholder="John Doe" />
      <InputField title="Email" placeholder="Email" />
      <InputField title="Phone" placeholder="Phone" />
      <InputField title="Message" placeholder="Message" />
      <button
        style={{
          transition: "all 0.3s",
        }}
        className="bg-blue-500 hover:bg-blue-400 hover:-translate-y-1 text-white font-bold py-2 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4 "
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
