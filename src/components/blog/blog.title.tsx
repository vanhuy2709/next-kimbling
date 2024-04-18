import { sequel } from '@/data/font';

interface IProps {
  title: string;
  color: string
}

const BlogTitle = (props: IProps) => {
  const { title, color } = props;

  return (
    <h2
      className={`${sequel.className}`}
      style={{
        fontSize: 'calc(2.5rem + (1.25 * (100vw - 85.375rem)) / 34.625)',
        margin: '5rem 0 3rem',
        textAlign: 'center',
        color: color,
        textTransform: 'uppercase',
      }}
    >
      {title}
    </h2>
  );
};

export default BlogTitle;