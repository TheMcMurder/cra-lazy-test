import { lazy, Suspense, useState } from 'react'
import { ErrorBoundary } from './error-boundary.js'
import './App.css';

const laziesLength = 50
const lazies = Array.from(Array(laziesLength).keys()).map((item, index) => {
  return lazy(() => import(`./generated/generated_${index}.js`))
})
console.log('lazies', lazies)

function App() {
  const [showLazies, setShowLazies] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <div>
          React Lazy extreme test
        </div>
        <button onClick={() => {
          setShowLazies(old => !old)
        }}>
          Toggle Lazies
        </button>
      </header>
      <div className='lazyContainer'>
        {
          !showLazies ? 'No lazies' : (
            lazies.map((LazyComp, index) => {
              return (<div key={index}>
                  <ErrorBoundary errorMessage={`Error loading ${index}`}>
                <Suspense fallback={`Loading ${index}`}>
                    <LazyComp />
                </Suspense>
                  </ErrorBoundary>
              </div>
              )
            })
          )
        }
      </div>
    </div>
  );
}

export default App;
