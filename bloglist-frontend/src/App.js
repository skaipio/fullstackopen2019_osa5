import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";
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
    if (!strUser) return

    const parsedUser = JSON.parse(strUser)

    loginService.setUser(parsedUser)
    setUser(parsedUser);
  }, []);

  const handleLogin = async (username, password) => {
    const user = await loginService.login(username, password);
    window.localStorage.setItem(localStorageUserKey, JSON.stringify(user));
    loginService.setUser(user)
    setUser(user);
  };

  const logout = () => {
    window.localStorage.removeItem(localStorageUserKey);
    setUser(null);
  };

  const createBlog = async (blog) => {
    const savedBlog = await blogService.create(blog)
    setBlogs(blogs.concat(savedBlog))
    return true
  }

  const loginForm = () => <Login handleLogin={handleLogin} />;

  const loginDetails = () => (
    <>
      <p>{user.name} logged in</p>
      <button onClick={logout}>logout</button>
    </>
  );

  const blogPage = () => (
    <>
      <h2>blogs</h2>
      {loginDetails()}
      <CreateBlog handleCreate={createBlog} />
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </>
  );

  return <div>{user === null ? loginForm() : blogPage()}</div>;
};

export default App;
