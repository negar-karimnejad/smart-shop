import { getCurrentUser } from "../../../../providers/getCurrentUser";
import Container from "../../../components/ui/Container";
import SignupForm from "../components/SignupForm";

async function Signup() {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <div className="my-8 shadow-lg rounded-lg p-7 max-w-xl mx-auto">
        <SignupForm currentUser={currentUser} />
      </div>
    </Container>
  );
}

export default Signup;
