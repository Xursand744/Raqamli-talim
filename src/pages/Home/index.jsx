// import Chances from "./chances";
import Plan from "./plan";
import Counts from "./counts";
import Compensation from "./Compensation";
import Darection from "./darection";
import School from "./School";
// import Rate from "../Rate";
import SuccessHistory from "./SuccessHistory";
// import Join from "./Join";
import Carousel from "../Carousel";
// import JobAnalytics from "./JobAnalytics";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation("global");
  return (
    <>
      <Helmet>
        <title>{t('home.seo.title')}</title>
        <meta name="description" content={t('home.seo.description')} />
        <meta name="keywords" content={t('home.seo.keywords')} />
        {/* Open Graph */}
        <meta property="og:title" content={t('home.seo.title')} />
        <meta property="og:description" content={t('home.seo.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Raqamli Ta'lim" />
        {/* Twitter */}
        <meta name="twitter:title" content={t('home.seo.title')} />
        <meta name="twitter:description" content={t('home.seo.description')} />
      </Helmet>
    <div data-page="home">
      <Carousel />
      <div className="w-full">
        {/* <JobAnalytics /> */}
      </div>
      <div className="max-w-[1440px] mx-auto mt-[100px]">
        {/* <Chances /> */}
      </div>
      <Plan />
      <Compensation />
      <Counts />
      <Darection />

      <div className="container">
        <SuccessHistory />
      </div>

      <School />
      {/* <Join /> */}
    </div>
    </>
  );
}
