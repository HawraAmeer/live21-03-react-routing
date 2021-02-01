import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, ButtonsWrapper } from "./styles";

const InstructorProfile = ({ instructors }) => {
  const { instructorSlug } = useParams();
  const instructor = instructors.find(
    (instructor) => instructor.slug === instructorSlug
  );

  if (!instructor) return <Redirect to="/404" />;

  const goToGitHub = () =>
    window.open(`https://github.com/${instructor.github}`);

  return (
    <>
      <h1>{instructor.emoji}</h1>
      <h2>{instructor.name}</h2>
      <p>{instructor.description}</p>

      <ButtonsWrapper>
        <Link to="/">
          <Button color="tomato" textColor="white">
            Go back home
          </Button>
        </Link>
        <Button onClick={goToGitHub}>Go to GitHub</Button>
      </ButtonsWrapper>
    </>
  );
};

export default InstructorProfile;
