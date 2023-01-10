import Head from 'next/head'
import {useEffect, useState} from "react";
import JSConfetti from 'js-confetti'
import Image from "next/image";

export default function Home() {
  const [isFiesta, setIsFiesta] = useState(false)

  const handleFiesta = () => {
    setIsFiesta(true)
    setTimeout(() => {
      setIsFiesta(false)
    }, 5000)
  }

  useEffect(() => {
    const jsConfetti = new JSConfetti()
    let interval;
    if (isFiesta) {
      interval = setInterval(() => {
        jsConfetti.addConfetti({
          emojis: ['🎉', '🥳', '🎂', '🎈', '🦔', '🦔', '🎊'],
        })
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isFiesta])

  return (
      <>
        <Head>
          <title>Anniversaire Coline</title>
          <meta name="description" content="C'est l'anniversaire de Valentine"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon"
                href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/wrapped-gift_1f381.png"/>
        </Head>
        <main className={"pb-48 w-11/12 mx-auto md:w-full"}>
          <section className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center flex flex-col justify-center items-center">
              <div className={"inline-block"}>Joyeux anniversaire Coline !!</div>
              <div className={"inline-block mt-6"}>🎉🎉🎉</div>
            </h1>

            <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
              C&apos;est l&apos;anniversaire de la responsable com de l&apos;année..
            </p>

            <div className={"flex justify-center gap-4 mt-6 md:mt-8"}>
              <button onClick={handleFiesta}
                      className="inline-flex justify-center rounded-lg text-lg font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700">
                Je fête mon super anniversaire 🎂
              </button>
            </div>

            {isFiesta &&
                <div className={"container mx-auto flex justify-center"}>
                  <Image className={"mt-8"} width={400} height={300} src="https://usagif.com/wp-content/uploads/gif-anniversaire-femme-101-preview.gif" alt="special friend"/>
                </div>
            }
          </section>
        </main>
      </>
  )
}