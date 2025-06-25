const SocialMedia = () => {
    return (
      <div className="">
        <h1 className=" font-bold text-[20px]">Coding Profiles</h1>
        <div className="flex justify-center items-center md:justify-start my-5 gap-7">
          <button className="w-8 h-8 hover:scale-105 hover:shadow-sm hover:shadow-purple-600 transition duration-500" aria-label="LinkedIn" tabIndex={0} style={{ background: 'none', border: 'none', padding: 0 }}>
            <img alt="linkedin-link" src="/linkedin.png" />
          </button>
          <button className="transition hover:scale-105 hover:shadow-sm hover:shadow-purple-600 duration-500" aria-label="LeetCode" tabIndex={0} style={{ background: 'none', border: 'none', padding: 0 }}>
            <img alt="leetcode" src="/leetcode.png" className="w-8 h-8 md:hover:scale-110 rounded-md" />
          </button>
          <button className="transition hover:scale-105 hover:shadow-sm hover:shadow-purple-600 duration-500" aria-label="Codeforces" tabIndex={0} style={{ background: 'none', border: 'none', padding: 0 }}>
            <img alt="codeforces-link" src="/codeforces.png" className="w-8 h-8 md:hover:scale-110 rounded-md" />
          </button>
          <button className="transition hover:scale-105 hover:shadow-sm hover:shadow-purple-600 duration-500" aria-label="GitHub" tabIndex={0} style={{ background: 'none', border: 'none', padding: 0 }}>
            <img alt="github-link" src="/github.jpeg" className="w-8 h-8 md:hover:scale-110 rounded-md" />
          </button>
        </div>
      </div>
    );
  };
  
  export default SocialMedia;