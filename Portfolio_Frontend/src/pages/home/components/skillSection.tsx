


export const SkillSection = () => {

    return(
        <div className="card-section ">
            <div>My Skill</div>
            <div className="text-black font-normal grid grid-cols-4 p-4">
                <div>
                    Languages  
                </div>
                <div className="col-span-3">
                    Thai(Native), English(semi-fluent reading and speaking)
                </div>
                <div>
                    Programming  Languages    
                </div>
                <div className="col-span-3">
                    C, Java,  Python, JavaScript, PHP
                </div>
                <div>
                    Web Development
                </div>
                <div className="col-span-3">
                     HTML, CSS
                </div>
                <div>
                    Database                             
                </div>
                <div className="col-span-3">
                    MySQL, MongoDB
                </div>
                <div>
                    Framework
                </div>
                <div className="col-span-3">
                    Laravel, React, React Native, Next.js, Express.js, Tailwind
                </div>
                <div>
                    Tool
                </div>
                <div className="col-span-3">
                    Node.js, Vite.js, Figma, Socket.IO, Git Control Version, Github, Prisma, Mongoose
                </div>
            </div>
            <div className="flex gap-4 items-center justify-center mt-3">
                <img src="../../../../public/vite.svg" alt=""  className="w-8 h-8"/>
                <img src="../../../../public/react.svg" alt="" className="w-8 h-8" />
                <img src="../../../../public/laravel-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                <img src="../../../../public/nextjs-fill-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                <img src="../../../../public/nodejs-icon-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                <img src="../../../../public/mysql-logo-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                <img src="../../../../public/mongodb-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                <img src="../../../../public/git-svgrepo-com.svg" alt=""  className="w-8 h-8" />
                <img src="../../../../public/github-142-svgrepo-com.svg" alt=""  className="w-8 h-8" />
            </div>
        </div>
    );
}