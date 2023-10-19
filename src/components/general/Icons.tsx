
interface currentProp {
  current: number;
}

export const HomeIcon = ({current} : currentProp) => {
    return (
        <svg
         className={`md:group-hover:fill-white group-hover:opacity-[1] ${current === 1 ? " fill-white opacity-[1] ": "fill-black opacity-[0.55] group-hover:fill-white"}`} width="28 "
        height="28"
        viewBox="0 0 34 34"
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3333 4.25H8.5C7.94209 4.25009 7.38969 4.3604 6.87454 4.57458C6.35938 4.78876 5.89161 5.1026 5.49808 5.49808C5.1026 5.89161 4.78876 6.35938 4.57458 6.87454C4.3604 7.38969 4.25009 7.94209 4.25 8.5V11.3333C4.25 12.5021 4.72742 13.5646 5.49808 14.3352C5.89161 14.7307 6.35938 15.0446 6.87454 15.2588C7.38969 15.4729 7.94209 15.5832 8.5 15.5833H11.3333C11.8912 15.5832 12.4436 15.4729 12.9588 15.2588C13.474 15.0446 13.9417 14.7307 14.3352 14.3352C14.7307 13.9417 15.0446 13.474 15.2588 12.9588C15.4729 12.4436 15.5832 11.8912 15.5833 11.3333V8.5C15.5832 7.94209 15.4729 7.38969 15.2588 6.87454C15.0446 6.35938 14.7307 5.89161 14.3352 5.49808C13.9417 5.1026 13.474 4.78876 12.9588 4.57458C12.4436 4.3604 11.8912 4.25009 11.3333 4.25ZM25.5 4.25H22.6667C22.1088 4.25009 21.5564 4.3604 21.0412 4.57458C20.526 4.78876 20.0583 5.1026 19.6647 5.49808C19.2693 5.89161 18.9554 6.35938 18.7412 6.87454C18.5271 7.38969 18.4168 7.94209 18.4167 8.5V11.3333C18.4167 12.5021 18.8941 13.5646 19.6647 14.3352C20.0583 14.7307 20.526 15.0446 21.0412 15.2588C21.5564 15.4729 22.1088 15.5832 22.6667 15.5833H25.5C26.0579 15.5832 26.6103 15.4729 27.1255 15.2588C27.6406 15.0446 28.1084 14.7307 28.5019 14.3352C28.8974 13.9417 29.2112 13.474 29.4254 12.9588C29.6396 12.4436 29.7499 11.8912 29.75 11.3333V8.5C29.7499 7.94209 29.6396 7.38969 29.4254 6.87454C29.2112 6.35938 28.8974 5.89161 28.5019 5.49808C28.1084 5.1026 27.6406 4.78876 27.1255 4.57458C26.6103 4.3604 26.0579 4.25009 25.5 4.25ZM11.3333 18.4167H8.5C7.94209 18.4168 7.38969 18.5271 6.87454 18.7412C6.35938 18.9554 5.89161 19.2693 5.49808 19.6647C5.1026 20.0583 4.78876 20.526 4.57458 21.0412C4.3604 21.5564 4.25009 22.1088 4.25 22.6667V25.5C4.25 26.6687 4.72742 27.7312 5.49808 28.5019C5.89161 28.8974 6.35938 29.2112 6.87454 29.4254C7.38969 29.6396 7.94209 29.7499 8.5 29.75H11.3333C11.8912 29.7499 12.4436 29.6396 12.9588 29.4254C13.474 29.2112 13.9417 28.8974 14.3352 28.5019C14.7307 28.1084 15.0446 27.6406 15.2588 27.1255C15.4729 26.6103 15.5832 26.0579 15.5833 25.5V22.6667C15.5832 22.1088 15.4729 21.5564 15.2588 21.0412C15.0446 20.526 14.7307 20.0583 14.3352 19.6647C13.9417 19.2693 13.474 18.9554 12.9588 18.7412C12.4436 18.5271 11.8912 18.4168 11.3333 18.4167ZM25.5 18.4167H22.6667C22.1088 18.4168 21.5564 18.5271 21.0412 18.7412C20.526 18.9554 20.0583 19.2693 19.6647 19.6647C19.2693 20.0583 18.9554 20.526 18.7412 21.0412C18.5271 21.5564 18.4168 22.1088 18.4167 22.6667V25.5C18.4167 26.6687 18.8941 27.7312 19.6647 28.5019C20.0583 28.8974 20.526 29.2112 21.0412 29.4254C21.5564 29.6396 22.1088 29.7499 22.6667 29.75H25.5C26.0579 29.7499 26.6103 29.6396 27.1255 29.4254C27.6406 29.2112 28.1084 28.8974 28.5019 28.5019C28.8974 28.1084 29.2112 27.6406 29.4254 27.1255C29.6396 26.6103 29.7499 26.0579 29.75 25.5V22.6667C29.7499 22.1088 29.6396 21.5564 29.4254 21.0412C29.2112 20.526 28.8974 20.0583 28.5019 19.6647C28.1084 19.2693 27.6406 18.9554 27.1255 18.7412C26.6103 18.5271 26.0579 18.4168 25.5 18.4167Z"
          // fill={current === 1 ? "black" : "white"}
        />
      </svg>
    )

}
export const ActivityIcon = ({current}: currentProp) => {
  return (
    <svg
    className={`md:group-hover:fill-white group-hover:opacity-[1] ${current === 2 ? " fill-white opacity-[1 ": "fill-black opacity-[0.55] group-hover:fill-white"}`}
    width="28"
    height="28"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.6936 5.66666C21.6266 6.01091 21.5932 6.36084 21.5939 6.71153C21.5939 9.85794 24.1483 12.4086 27.2994 12.4086C27.6463 12.4069 27.9924 12.3736 28.3333 12.3091V23.6037C28.3333 28.3554 25.5304 31.1667 20.7718 31.1667H10.4073C5.6362 31.1667 2.83331 28.3554 2.83331 23.6037V13.2545C2.83331 8.50275 5.6362 5.66666 10.4073 5.66666H21.6936ZM21.6986 14.1689C21.4216 14.2088 21.1726 14.359 21.0084 14.5854L17.5952 18.9764L13.7085 15.9164C13.4866 15.7435 13.2043 15.6672 12.9254 15.7047C12.6464 15.7421 12.3944 15.8902 12.2261 16.1154L8.04045 21.514C7.89332 21.6974 7.81411 21.9258 7.81622 22.1608L7.81989 22.3171C7.86047 22.728 8.14225 23.083 8.54585 23.2104C8.9999 23.3537 9.4936 23.1728 9.74709 22.7703L13.2476 18.2425L17.1342 21.2901C17.3553 21.4683 17.6394 21.5491 17.9214 21.5139C18.2033 21.4787 18.4588 21.3306 18.6291 21.1035L22.6777 15.8791V15.8542C23.0243 15.3885 22.9359 14.7318 22.4784 14.374C22.257 14.203 21.9756 14.1291 21.6986 14.1689Z" />
    <path
      // opacity="0.4"
      d="M27.625 9.91666C29.581 9.91666 31.1666 8.331 31.1666 6.375C31.1666 4.41899 29.581 2.83333 27.625 2.83333C25.669 2.83333 24.0833 4.41899 24.0833 6.375C24.0833 8.331 25.669 9.91666 27.625 9.91666Z"
    />
  </svg>  
  )
}
export const EarningsIcon = ({current}: currentProp) => {
  return (
    <svg
    className={`md:group-hover:fill-white group-hover:opacity-[1] ${current === 3 ? " fill-white opacity-[1] ": "fill-black opacity-[0.55] group-hover:fill-white"}`}
    width="23"
    height="23"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_19_33)">
      <path d="M0.974976 23.6287H4.27873V12.8363L0.974976 14.67V23.6287Z" />
      <path
        d="M7.62003 7.03875C7.51128 6.86625 7.28628 6.8175 7.11753 6.9225L4.07253 8.8425C3.96753 8.91 3.90378 9.02625 3.90378 9.15V10.1288L0.191277 12.1575C0.0150272 12.255 -0.0524727 12.4763 0.0450272 12.6525C0.108777 12.7725 0.236277 12.84 0.363777 12.84C0.423777 12.84 0.483777 12.8288 0.536277 12.7988L4.44003 10.665C4.56003 10.6013 4.63128 10.4775 4.63128 10.3463V9.34875L7.50378 7.5375C7.67628 7.4325 7.72503 7.2075 7.62003 7.03875Z"
        fill="#F93838"
        fill-opacity="0.55"
      />
      <path d="M10.275 9.5175H6.97125V23.6288H10.275V9.5175Z" />
      <path
        d="M9.89626 4.365C9.57751 4.35375 9.19126 4.215 9.05251 3.855C8.94001 3.55875 8.97001 3.2625 9.13501 3.01875C9.29626 2.78625 9.56251 2.6475 9.84376 2.64375V2.6475L9.84751 2.64375C10.32 2.6475 10.7063 3.03 10.7063 3.50625C10.7063 3.705 10.8675 3.87 11.07 3.87C11.2688 3.87 11.43 3.705 11.43 3.50625C11.43 2.75625 10.9088 2.13 10.2075 1.965V1.68C10.2075 1.4775 10.0463 1.31625 9.84376 1.31625C9.64501 1.31625 9.48001 1.4775 9.48001 1.68V1.96125C9.10126 2.05125 8.76376 2.28 8.53501 2.60625C8.23501 3.04875 8.17501 3.6 8.37376 4.1175C8.59876 4.695 9.17251 5.07 9.87376 5.0925C10.1325 5.1 10.3725 5.22375 10.53 5.43C10.6913 5.64375 10.7438 5.90625 10.6763 6.1725C10.6013 6.48375 10.3388 6.73125 10.02 6.795C9.75376 6.84375 9.49876 6.78 9.30001 6.615C9.10126 6.45 8.98501 6.20625 8.98501 5.95125C8.98501 5.74875 8.82376 5.5875 8.62126 5.5875C8.42251 5.5875 8.25751 5.74875 8.25751 5.95125C8.25751 6.4275 8.46751 6.87375 8.83501 7.17375C9.02626 7.33125 9.24751 7.4325 9.48001 7.48875V7.7775C9.48001 7.97625 9.64501 8.14125 9.84376 8.14125C10.0463 8.14125 10.2075 7.97625 10.2075 7.7775V7.4925C10.7775 7.36125 11.2463 6.9075 11.385 6.345C11.5013 5.86875 11.4 5.37375 11.1075 4.99125C10.8188 4.60875 10.3763 4.38 9.89626 4.365Z"
        fill="#F93838"
        fill-opacity="0.55"
      />
      <path d="M16.2713 7.59375H12.9675V23.6287H16.2713V7.59375Z" />
      <path d="M18.9637 23.6287H22.2675V4.7475L18.9637 6.95625V23.6287Z" />
      <path
        d="M23.9925 0.956247C23.97 0.862497 23.9138 0.779997 23.8313 0.731247C23.7938 0.708747 23.7488 0.689997 23.7075 0.682497C23.7038 0.682497 23.7 0.682497 23.7 0.682497L21.8475 0.378747C21.6488 0.344997 21.465 0.483747 21.4313 0.678747C21.3975 0.877497 21.5325 1.065 21.7313 1.09875L22.7138 1.25625L17.355 5.11875H12.585C12.3825 5.11875 12.2213 5.28 12.2213 5.4825C12.2213 5.68125 12.3825 5.84625 12.585 5.84625H17.4675C17.5425 5.84625 17.6175 5.82 17.6813 5.775L23.1413 1.84875L22.98 2.83125C22.9463 3.03 23.0813 3.2175 23.28 3.2475C23.2988 3.25125 23.3213 3.25125 23.34 3.25125C23.5125 3.25125 23.67 3.1275 23.6963 2.9475L24 1.09875C24 1.0875 23.9963 1.07625 23.9963 1.065C24 1.03125 24.0038 0.993747 23.9925 0.956247Z"
        fill="#F93838"
        fill-opacity="0.55"
      />
    </g>
    <defs>
      <clipPath id="clip0_19_33">
        <rect width="23" height="23" fill="white" />
      </clipPath>
    </defs>
  </svg>
  )
}
export const VerificationIcon = ({current}: currentProp) => {
  return (
    <svg
    className={`md:group-hover:fill-white group-hover:opacity-[1] ${current === 4 ? " fill-white opacity-[1] ": "fill-black opacity-[0.55] group-hover:fill-white"}`}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.021 2.97675C16.8543 5.62275 20.5748 6.89675 24.4283 7.81725C24.2445 16.184 20.5835 23.163 13.993 25.4607C10.5613 24.3495 7.96953 22.0132 6.21778 18.8335C4.50978 15.736 3.66278 11.865 3.57178 7.84C7.62303 7.22575 11.2403 5.775 14.0193 2.97675H14.021ZM18.6725 10.4685L12.2903 16.0545L9.36778 13.1355L8.13053 14.3727L12.208 18.4503L19.8275 11.7845L18.6725 10.4685Z" />
  </svg>
  )
}
export const SettingsIcon = ({current}: currentProp) => {
  return (
    <svg
    className={`md:group-hover:fill-white group-hover:opacity-[1] ${current === 5 ? " fill-white opacity-[1] ": "fill-black opacity-[0.55] group-hover:fill-white"}`}
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_19_46)">
      <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75002 2 9.54002 2.18 9.51002 2.42L9.13002 5.07C8.52002 5.32 7.96002 5.66 7.44002 6.05L4.95002 5.05C4.72002 4.96 4.46002 5.05 4.34002 5.27L2.34002 8.73C2.21002 8.95 2.27002 9.22 2.46002 9.37L4.57002 11.02C4.53002 11.34 4.50002 11.67 4.50002 12C4.50002 12.33 4.53002 12.66 4.57002 12.98L2.46002 14.63C2.27002 14.78 2.22002 15.05 2.34002 15.27L4.34002 18.73C4.46002 18.95 4.73002 19.03 4.95002 18.95L7.44002 17.95C7.96002 18.35 8.52002 18.68 9.13002 18.93L9.51002 21.58C9.54002 21.82 9.75002 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.50002 13.93 8.50002 12C8.50002 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" />
    </g>
    <defs>
      <clipPath id="clip0_19_46">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
  )
}
