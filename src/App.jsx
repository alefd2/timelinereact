import { Header } from './components/Header';
import { Posts } from './components/Posts';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

function App() {


  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/alefd2.png',
        name: 'Alef Oliveira',
        role: 'Frontend Developed',
      },
      content: [

        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' }
      ],
      publishedAt: new Date('2022-05-11 08:13:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator at Recketseat',
      },
      content: [

        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' }
      ],
      publishedAt: new Date('2022-08-11 05:30:00'),
    }
  ]


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Posts
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}

                />
              )
            })
          }

        </main>
      </div>
    </>
  )
}

export default App;
