import Head from 'next/head';
import NavBar from './components/NavBar.js';
import Testimonial from './components/Testimonial.js';
import BookList from './components/BookList.js';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar></NavBar>

      <BookList></BookList>
      <Testimonial></Testimonial>
    </div>
  );
}
