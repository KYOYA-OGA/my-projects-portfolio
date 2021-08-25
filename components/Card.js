import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

const Card = ({ item }) => {
  const { title, image, description, stacks, demoURL, githubURL } = item
  return (
    <article className="bg-white shadow-xl rounded-md overflow-hidden ">
      <div className="relative aspect-w-3 aspect-h-2">
        <Image src={image} alt={title} layout="fill" className="absolute" />
      </div>

      <div className="border-t px-6 py-5 md:py-8 border-blue-200 text-gray-800 text-center md:h-[400px] flex flex-col">
        <div>
          <h2 className="text-3xl">{title}</h2>
          <p className="mt-1 text-left">{description}</p>

          <h3 className="mt-8 border-b-2 py-1 inline-block">技術スタック</h3>
          <ul className="mt-3 flex flex-wrap justify-start gap-2">
            {stacks.map((stack, i) => {
              return (
                <li
                  key={i}
                  className="px-3 bg-blue-900 text-white  py-1 rounded-full"
                >
                  {stack}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-8 md:mt-auto">
          <h3 className="border-b-2 py-1 inline-block">コード＆デモサイト</h3>
          <div className="mt-2 flex justify-center space-x-16">
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-4xl hover:text-blue-400" />
            </a>
            <a href={demoURL} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="text-4xl hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card
