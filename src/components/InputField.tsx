interface InputFieldProps {
  title: string;
  placeholder: string;
  message?: string;
}
const InputField = ({ title, placeholder }: InputFieldProps) => {
  return (
    <div>
      <div>
        <label className="block mb-2 text-xl font-medium text-gray-900">
          {title}
        </label>
        <input
          className="bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default InputField;
