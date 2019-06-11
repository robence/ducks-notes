import React from 'react'

export default function Dashboard({ children }: { children?: JSX.Element }): JSX.Element {
  return (
    <main className="App-dashboard">
      {children}
    </main>
  )
}
