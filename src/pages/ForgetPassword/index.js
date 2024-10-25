import LeftLayout from "../../components/LeftComponentDefault";

function ForgetPassword(props) {
  const { title, content } = props;
  return (
    <>
      <LeftLayout title={title} content={content} />
      ForgetPassword
    </>
  );
}

export default ForgetPassword;
