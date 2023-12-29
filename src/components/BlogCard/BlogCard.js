import BlogImage from "./../../assets//images//illustration-article.svg";
import AuthorIcon from "./../../assets/images/image-avatar.webp";

const BlogCard = () => {
  return (
    <div className="grid place-items-center min-h-screen p-6">
      <div className="bg-white max-w-[384px] p-6 rounded-[20px] flex gap-6 flex-col drop-shadow-[8px_8px_0_rgba(0,0,0,1)]">
        <img src={BlogImage} className="rounded-[10px]" />
        <div className="flex flex-col gap-3">
          <div>
            <span className="text-[14px] inline-block rounded bg-yellow px-3 py-1 font-bold  leading-5">
              Learning
            </span>
          </div>
          <div>
            <span className="text-[14px] font-medium">
              Published 21 Dec 2023
            </span>
          </div>
          <div>
            <h2 className="text-[24px] font-extrabold">
              HTML & CSS foundations
            </h2>
          </div>
          <div>
            <p className="text-grey text-[16px] font-medium leading-[150%]">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <img src={AuthorIcon} className="h-8 object-cover" />
          <span className="text-[14px] font-bold leading-[150%]">
            Greg Hooper
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
