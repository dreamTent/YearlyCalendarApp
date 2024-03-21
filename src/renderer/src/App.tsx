/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import './Calendar.css'

import CalenderGroupedByMonth from './components/calendar/calendar_days_grouped_by_month/Calendar'
import CalenderHorizontal from './components/calendar/calendar_horizontal_month_list/Calendar'
import CategoryFilterTable from './components/calendar/common/CategoryFilterTable'
import Navbar from './components/navigation/navbar'






function App() {
  return (
    <>
      <Navbar />
      <div style={{ float: 'left', fontSize: '10px', marginLeft: '10px' }}>  {CategoryFilterTable()}</div>
      <div style={{ float: 'left' }}>{CalenderGroupedByMonth(2024, 11, 5)}</div>
      <div style={{ width: '100%', height: '400px' }}></div>
      <div style={{ float: 'left' }}>{CalenderHorizontal(2024, 1, 3)}</div>



    </>
    /* <div style={{ height: 'calc(100% - 60px)' }}>{CalendarHorizontal('2024')}</div>*/
    /*
        <>
          
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
        */
  )
}

export default App
