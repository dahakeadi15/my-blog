export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1690907932520-8ac437939237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80"
          alt=""
        />
      </div>
      <div className="text">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro!</h2>
        <p className="info">
          <a href="" className="author">
            Lorem Ipsum
          </a>
          <time>2023-01-01 15:45</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          provident illum placeat laborum voluptatem itaque illo ipsam. Maxime.
        </p>
      </div>
    </div>
  );
}
