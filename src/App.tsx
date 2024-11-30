
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

function App() {

  const layoutPaddings = "px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20";

  return (
    <div className="flex flex-col bg-slate-100">
      <Header layoutPaddings={layoutPaddings} />
      <Main layoutPaddings={layoutPaddings} />
      <Footer layoutPaddings={layoutPaddings} />
    </div>
  )
}

export default App
