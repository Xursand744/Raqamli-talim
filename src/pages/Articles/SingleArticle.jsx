import { useParams } from "react-router-dom";
import { oneMillionUzbekCodersCards } from "../../utils";

function SingleArticle() {
  const { idx } = useParams();

  if (idx < 1 || idx > 6) {
    return <h1 className="mt-[100px]">404</h1>;
  }

  const article = oneMillionUzbekCodersCards[idx - 1];

  return (
    <div className="max-w-[1230px] mx-auto mt-[100px] mb-[50px]">
      <h1 className="text-[1.5rem] text-[#0284C7] font-semibold uppercase montserrat-font">
        {article.text}
      </h1>

      <div className="flex justify-between mt-[50px] gap-[20px]">
        <div className="max-w-[482px]">
          <img src={article.img} className="w-full" alt="" />
        </div>
        <div className="w-2/3">
          <p className="text-justify montserrat-font">{article.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleArticle;
