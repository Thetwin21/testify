
import googleIcon from "../assets/png/Group 4.svg";
const styles = {
    buttonContainer: "w-full inline-flex gap-x-2 justify-center p-2 border border-gray-300 rounded-md shadow-sm bg-[#cc4c4c37] text-sm font-medium text-gray-500 hover:bg-gray-50"
}
interface childrenProps {
    children: any,
    signUser: (e: React.MouseEvent<HTMLElement>) => void;
}
const ButtonLayout = ({children,signUser}: childrenProps) => {
  return (
    <button className={styles.buttonContainer}
    onClick={signUser}>
 
      <img className="w-5" src={googleIcon} alt={googleIcon} />
      <span className="text-[#E33E2B]">{children}</span>
  </button>
  )
}

export default ButtonLayout