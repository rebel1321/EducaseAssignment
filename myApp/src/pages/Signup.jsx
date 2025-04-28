import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/profile");
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const isFormValid =
    fullName.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    isValidEmail(email) &&
    password.trim() !== "" &&
    isAgency !== "";

  return (
    <div className="flex flex-col min-h-screen p-10">
      <h1 className="text-[28px] leading-[36px] font-medium text-[#1d2226] w-[188px] mb-[31px]">
        Create your PopX account
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        {/* Full Name */}
        <fieldset className="relative border border-[#cbcbcb] rounded-[6px] h-[40px] mb-[29px]">
          <legend className="absolute top-[-8px] left-[12px] px-[4px] bg-[#f7f8f9] text-[13px] font-normal text-[#6c25ff] pointer-events-none">
            Full Name<span className="text-[#dd4a3d]">*</span>
          </legend>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full border-none outline-none text-[14px] text-[#1d2226] leading-[17px] bg-transparent px-[16px] py-[12px]"
          />
        </fieldset>

        {/* Phone Number */}
        <fieldset className="relative border border-[#cbcbcb] rounded-[6px] h-[40px] mb-[29px]">
          <legend className="absolute top-[-8px] left-[12px] px-[4px] bg-[#f7f8f9] text-[13px] font-normal text-[#6c25ff] pointer-events-none">
            Phone Number<span className="text-[#dd4a3d]">*</span>
          </legend>
          <input
            type="number"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="w-full border-none outline-none text-[14px] text-[#1d2226] leading-[17px] bg-transparent px-[16px] py-[12px]"
          />
        </fieldset>

        {/* Email Address */}
        <fieldset className="relative border border-[#cbcbcb] rounded-[6px] h-[40px] mb-[29px]">
          <legend className="absolute top-[-8px] left-[12px] px-[4px] bg-[#f7f8f9] text-[13px] font-normal text-[#6c25ff] pointer-events-none">
            Email Address<span className="text-[#dd4a3d]">*</span>
          </legend>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-none outline-none text-[14px] text-[#1d2226] leading-[17px] bg-transparent px-[16px] py-[12px]"
          />
        </fieldset>

        {/* Password */}
        <fieldset className="relative border border-[#cbcbcb] rounded-[6px] h-[40px] mb-[29px]">
          <legend className="absolute top-[-8px] left-[12px] px-[4px] bg-[#f7f8f9] text-[13px] font-normal text-[#6c25ff] pointer-events-none">
            Password<span className="text-[#dd4a3d]">*</span>
          </legend>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border-none outline-none text-[14px] text-[#1d2226] leading-[17px] bg-transparent px-[16px] py-[12px]"
          />
        </fieldset>

        {/* Company Name */}
        <fieldset className="relative border border-[#cbcbcb] rounded-[6px] h-[40px] mb-[18px]">
          <legend className="absolute top-[-8px] left-[12px] px-[4px] bg-[#f7f8f9] text-[13px] font-normal text-[#6c25ff] pointer-events-none">
            Company Name
          </legend>
          <input
            type="text"
            placeholder="Enter Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border-none outline-none text-[14px] text-[#1d2226] leading-[17px] bg-transparent px-[16px] py-[12px]"
          />
        </fieldset>

        {/* Are you an Agency? */}
        <p className="text-[13px] font-normal leading-[15px] text-[#1d2226] mb-[10px]">
          Are you an Agency?<span className="text-[#dd4a3d]">*</span>
        </p>

        <div className="flex gap-[23px] mb-[10px]">
          {/* Yes */}
          <label className="inline-flex items-center gap-[12px] cursor-pointer relative text-[14px] leading-[17px] text-[#1d2226]">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={isAgency === "yes"}
              onChange={(e) => setIsAgency(e.target.value)}
              className="hidden"
            />
            <span
              className={`w-[22px] h-[22px] rounded-full border ${
                isAgency === "yes" ? "border-[#642af5]" : "border-[#919191]"
              } relative transition-all duration-300`}
            >
              {isAgency === "yes" && (
                <span className="absolute top-1/2 left-1/2 w-[12px] h-[12px] bg-[#6c25ff] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </span>
            Yes
          </label>

          {/* No */}
          <label className="inline-flex items-center gap-[12px] cursor-pointer relative text-[14px] leading-[17px] text-[#1d2226]">
            <input
              type="radio"
              name="agency"
              value="no"
              checked={isAgency === "no"}
              onChange={(e) => setIsAgency(e.target.value)}
              className="hidden"
            />
            <span
              className={`w-[22px] h-[22px] rounded-full border ${
                isAgency === "no" ? "border-[#642af5]" : "border-[#919191]"
              } relative transition-all duration-300`}
            >
              {isAgency === "no" && (
                <span className="absolute top-1/2 left-1/2 w-[12px] h-[12px] bg-[#6c25ff] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </span>
            No
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`mt-auto rounded-[6px] h-[46px] w-full text-[16px] leading-[17px] font-medium ${
            isFormValid
              ? "bg-[#6c25ff] text-white"
              : "bg-[#cbcbcb] text-white cursor-not-allowed"
          }`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
