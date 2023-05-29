import { useTranslation } from "react-i18next";
import React from 'react';

export default function AboutUs(){
    const { t } = useTranslation();
  return (
    <div>
       <h1 className="text-[40px] flex justify-center pt-20 sm:text-[30px] font-title text-darkBlue pb-[22px]">
        {t("home.page.about")}
      </h1>
    </div>
  )
}