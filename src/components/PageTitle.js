import { Helmet } from "react-helmet-async";

const PageTitle = ({title}) => {
  return (
    <Helmet>
      <title> {title} | INTRODUCTION</title>
    </Helmet>
  );
};
export default PageTitle;