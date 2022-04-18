import Head from 'next/head';
import NavBar from './components/NavBar.js'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <NavBar></NavBar>
</div>
      <div>
        <button className="btn">Hello daisyUI</button>
        <button class="btn">Button Test</button>
        <button class="btn btn-primary">Button</button>
        <button class="btn btn-secondary">Button</button>
        <button class="btn btn-accent">Button</button>
        <button class="btn btn-ghost">Button</button>
        <button class="btn btn-link">Button</button>
      </div>
    </div>
  );
}
