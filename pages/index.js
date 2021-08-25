import Head from 'next/head'
import Card from '../components/Card'
import Footer from '../components/Footer'
import data from '../utils/data'
import { useState } from 'react'

export default function Home() {
  const [projects, setProjects] = useState(data)
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const categories = data.map((project) => {
    return project.stacks
  })
  const categoryItems = categories.flat()
  const uniqueCategories = [...new Set(categoryItems)]

  const handleFilter = (category) => {
    setSelectedCategory(category)
    const filteredProjects = data.filter((project) => {
      return project.stacks.includes(category)
    })
    setProjects(filteredProjects)
  }

  const handleResetFilter = () => {
    setSelectedCategory('ALL')
    setProjects(data)
  }
  return (
    <>
      <main className="bg-gray-200 pb-5 md:pb-10">
        <Head>
          <title>Kyoya's Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="w-full bg-white shadow text-center">
          <h1 className="text-3xl md:text-5xl py-5 md:py-9 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-teal-600 font-black">
            My Projects
          </h1>
        </section>

        <section className="mt-10 container px-4 mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <p>
              （注）閲覧にログインが必要なサイトがありますのでお持ちのダミーアカウントをご利用ください&#x1f607;
            </p>
            <h2 className="mt-5 text-xl border-b-2 py-1 border-gray-400 inline-block">
              技術スタックリスト
            </h2>
            <ul className="mt-3 flex flex-wrap gap-y-4 gap-x-6">
              <li
                className={
                  selectedCategory === 'ALL'
                    ? 'category-badge bg-blue-900 text-white'
                    : 'category-badge bg-white'
                }
                onClick={handleResetFilter}
              >
                ALL
              </li>
              {uniqueCategories.map((category) => {
                return (
                  <li
                    className={
                      selectedCategory === category
                        ? 'category-badge bg-blue-900 text-white'
                        : 'category-badge bg-white'
                    }
                    key={category}
                    onClick={() => handleFilter(category)}
                  >
                    {category}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mt-10 lg:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {projects.map((item) => {
              return <Card item={item} key={item.id} />
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
