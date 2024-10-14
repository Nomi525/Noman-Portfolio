import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Home, Error } from '@/pages';
// import { Home, Login, About, SignUp, Error } from '@/pages';
const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/a" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sign-up" element={<SignUp />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
