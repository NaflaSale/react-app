import { useTranslation } from "react-i18next";
import React from 'react';

export default function ContactUs(){
    const { t } = useTranslation();
  return (
    <div>
       <h1 className="text-[40px] flex justify-center pt-20 sm:text-[30px] font-title text-darkBlue pb-[22px]">
        {t("home.page.cotact")}
      </h1>
      <hr></hr>
      <div className="text-[30px] flex flex-col space-y-4  items-center pt-20 sm:text-[20px]  text-darkBlue pb-[22px]">
      <p>email@gmail.com</p>
      <p>966532145670+</p>
      
      </div>
    </div>
  )
}