import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Introduction from "./pages/Introduction";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pageNotFound" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
