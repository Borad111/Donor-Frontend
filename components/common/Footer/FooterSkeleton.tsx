const FooterSkeleton = () => {
  return (
    <div className="bg-gray-100 py-10 flex flex-col items-center text-center space-y-4">
      {/* Sponsor Title */}
      <div className="h-4 w-72 bg-gray-300 rounded animate-pulse"></div>

      {/* Sponsor Logo */}
      <div className="h-24 w-48 bg-gray-300 rounded-md shadow-md animate-pulse"></div>

      {/* Company Logo */}
      <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse"></div>

      {/* Address */}
      <div className="h-3 w-40 bg-gray-300 rounded animate-pulse"></div>

      {/* Email + Phone */}
      <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-6 space-y-2 md:space-y-0">
        <div className="h-3 w-40 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full border-t border-gray-200 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center px-4 text-xs text-gray-400">
        <div className="h-3 w-64 bg-gray-300 rounded animate-pulse mb-2 md:mb-0"></div>
        <div className="h-3 w-40 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default FooterSkeleton;
