import { getCurrentUser } from "../../../../providers/getCurrentUser";
import Container from "../../../components/ui/Container";
import SigninForm from "../components/SigninForm";

async function Signin() {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <div className="my-8 shadow-lg rounded-lg p-7 max-w-xl mx-auto">
        <SigninForm currentUser={currentUser} />
      </div>
    </Container>
  );
}

export default Signin;
