import { IoMdNotifications, IoMdArrowDropdown } from "react-icons/io";
import userpro from "../../assets/png/user-pro.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const styles = "text-[#0000008C] text-2xl";
const HeadNav = () => {
  const { user } = useAppSelector((state) => state.auth)
  const name = user?.fullname ? user?.fullname.split(' ') : "unknown user";
  const firstname = name[0]
  return (
    <div className="w-full  flex items-center justify-between pl-3 ">
      <div className="w-full flex space-x-4  px-12 py-6 items-center justify-end bg-white h-full">
        <div>
          <IoMdNotifications className={styles} />
        </div>
        <Link to="/profile">
          <span>
          {user?.photoURL ?

            <img
              src={user.photoURL}
              alt="avatar"
              className="w-10 h-10 rounded-full "
            />
            : user?.email[0].toUpperCase()
          }
          </span>
        </Link>
        <div className="flex  items-center gap-x-2 cursor-pointer">
          <p className="text-sm font-medium text-[#0000008C] ">{firstname}</p>
          <IoMdArrowDropdown className={styles} />
        </div>
      </div>
    </div>
  );
};

export default HeadNav;
