export const HomeSection = () => {
  return (
    <div className="flex-1 flex items-center justify-center mt-2">
      <div>
        <div className="opening justify-center items-center flex flex-col gap-2  winky-sans">
          <div className=" justify-center items-center flex flex-col">
            <div className="rainbow-text">Welcome To </div>
          <div className="rainbow-text">Poonnawit's Portfolio</div>
          </div>
          <div className="flex flex-col text-gray-600 font-normal items-center justify-center">
            <div>This little website is a cozy corner on the internet where Poonnawit keeps all the cool projects, experience </div>

            <div>-- a digital home for everything I'm proud of --</div>
          </div>
          <div className="flex gap-4">
              <img src="../../../../public/cat-4-svgrepo-com.svg" alt=""  className="w-8 h-8" />
              <img src="../../../../public/dog-5-svgrepo-com.svg" alt=""  className="w-8 h-8" />
              <img src="../../../../public/man-svgrepo-com.svg" alt=""  className="w-8 h-8" />
              <img src="../../../../public/coding-svgrepo-com.svg" alt=""  className="w-8 h-8" />
          </div>
         
        </div>
      </div>
    </div>
  );
};
