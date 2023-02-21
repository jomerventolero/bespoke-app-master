const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    textResH1: "xl:text-[70px] lg:text-[66px] md:text-[66px] sm:text-[66px] ss:text-[56px] xs:text-[38px]",
    textResH2: "xl:text-[66px] lg:text-[26x] md:text-[20px] sm:text-[16px] ss:text-[6px] xs:text-[4px]",
    textResH3: "xl:text-[18px] lg:text-[15px] md:text-[14px] sm:text-[8px] ss:text-[2px] xs:text-[2px]",
    textRes: "xl:text-[20px] lg:text-[12px] md:text-[10px] sm:text-[8px] ss:text-[6px] xs:text-[4px]",
    textResCard: "xl:text-[25px] lg:text-[22px] md:text-[18px] sm:text-[15px] ss:text-[12px] xs:text-[8px]",
    textResHeadings: "xl:text-[25px] lg:text-[22px] md:text-[18px] sm:text-[15px] ss:text-[12px] xs:text-[8px]",
    textResNavLinks: "xl:text-[20px] lg:text-[18x] md:text-[11px] sm:text-[9px] ss:text-[8px] xs:text-[7px]",
    textResContactForm: "xl:text-[35px] lg:text-[22x] md:text-[15px] sm:text-[15px] ss:text-[12px] xs:text-[8px]",
    textResP: "xl:text-[30px] lg:text-[25px] md:text-[20px] sm:text-[15px] ss:text-[12px] xs:text-[8px]",
    

    navbarRes: "sm:hidden ss:hidden xs:hidden"
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;