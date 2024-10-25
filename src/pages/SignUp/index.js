import LeftLayout from "../../components/LeftComponentDefault";

function SignUp(props) {
  const { title, content } = props;
  return (
    <>
      <LeftLayout title={title} content={content} />
      SignUp
    </>
  );
}

export default SignUp;
