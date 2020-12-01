import React, { useState } from 'react'
import Header from '../components/Header'

export default function MyLayout({ children }) {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <p>
        <h1>Company Name</h1>
      </p>
      <p>
        <Header />
      </p>
      <p>
        <button onClick={() => setCounter(counter + 1)}>
          Clicked {counter} Times
        </button>
      </p>

      {children}
      <style jsx global>{`
        * {
          font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
            'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
            monospace, serif;
        }
        body {
          margin: 0;
          padding: 25px 50px;
        }
        a {
          color: #22bad9;
        }
        p {
          font-size: 14px;
          line-height: 24px;
        }
        article {
          margin: 0 auto;
          max-width: 650px;
        }
        button {
          align-items: center;
          background-color: #22bad9;
          border: 0;
          color: white;
          display: flex;
          padding: 5px 7px;
          transition: background-color 0.3s;
        }
        button:active {
          background-color: #1b9db7;
        }
        button:disabled {
          background-color: #b5bebf;
        }
        button:focus {
          outline: none;
        }
      `}</style>
    </>
  )
}
