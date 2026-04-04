


export const SkillSection = () => {

    return (
        <fieldset className="card-section border  flex flex-col">
            <legend className="text-2xl font-semibold">My Skill</legend>
            <div className="text-black font-normal grid grid-cols-1 md:grid-cols-4 p-4 gap-y-1 md:gap-y-0">
                <div className="font-bold md:font-normal mt-2 md:mt-0 text-amber-600 md:text-black">
                    Languages
                </div>
                <div className="col-span-1 md:col-span-3 mb-3 md:mb-3">
                    Thai(Native), English(semi-fluent reading and speaking)
                </div>
                <div className="font-bold md:font-normal mt-2 md:mt-0 text-amber-600 md:text-black">
                    Programming Languages
                </div>
                <div className="col-span-1 md:col-span-3 mb-3 md:mb-3">
                    C, Java,  Python, JavaScript
                </div>
                <div className="font-bold md:font-normal mt-2 md:mt-0 text-amber-600 md:text-black">
                    Web Development
                </div>
                <div className="col-span-1 md:col-span-3 mb-3 md:mb-3">
                    HTML, CSS, JavaScript
                </div>
                <div className="font-bold md:font-normal mt-2 md:mt-0 text-amber-600 md:text-black">
                    Database
                </div>
                <div className="col-span-1 md:col-span-3 mb-3 md:mb-3">
                    MySQL, MongoDB, Oracle
                </div>
                <div className="font-bold md:font-normal mt-2 md:mt-0 text-amber-600 md:text-black">
                    Frameworks & Libraries
                </div>
                <div className="col-span-1 md:col-span-3 mb-3 md:mb-3">
                    Laravel, React.js, React Native, Angular.js, Next.js, Express.js, Spring Boot
                </div>
                <div className="font-bold md:font-normal mt-2 md:mt-0 text-amber-600 md:text-black">
                    Tools & Platforms
                </div>
                <div className="col-span-1 md:col-span-3">
                    Node.js, Vite.js, Figma,  Git, Github
                </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center mt-3">
                {/* <img src="/vite.svg" alt=""  className="w-8 h-8"/> */}
                <img src="/react.svg" alt="" className="w-8 h-8" />
                <img src="/laravel-svgrepo-com.svg" alt="" className="w-8 h-8" />
                <img src="/nextjs-fill-svgrepo-com.svg" alt="" className="w-8 h-8" />
                <img src="/nodejs-icon-svgrepo-com.svg" alt="" className="w-8 h-8" />
                <img src="/mysql-logo-svgrepo-com.svg" alt="" className="w-8 h-8" />
                <img src="/mongodb-svgrepo-com.svg" alt="" className="w-8 h-8" />
                {/* <img src="/git-svgrepo-com.svg" alt=""  className="w-8 h-8" /> */}
                <img src="/github-142-svgrepo-com.svg" alt="" className="w-8 h-8" />
            </div>
        </fieldset>
    );
}