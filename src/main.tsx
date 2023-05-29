import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import DetailsPage from './features/DetailsPage/DetailsPage.tsx'
import SearchBrowser from './features/SearchBrowser/SearchBrowser.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='artwork' element={<SearchBrowser />} />
          <Route path='artwork/:id' element={<DetailsPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
