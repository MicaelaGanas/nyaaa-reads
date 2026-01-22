"use client"

export default function About() {
  return (
    <div className="min-h-[calc(100vh-200px)] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2bd5d5]/30 blur-xl rounded-full" />
              <svg className="relative w-12 h-12 text-[#2bd5d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#2bd5d5] via-[#19bfbf] to-[#2bd5d5] bg-clip-text text-transparent mb-3">
            About This Project
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#2bd5d5] to-transparent rounded-full" />
        </div>

        {/* Main Content Cards */}
        <div className="space-y-6">
          {/* Educational Purpose */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2bd5d5]/10 to-[#19bfbf]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-[rgba(10,10,10,0.6)] backdrop-blur-sm border border-[#2bd5d5]/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#2bd5d5]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2bd5d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#2bd5d5] mb-3">Educational Purpose</h2>
                  <p className="text-[#93a9a9] leading-relaxed text-base sm:text-lg">
                    This platform is developed exclusively for <span className="text-[#2bd5d5] font-semibold">educational purposes</span> as a learning project. 
                    The primary objective is to demonstrate proficiency in modern web development technologies, including API integration, 
                    responsive design principles, and full-stack application architecture. This project serves as a practical exercise in 
                    building scalable, user-centric web applications while adhering to industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* API Credit */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#19bfbf]/10 to-[#2bd5d5]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-[rgba(10,10,10,0.6)] backdrop-blur-sm border border-[#2bd5d5]/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#2bd5d5]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2bd5d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#2bd5d5] mb-3">Data Attribution</h2>
                  <p className="text-[#93a9a9] leading-relaxed text-base sm:text-lg mb-4">
                    All manga content, metadata, and cover images are provided through the <span className="text-[#2bd5d5] font-semibold">MangaDex API</span>. 
                    MangaDex is a community-driven platform dedicated to manga distribution and scanlation hosting. We acknowledge and appreciate 
                    their comprehensive API documentation and publicly accessible services that make educational projects like this possible.
                  </p>
                  <a 
                    href="https://api.mangadex.org/docs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#2bd5d5]/10 hover:bg-[#2bd5d5]/20 border border-[#2bd5d5]/30 rounded-lg text-[#2bd5d5] font-semibold transition-all group/link"
                  >
                    <span>View MangaDex API Documentation</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2bd5d5]/10 to-[#19bfbf]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-[rgba(10,10,10,0.6)] backdrop-blur-sm border border-[#2bd5d5]/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#2bd5d5]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2bd5d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#2bd5d5] mb-3">Technical Implementation</h2>
                  <p className="text-[#93a9a9] leading-relaxed text-base sm:text-lg mb-4">
                    This application demonstrates advanced web development concepts including:
                  </p>
                  <ul className="space-y-2 text-[#93a9a9]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2bd5d5] mt-1">▹</span>
                      <span>RESTful API integration and asynchronous data fetching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2bd5d5] mt-1">▹</span>
                      <span>Modern React patterns with Next.js framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2bd5d5] mt-1">▹</span>
                      <span>Responsive UI/UX design with Tailwind CSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2bd5d5] mt-1">▹</span>
                      <span>Client-side state management and local storage persistence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2bd5d5] mt-1">▹</span>
                      <span>Progressive enhancement and performance optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#2bd5d5]/5 rounded-2xl blur-xl" />
            <div className="relative bg-[rgba(10,10,10,0.4)] backdrop-blur-sm border border-[#2bd5d5]/10 rounded-2xl p-6 sm:p-8">
              <p className="text-[#93a9a9] text-sm leading-relaxed text-center">
                <span className="font-semibold text-[#2bd5d5]">Important Notice:</span> This project is not affiliated with, endorsed by, 
                or connected to MangaDex or any manga publishers. All content belongs to their respective copyright holders. 
                This platform is intended solely for educational demonstration purposes and should not be used for commercial distribution.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pb-8">
          <p className="text-[#93a9a9] text-sm">
            Built with 💙 as a learning experience
          </p>
        </div>
      </div>
    </div>
  );
}
