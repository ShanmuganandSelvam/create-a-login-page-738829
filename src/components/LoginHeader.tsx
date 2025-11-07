import { FaLock } from 'react-icons/fa';

const LoginHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <FaLock className="text-primary text-2xl" />
      </div>
      <h1 className="text-2xl font-bold text-gray-800">Sign in to your account</h1>
      <p className="text-gray-600 mt-2">Enter your credentials to access your account</p>
    </div>
  );
};

export default LoginHeader;