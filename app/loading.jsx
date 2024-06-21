import { FaSpinner } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';
import { IoMdHourglass } from 'react-icons/io';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-russian-violet text-white">
      <div className="flex flex-col items-center space-y-5">
        <FaSpinner className="animate-spin text-6xl text-ultra-violet" />
        {/* <BiLoaderCircle className="animate-spin-slow text-6xl text-african-violet" /> */}
        {/* <IoMdHourglass className="animate-pulse text-6xl text-lilac" /> */}
        <p className="text-2xl font-semibold text-lavender">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
