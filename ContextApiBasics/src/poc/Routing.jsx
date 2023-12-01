import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

function Rounting() {
  return (
    <>
      <h2>Routing Examples</h2>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home page</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/listing'>Listing</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about/*' element={<About></About>}></Route>
        <Route path='/listing' element={<Listing></Listing>}></Route>
        <Route path='/user/:id' element={<User></User>}></Route>
        <Route path='/*' element={<Notfound></Notfound>}></Route>
        {/* Re-direct routes */}
        <Route path='/root' element={<Navigate to='/home'></Navigate>}></Route>
      </Routes>
    </>
  );
}

export function Home() {
  return (
    <>
      <h2>Through route home</h2>
    </>
  );
}

export function About() {
  return (
    <>
      <h2>Through route About page</h2>
      <Routes>
        <Route path='/company' element={<Company></Company>}></Route>
        <Route path='/founder' element={<Founder />}></Route>
      </Routes>
    </>
  );
}

function Company() {
  return <h2>Darlas</h2>;
}

function Founder() {
  return <h2>SaiBabu Garu</h2>;
}

export function Listing() {
  return (
    <>
      <h2>Through route Listing page</h2>
    </>
  );
}

export function User(props) {
  console.log(props);
  let params = useParams();
  console.log(params);

  let [user, setUser] = useState(null);

  // https://fakestoreapi.com/users/2

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://fakestoreapi.com/users/${params.id}`
      );
      const userData = await response.json();
      console.log(userData);
      setUser(userData);
    })();
  }, []);

  return (
    <>
      {user === null ? (
        <h3>... Loading</h3>
      ) : (
        <>
          <h4>Username: {user.username}</h4>
          <h4>
            FullName: {user.name.firstname} {user.name.lastname}
          </h4>
          <h4>Phone: {user.phone}</h4>
        </>
      )}
    </>
  );
}
export function Notfound() {
  return (
    <>
      <h1>Not found</h1>
    </>
  );
}
export default Rounting;
