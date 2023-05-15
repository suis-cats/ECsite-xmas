import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {GoodsList, Detail} from './goods.js';

function App() {
  return (

    <div>

      <BrowserRouter>
      <div class="alert alert-warning" role="alert"><strong>
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="警告:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </strong>授業の課題で制作したテストサイトです。</div>
      <div>
        <header class="header01">
          <div className=''></div>
          

          <ul className="title">
            <p>　　　</p>
            <p>　</p>
            <a class="url" href="#"><h1 class="header01-title">STORE</h1></a>
            <p>　</p>
            <a class="url" href="https://google.com">
            <img src="images/account1.svg" class="header-icon" alt="my account" />
            signup</a>
          </ul>

        </header>
      </div>
      <header class="header02">
        <nav>
          <ul>
            <li><a href="#">NEW</a></li>
            <li><a href="#">TRENDS</a></li>
            <li><a href="#">SALE</a></li>
            <li><a href="#">RANK</a></li>

          </ul>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<GoodsList />}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>

        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

function Top(){
  return(
    <div>
      <h2>ここはトップページ</h2>
      <p><Link to="/foo">フーページへ</Link></p>
    </div>
  )
}

function Foo(){
  return(
    <div>
      <h2>ここはフーページ。</h2>
      <p><Link to="/">トップページへ</Link></p>
    </div>
  )
}




export default App;
