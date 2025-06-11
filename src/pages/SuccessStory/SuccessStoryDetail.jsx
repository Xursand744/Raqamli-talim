import { useParams, NavLink } from "react-router-dom";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import HomeIcon from "../../assets/home-icon.svg";
import { useTranslation } from "react-i18next";

const Breadcrumb = ({ fullName }) => {
  const { t } = useTranslation("global");
  
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <NavLink to="/" className="hover:text-gray-900 flex items-center gap-[10px]">
        <img src={HomeIcon} alt="" />
        {t("breadcrumbs.home")}
      </NavLink>
      <ChevronRight size={16} />
      <NavLink to="/" className="hover:text-gray-900">
        {t("successHistory.title")}
      </NavLink>
      <ChevronRight size={16} />
      <span className="text-gray-900">{fullName}</span>
    </div>
  );
};

Breadcrumb.propTypes = {
  fullName: PropTypes.string.isRequired,
};

const VideoSection = ({ videoSrc, title }) => (
  <section className="mb-16">
    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
      {title}
    </h2>
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
        <video 
          className="w-full aspect-video rounded-lg mb-4"
          controls
          poster=""
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-gray-700 text-sm text-center">Muvaffaqiyat tarixi haqida video material</p>
      </div>
    </div>
  </section>
);

VideoSection.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default function SuccessStoryDetail() {
  const { id } = useParams();
  const { t } = useTranslation("global");

  // Success story data based on ID
  const successStories = {
    "zarnigor-raximova": {
      fullName: "Zarnigor Raximova",
      studyCenter: "PDP",
      image: "/src/assets/success-history-1.png",
      videoSrc: "/src/assets/videos/5.mp4",
      content: [
        "Zarnigor Raximova Niderlandiyaning Eyndxoven shahrida 2024-yil 21–27-iyul kunlari bo'lib o'tgan nufuzli olimpiadada Yevropa qizlar olimpiadasida (EGOI) O'zbekiston terma jamoasi safida ishtirok etdi.",
        "57 davlatdan 200 ga yaqin vakil ishtirok etgan mazkur nufuzli musobaqada O'zbekiston jamoasidan Zarnigor Raximova 329 ball bilan bronza medalini qo'lga kiritdi.",
        "Zarnigor Buxoro viloyati Kogon tumani 12-umumta'lim maktabi bitiruvchisi hisoblanadi.",
        "Shunga ko'ra, Zarnigor Raximova Xalqaro IT olimpiada sovrindori sifatida Amity universiteti taʼlim granti bilan taqdirlandi.",
        "Amity universiteti Raximova Zarnigorni \"Eng yaxshi dasturchi\" tanlovida erishgan ajoyib muvaffaqiyati, uni dasturlashdagi ajoyib mahorati va innovatsion yondashuvini e'tirof etib, \"Eng omadli dasturchi\" nominatsiyasi bilan taqdirladi."
      ]
    },
    "abror-juraev": {
      fullName: "Abror Juraev",
      studyCenter: "PDP",
      image: "/src/assets/success-history-1.png",
      videoSrc: "/src/assets/videos/5.mp4",
      content: [
        "Abror Juraev PDP Academy bitiruvchisi bo'lib, o'qish davrida katta dasturchi bo'lishga erishdi.",
        "U frontend texnologiyalari bo'yicha chuqur bilimga ega bo'lib, joriy loyihalarda faol ishlaydi.",
        "Andijon viloyatida joylashgan bo'lib, mahalliy IT hamjamiyatiga katta hissa qo'shmoqda."
      ]
    },
    "mohira-tulaganova": {
      fullName: "Mohira Tulaganova",
      studyCenter: "Mohirdev",
      image: "/src/assets/success-history-2.jpg",
      videoSrc: "/src/assets/videos/5.mp4",
      content: [
        "Zarnigor Raximova Niderlandiyaning Eyndxoven shahrida 2024-yil 21–27-iyul kunlari bo'lib o'tgan nufuzli olimpiadada Yevropa qizlar olimpiadasida (EGOI) O'zbekiston terma jamoasi safida ishtirok etdi.",
        "57 davlatdan 200 ga yaqin vakil ishtirok etgan mazkur nufuzli musobaqada O'zbekiston jamoasidan Zarnigor Raximova 329 ball bilan bronza medalini qo'lga kiritdi.",
        "Zarnigor Buxoro viloyati Kogon tumani 12-umumta'lim maktabi bitiruvchisi hisoblanadi.",
        "Shunga ko'ra, Zarnigor Raximova Xalqaro IT olimpiada sovrindori sifatida Amity universiteti taʼlim granti bilan taqdirlandi.",
        "Amity universiteti Raximova Zarnigorni \"Eng yaxshi dasturchi\" tanlovida erishgan ajoyib muvaffaqiyati, uni dasturlashdagi ajoyib mahorati va innovatsion yondashuvini e'tirof etib, \"Eng omadli dasturchi\" nominatsiyasi bilan taqdirladi."
      ]
    },
    "sevinch-mukimova": {
      fullName: "Sevinch Mukimova",
      studyCenter: "Alloma",
      image: "/src/assets/success-history-3.jpg",
      videoSrc: "/src/assets/videos/5.mp4",
      content: [
        "Sevinch Mukimova Alloma o'quv markazi bitiruvchisi bo'lib, dizayn sohasida muvaffaqiyat qozondi.",
        "Toshkent shahrida joylashgan bo'lib, UI/UX dizayn bo'yicha mutaxassis.",
        "O'z ijodiy qobiliyatlarini rivojlantirib, zamonaviy dizayn trendlarini o'rganmoqda."
      ]
    }
  };

  const story = successStories[id];

  if (!story) {
    return (
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("errors.storyNotFound")}
          </h1>
          <p className="text-gray-600">
            {t("errors.storyNotFoundDesc")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb fullName={story.fullName} />

        <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
          {story.fullName}
        </h1>

        <div className="relative mb-12">
          <img
            src={story.image}
            alt={story.fullName}
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>

        <div className="mb-12">
          {story.content.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <VideoSection 
          videoSrc={story.videoSrc} 
          title={t("successHistory.videoTitle")}
        />
      </div>
    </div>
  );
} 