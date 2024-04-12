import { ridleyGroteskDemo } from '@/data/font';

const BlogDesc = () => {
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis dolorem dolores sunt eum magni minima! Accusantium animi, nobis, mollitia veniam aut nihil et natus voluptates officia, molestiae nam voluptatibus?
    </p>
  );
};

export default BlogDesc;