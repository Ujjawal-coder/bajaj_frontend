import { Metadata } from 'next'
import BajajChallengeForm from '@/components/bajaj-challenge-form'

export const metadata: Metadata = {
  title: '0827CS211251',
  description: 'Bajaj Finserv Health Dev Challenge',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-tl from-gray-900 via-black to-purple-900">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 mb-12">
          Bajaj Finserv Health Dev Challenge
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Submit your data and explore the filtered results with a sleek and responsive design.
        </p>
      </div>
      <div className="w-full max-w-2xl bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
        <BajajChallengeForm />
      </div>
    </main>
  )
}
