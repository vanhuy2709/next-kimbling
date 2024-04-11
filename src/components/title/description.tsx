import { sourceSerif } from "@/data/font";

interface IProps {
  content: string
}

const Description = (props: IProps) => {

  const { content } = props;

  return (
    <p className={`text-base md:text-xl ${sourceSerif.className} mb-14 text-black`}>
      {content}
    </p>
  );
};

export default Description;