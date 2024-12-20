import SuccessHistory1 from "../assets/success-history-1.jpg";
import SuccessHistory2 from "../assets/success-history-2.jpg";
import SuccessHistory3 from "../assets/success-history-3.jpg";
import SuccessHistoryItem from "../components/SuccessHistoryItem";

function SuccessHistory() {
  const data = [
    {
      studyCenter: "PDP",
      fullName: "Abror Jurayev",
      desc: "How to Become a Senior Developer During Your Student Years",
      tags: ["Andijan", "FrontEnd"],
      image: SuccessHistory1,
    },
    {
      studyCenter: "Mohirdev",
      fullName: "Mohira To’laganova",
      desc: "How to Become a Senior Developer During Your Student Years",
      tags: ["Navoi", "Backend"],
      image: SuccessHistory2,
    },
    {
      studyCenter: "Alloma",
      fullName: "Sevinch Muqimova",
      desc: "How to Become a Senior Developer During Your Student Years",
      tags: ["Tashkent", "Design"],
      image: SuccessHistory3,
    },
  ];

  const Button = ({ children, className, ...props }) => (
    <button
      className={`px-4 py-2 rounded font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div>
      <h1 className="title mb-[40px]">Muvaffaqiyat tarixi</h1>

      <div className="flex justify-center gap-6 lg:gap-0 lg:justify-between items-center flex-wrap">
        {data &&
          data.map((item) => {
            return (
              <SuccessHistoryItem
                studyCenter={item.studyCenter}
                fullname={item.fullName}
                desc={item.desc}
                tags={item.tags}
                image={item.image}
              />
            );
          })}
      </div>

      <div className="text-center mt-[40px]">
        <Button className="bg-blue-500 rounded-3xl hover:bg-blue-600 text-white px-8">
          Barcha tadbirlar
        </Button>
      </div>
    </div>
  );
}

export default SuccessHistory;
