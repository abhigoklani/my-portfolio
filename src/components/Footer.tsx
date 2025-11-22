"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-bold">Abhishek Goklani</span>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} Abhishek Goklani. All rights reserved.</p>
            <p className="mt-1">Designed with ❤️ and built with Next.js</p>
          </div>

          <div className="text-gray-400 text-sm">
            <p>Ready to make an impact together!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
