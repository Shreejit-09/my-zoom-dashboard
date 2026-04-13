// App.jsx
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}