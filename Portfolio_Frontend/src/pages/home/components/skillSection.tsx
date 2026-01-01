


export const SkillSection = () => {

    return(
        <fieldset className="card-section border  flex flex-col"> 
            <legend className="text-2xl font-semibold">My Skill</legend>
            <div className="text-black font-normal grid grid-cols-2 md:grid-cols-4 p-4">
                <div className="font-bold md:font-normal">
                    Languages  
                </div>
                <div className="col-span-1 md:col-span-3 mb-3">
                    Thai(Native), English(semi-fluent reading and speaking)
                </div>
                <div>
                    Programming Languages    
                </div>
                <div className="col-span-1 md:col-span-3 mb-3">
                    C, Java,  Python, JavaScript, PHP
                </div>
                <div>
                    Web Development
                </div>
                <div className="col-span-1 md:col-span-3 mb-3">
                     HTML, CSS
                </div>
                <div>
                    Database                             
                </div>
                <div className="col-span-1 md:col-span-3 mb-3">
                    MySQL, MongoDB, Oracle / PL/SQL 
                </div>
                <div>
                    Frameworks & Libraries
                </div>
                <div className="col-span-1 md:col-span-3 mb-3">
                    Laravel, React.js, React Native, Angular.js, Next.js, Express.js, TailwindCSS
                </div>
                <div>
                    Tools & Platforms
                </div>
                <div className="col-span-1 md:col-span-3">
                    Node.js, Vite.js, Figma,  Git, Github
                </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center mt-3">
                {/* <img src="/vite.svg" alt=""  className="w-8 h-8"/> */}
                <img src="/react.svg" alt="" className="w-8 h-8" />
                <img src="/laravel-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                <img src="/nextjs-fill-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                <img src="/nodejs-icon-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                <img src="/mysql-logo-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                <img src="/mongodb-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                {/* <img src="/git-svgrepo-com.svg" alt=""  className="w-8 h-8" /> */}
                <img src="/github-142-svgrepo-com.svg" alt=""  className="w-8 h-8" />
            </div>
        </fieldset>
    );
}