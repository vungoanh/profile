import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="user" id="user">
          <h3 className="name">vu ngo</h3>
          <p className="post">front end developer</p>
        </div>
        <nav class="navbar" id="navbar">
          <ul>
            <li><a href="#home">trang chủ</a></li>
            <li><a href="#about">giới thiệu</a></li>
            <li><a href="#education">kinh nghiệm</a></li>
            <li><a href="#portfolio">dự án</a></li>
            <li><a href="#contact">liên hệ</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}


export default App;
