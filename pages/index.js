import Head from 'next/head';
import NavBar from './components/NavBar.js';
import Testimonial from './components/Testimonial.js';
import Book from './components/Book.js';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar></NavBar>
      <Testimonial></Testimonial>
      <Book></Book>
    </div>
  );
}
