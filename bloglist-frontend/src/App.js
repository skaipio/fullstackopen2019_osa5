import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Login from "./components/Login";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs));
  }, []);

  const handleLogin = async (username, password) => {
    const user = await loginService.login(username, password);
    setUser(user);
  };

  const loginForm = () =>
    <Login handleLogin={handleLogin} />

  const blogList = () => (
    <>
      <h2>blogs</h2>
      <p>{user.name} logged in</p>
      {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
    </>
  )

  return (
    <div>
      {user === null ? loginForm() : blogList()}
    </div>
  );
};

export default App;
