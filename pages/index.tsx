import Head from 'next/head'
import Link from 'next/link'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'



const Home: NextPage = ({ test }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('text', test);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
         <div className='flex flex-row'>
            <div className='flex-none w-32'>
                <Link href='/dashboard'>
                    <a>Dashboard</a>
                  </Link>
            </div>
            <div className='flex-1 w-64'>
                <Link href='/goals'>
                    <a>Goals</a>
                  </Link>
            </div>
            <div className='flex-1 w-64'>
                <Link href='/expenses'>
                    <a>Expenses</a>
                  </Link>
            </div>
          
            <div className='flex-1 w-64'>
                <Link href='/cryptos'>
                    <a>Cryptos</a>
                  </Link>
            </div>
         </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let test = await fetch('http://api:8005/expenses');
  test = await test.json();
  return {
    props: {
      test
    }
  }
}
export default Home