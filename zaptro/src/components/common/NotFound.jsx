import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeConfig";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">Page not found</p>
      <Link
        to={ROUTES.HOME}
        className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
