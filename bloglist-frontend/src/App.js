import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Login from "./components/Login";
import blogService from "./services/blogs";
import loginService from "./services/login";

const localStorageUserKey = "bloglistUser";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const strUser = window.localStorage.getItem(localStorageUserKey);
    setUser(JSON.parse(strUser));
  }, []);

  const handleLogin = async (username, password) => {
    const user = await loginService.login(username, password);
    window.localStorage.setItem(localStorageUserKey, JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    window.localStorage.removeItem(localStorageUserKey);
    setUser(null);
  };

  const loginForm = () => <Login handleLogin={handleLogin} />;

  const loginDetails = () => (
    <>
      <p>{user.name} logged in</p>
      <button onClick={logout}>logout</button>
    </>
  );

  const blogList = () => (
    <>
      <h2>blogs</h2>
      {loginDetails()}
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </>
  );

  return <div>{user === null ? loginForm() : blogList()}</div>;
};

export default App;
