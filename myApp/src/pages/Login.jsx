import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/profile");
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const isFormValid = isValidEmail(email) && password.trim() !== "";

  return (
    <div className="p-10">
      <h1 className="text-[28px] leading-[36px] font-medium text-[#1d2226] w-[188px] mb-[14px]">
        Signin to your PopX account
      </h1>
      <p className="text-[18px] leading-[26px] font-normal text-[#1d2226] opacity-60 w-[232px] mb-[33px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form onSubmit={handleSubmit}>
        <fieldset className="relative border border-[#cbcbcb] rounded-[6px] h-[40px] mb-[23px]">
          <legend className="absolute top-[-8px] left-[12px] px-[4px] bg-[#f7f8f9] text-[13px] font-normal text-[#6c25ff] pointer-events-none">
            Email Address
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

        <fieldset className="relative border border-[#cbcbcb] rounded-[6px] h-[40px] mb-[14px]">
          <legend className="absolute top-[-8px] left-[12px] px-[4px] bg-[#f7f8f9] text-[13px] font-normal text-[#6c25ff] pointer-events-none">
            Password
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

        <button
          type="submit"
          disabled={!isFormValid}
          className={`rounded-[6px] h-[46px] w-full text-[16px] leading-[17px] font-medium ${
            isFormValid
              ? "bg-[#6c25ff] text-white"
              : "bg-[#cbcbcb] text-white cursor-not-allowed"
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
