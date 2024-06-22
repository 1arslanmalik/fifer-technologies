import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-russian-violet text-white">
      <div className="flex flex-col items-center space-y-5">
        <FaSpinner className="animate-spin text-6xl text-ultra-violet" />
        <p className="text-2xl font-semibold text-lavender">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
