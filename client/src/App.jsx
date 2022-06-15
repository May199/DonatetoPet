import {
  Welcome, 
  Footer, 
  Transactions, 
  Navbar
} from './components';

const App = () => {

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>

      <Transactions/>
      <Footer/>

    </div>
  )
}

export default App;
