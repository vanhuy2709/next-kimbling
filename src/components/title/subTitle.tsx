import { sequel } from "@/data/font";

interface IProps {
  title: string,
  isUpperCase?: boolean
}
const SubTitle = (props: IProps) => {
  const { title, isUpperCase: format } = props;

  return (
    <h2
      className={`text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-extrabold ${sequel.className} mb-6 leading-none text-black ${format ? 'uppercase' : ''}`}
    >
      {title}
    </h2>
  );
};

export default SubTitle;