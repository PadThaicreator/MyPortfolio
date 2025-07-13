export const HomeSection = () => {
  return (
    <div className=" flex items-center justify-center mt-2 z-50">
      <div>
        <div className="justify-center items-center flex flex-col gap-2  winky-sans">
          <div className=" justify-center  flex flex-col  rainbow-text ">
            <div>Welcome To </div>
            <div>Poonnawit's Portfolio</div>
          </div>
          <div className="flex flex-col text-white font-normal items-center justify-center">
            <div>
              This little website is a cozy corner on the internet where
              Poonnawit keeps all the cool projects, experience{" "}
            </div>

            <div>-- a digital home for everything I'm proud of --</div>
          </div>
          <div className="flex gap-4">
            <img
              src="/cat-4-svgrepo-com.svg"
              alt=""
              className="w-8 h-8"
            />
            <img
              src="/dog-5-svgrepo-com.svg"
              alt=""
              className="w-8 h-8"
            />
            <img
              src="/man-svgrepo-com.svg"
              alt=""
              className="w-8 h-8"
            />
            <img
              src="/coding-svgrepo-com.svg"
              alt=""
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
