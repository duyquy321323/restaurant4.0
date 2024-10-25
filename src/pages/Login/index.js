import LeftLayout from "../../components/LeftComponentDefault";

function Login(props) {
  const { title, content } = props;
  return (
    <>
      <LeftLayout title={title} content={content} />
      Login
    </>
  );
}

export default Login;
