import { sequel } from '@/data/font';

const BlogTitle = () => {
  return (
    <h2
      className={`${sequel.className}`}
      style={{
        fontSize: 'calc(2.5rem + (1.25 * (100vw - 85.375rem)) / 34.625)',
        margin: '5rem 0 3rem',
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
      }}
    >
      Hello
    </h2>
  );
};

export default BlogTitle;