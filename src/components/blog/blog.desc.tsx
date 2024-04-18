import { ridleyGroteskDemo } from '@/data/font';

interface IProps {
  description: string;
}
const BlogDesc = (props: IProps) => {
  const { description } = props;
  return (
    <p
      className={`${ridleyGroteskDemo.className}`}
      style={{
        fontSize: 'calc(1rem + (0.25 * (100vw - 85.375rem)) / 34.625)',
        color: 'white',
        marginBottom: '3rem',
        textAlign: 'center'
      }}
    >
      {description}
    </p>
  );
};

export default BlogDesc;