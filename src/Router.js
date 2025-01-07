import { HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Introduction from "./pages/Introduction";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";
import Study from "./pages/Study";
import WorkDetail from "./pages/detail/WorkDetail";
import Header from "./components/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/study" element={<Study />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
    </HashRouter>
  );
};

export default Router;
