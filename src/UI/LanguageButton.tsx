import React from "react";
import { ReduxState } from "../Store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentLanguage } from "../Store/reduser/homePageSlice";

interface LanguageButtonProps {
  language: string;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ language }) => {
  const currentLanguage = useSelector(
    (state: ReduxState) => state.homePage.currentLanguage
  );

  const dispatch = useDispatch();

  console.log(
    "🚀 ~ file: LanguageButton.tsx:14 ~ currentLanguage:",
    currentLanguage === language
  );

  return (
    <div
      className={currentLanguage === language ? "current-language" : "language"}
      onClick={() => dispatch(setCurrentLanguage(language))}
    >
      {language.toLocaleUpperCase()}
    </div>
  );
};

export default LanguageButton;
