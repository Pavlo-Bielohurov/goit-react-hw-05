import { Link } from "react-router-dom";

export default function NotFaund() {
  return (
    <>
      <p>
        Sorry, this page does not exist or has been deleted.Please use this link
        to go <Link to="/">main page</Link>
      </p>
    </>
  );
}
