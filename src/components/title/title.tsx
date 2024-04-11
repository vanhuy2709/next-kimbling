import { sequel } from "@/data/font"

interface IProps {
  name: string,
  color: string
}

const Title = (props: IProps) => {

  const { name, color } = props;

  return (
    <h2
      className={`text-[1.8rem] md:text-[3rem] lg:text-[6.4rem] ${sequel.className} uppercase`}
      style={{
        WebkitTextStroke: `1px ${color}`,
        color: 'transparent',
        marginBottom: '1rem'
      }}
    >
      {name}
    </h2>
  );
};

export default Title;