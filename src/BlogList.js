const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="blog-list">
      {blogs.map((item) => (
        <div className="blog-preview" key={item.id}>
          <h2>{item.title}</h2>
          <h2>{title}</h2>
          <p>Written by {item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
