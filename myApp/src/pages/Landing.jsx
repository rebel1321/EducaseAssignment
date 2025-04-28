import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col justify-end gap-[10px] min-h-[100svh] px-5 pb-[41px]">
      <h1 className="text-[28px] font-medium leading-[28px] tracking-[0px] text-[#1d2226] w-[231px]">
        Welcome to PopX
      </h1>
      <p className="text-[18px] font-normal leading-[26px] tracking-[0px] text-[#1d2226] opacity-60 w-[232px] pb-[19px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <Link to="/signup" className="w-full">
        <button className="w-full h-[46px] bg-[#6c25ff] text-white rounded-[6px] text-[16px] font-medium leading-[17px]">
          Create Account
        </button>
      </Link>
      <Link to="/login" className="w-full">
        <button className="w-full h-[46px] bg-[#6c25ff4b] text-[#1d2226] rounded-[6px] text-[16px] font-medium leading-[17px]">
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
}

export default Landing;
