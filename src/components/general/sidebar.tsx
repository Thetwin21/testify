import { useNavigate } from 'react-router-dom';
import {  LogoutIcon } from '../../assets';
import Logo from '../../assets/png/image 1.svg'
import logoSm from '../../assets/png/Group 2.svg'
import { ActivityIcon, EarningsIcon, HomeIcon, SettingsIcon, VerificationIcon } from './Icons';
const styles = {
  active:
    "w-full md:w-[190px] 2xl:w-[256px] bg-[#0FA1F4] text-[#fff] h-[64px] md:rounded-[8px] flex p-5 md:p-0  md:pl-10 items-center space-x-6 cursor-pointer",
  inActive:
    "group w-full md:w-[190px] 2xl:w-[256px] h-[64px]  flex text-[#0000008C]  items-center p-5 md:p-0  md:pl-10 space-x-6 hover:bg-[#0FA1F4] md:hover:rounded-[8px] hover:text-[#fff] cursor-pointer",
  iconActive: "font-semibold text-lg text-[#fff]",
  iconinActive: " font-semibold text-lg text-[#0000008C] group-hover:text-[#fff]"
};
const Sidebar = ({ current }: { current: number }) => {
  const navigate = useNavigate();
  return (
    <div className="md:w-full fixed top-0 left-0 bottom-0 h-screen flex flex-col max-w-[250px] 2xl:max-w-[320px]  bg-[#FFFFFF] flow-hide  ">
      <div className="w-full flex flex-col items-center relative h-screen">
        <div className="mt-7 md:mt-10 flex justify-center md:justify-start w-full md:pl-16" onClick={() => navigate("/") }> <img className='hidden md:block' src={Logo} alt={Logo} />
        <img className='md:hidden w-10' src={logoSm} alt={logoSm} />
        </div>
        <div className="flex flex-col items-center mt-[20px]">
          <div
            className={`mt-[8px] ${current === 1 ? styles.active : styles.inActive}`}
            onClick={() => navigate("/home")}
          >
            <HomeIcon current={current} />
            <p className="text-base hidden md:block font-bold">Dashboard</p>
          </div>
          <div
             className={`mt-[8px] ${current === 2 ? styles.active : styles.inActive}`}
            onClick={() => navigate("/activities")}
          >
            <ActivityIcon current={current} />
            <p className="text-base hidden md:block font-bold">Activities</p>
          </div>
          <div
             className={`mt-[8px] ${current === 3 ? styles.active : styles.inActive}`}
            onClick={() => navigate("/earnings")}
          >
            <EarningsIcon current={current} />
            <p className="text-base hidden md:block font-bold">Earnings </p>
          </div>
          <div
             className={`mt-[8px]  ${current === 4 ? styles.active : styles.inActive}`}
            onClick={() => navigate("/verification")}
          >
            <VerificationIcon current={current} />
            <p className="text-base hidden md:block font-bold">Verification</p>
          </div>
          <div
             className={`mt-[8px]  ${current === 5 ? styles.active : styles.inActive}`}
            onClick={() => navigate("/settings")}
          >
            <SettingsIcon current={current} />
            <p className="text-base hidden md:block font-bold">Setting</p>
          </div>
       
        </div>

        <div className="absolute bottom-[120px] left-0 right-0">
          <div className=" w-[256px] h-[64px]  flex  items-center pl-10 space-x-6 mx-auto cursor-pointer">
            <LogoutIcon />
            <p className="text-[#DA3F51] font-medium text-base ">Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
