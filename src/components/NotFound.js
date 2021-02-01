import { Link } from "react-router-dom";
import { Button } from "./styles";

const NotFound = () => (
  <>
    <h2>404 this page does not exist!</h2>
    <Link to="/">
      <Button>Go back home!</Button>
    </Link>
  </>
);

export default NotFound;
