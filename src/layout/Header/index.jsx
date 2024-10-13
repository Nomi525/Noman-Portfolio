const Header = () => {
  return (
    <div className="bg-dark text-white text-center">
      <div className="relative isolate overflow-hidden bg-black grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto sm:pt-3 sm:max-h-[580px] md:max-h-[420px] text-center">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/3 -z-10 h-[64rem] w-[64rem] -translate-y-2/3 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#greenGradient)"
            fillOpacity="0.4"
          />
          <defs>
            <radialGradient id="greenGradient">
              <stop stopColor="#00FF00" />
              <stop offset={1} stopColor="#006400" />
            </radialGradient>
          </defs>
        </svg>

        {/* Second Red Circle (Opposite Side) */}
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute right-1/2 top-1/3 -z-10 h-[64rem] w-[64rem] -translate-y-2/3 [mask-image:radial-gradient(closest-side,white,transparent)] sm:right-full sm:-mr-80 lg:right-1/2 lg:mr-0 lg:translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#redGradient)"
            fillOpacity="0.2"
          />
          <defs>
            <radialGradient id="redGradient">
              <stop stopColor="#FF0000" />
              <stop offset={1} stopColor="#8B0000" />
            </radialGradient>
          </defs>
        </svg>

        {/* Left Side Content */}
        <div className="flex flex-col pl-6 sm:pl-4 lg:pl-20 justify-center items-center text-center">
          <h2 className="pt-4 md:pt-0 font-mono md:text-4xl sm:text-2xl text-2xl font-bld tracking-tight text-white">
            👋 Hey, I'm <span className="text-teal-800">Noman Mansuri</span>
          </h2>
          <span className="font-sans text-center block mt-2 sm:text-sm md:text-md font-normal">
            Full-stack Developer | Freelancer
          </span>
          <p className="font-sans mt-4 text-sm md:text-lg leading-7 md:leading-8 text-gray-300">
            I’m a Mern Stack or Senior{' '}
            <span className="text-green-800">Node.js</span> Developer with 2.5+
            years of experience in building scalable and robust web
            applications. I’ve worked on a wide variety of projects, from gaming
            platforms to fintech solutions and ecommerce applications.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="sm:mt-5 flex justify-center items-center h-full">
          <div className="flex h-full items-center justify-center">
            <img
              alt="Profile"
              src="https://avatars.githubusercontent.com/u/59443472?v=4"
              className="object-cover h-auto max-h-full max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
