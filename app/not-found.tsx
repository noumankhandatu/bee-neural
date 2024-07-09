// pages/404.js
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex bg-secondary flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        The page youre looking for could not be found.
      </p>
      <Link href="/">
        <p className="text-blue-500 hover:underline">Return Home</p>
      </Link>
    </div>
  );
};

export default NotFound;
