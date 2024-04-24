
interface IProps {
  video: string | undefined;
}

const BlogVideo = (props: IProps) => {

  const { video } = props;

  return (
    <div style={{
      overflow: "hidden",
      paddingBottom: '56.25%', /* 16:9 aspect ratio */
      position: 'relative',
      height: 0,
      textAlign: 'center'
    }}>
      <iframe
        src={`https://www.youtube.com/embed/${video}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          left: '10%',
          top: '10%',
          height: "80%",
          width: "80%",
          position: "absolute",
        }}
      ></iframe>
    </div>
  );
};

export default BlogVideo;