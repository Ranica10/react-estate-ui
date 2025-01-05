import "./homePage.scss"

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
            <h1 className="title">Find your dream place today!</h1>
            <p className="description">
                Through the usage of our state-of-the-art real estate search, find the home you are looking for with the click of a button. 
                Filter out potential locations using the options below, and have your results within seconds!
            </p>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage