import { useEffect, useState } from "react";
import { Card,Container} from "react-bootstrap";

const Blogs = () => {
  const [blog, setBlog] = useState([]);

  const fetchTheBlogs = async () => {
    try {
      let response = await fetch("http://localhost:3005/universityBlog");
      let data = await response.json();
      setBlog(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTheBlogs();
  }, []);
  return (
    <>
    <Container>
      {blog.map((b) => (
        <Card>
          <Card.Body>
            <Card.Text>{b.name}</Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={b.image} />
        </Card>
      ))}
      </Container>
    </>
  );
};

export default Blogs;
