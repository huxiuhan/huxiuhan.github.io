import { getIndexData } from '../lib/getPostsData'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import React, { useRef } from "react";
import { create } from '@lottiefiles/lottie-interactivity';


export default function Home({ indexData, indexContent }) {
  const gitHubRef = useRef();
  const linkedInRef = useRef();
  const emailRef = useRef();
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
    gitHubRef.current.addEventListener('load', function (e) {
      create({
        mode: 'cursor',
        player: '#github-lottie',
        actions: [
          {
            type: "hover",
            forceFlag: false
          },
        ],
      });
    });
    linkedInRef.current.addEventListener('load', function (e) {
      create({
        mode: 'cursor',
        player: '#linkedin-lottie',
        actions: [
          {
            type: "hover",
            forceFlag: false,
          },
        ],
      });
    });

    emailRef.current.addEventListener('load', function (e) {
      create({
        mode: 'cursor',
        player: '#email-lottie',
        actions: [
          {
            type: "hover",
            forceFlag: false,
          },
        ],
      });
    });
  });
  return (
    <div className="container">
      <Head>
        <title>Hu Xiuhan - 0xStory</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
      <header className="site-header">

        <div className="wrapper">

          <h1 className="hero" id="hero-1" hint="胡修涵">
            <a href="/">
              <span className="hb">[</span>
              <span className="sheng">H</span><span className="yun">u</span>&nbsp;
              <span className="sheng">X</span><span className="yun">iu</span><span className="sheng">h</span><span className="yun">an</span>
              <span className="hb">]</span>
            </a>
          </h1>

        </div>
        <ul className="nav">
          <li><a href="https://github.com/huxiuhan" title="Github">
            <lottie-player
              id="github-lottie"
              ref={gitHubRef}
              loop
              src="/images/github-lottie.json"
              style={{ width: "48px", height: "48px" }}
            ></lottie-player>
          </a></li>
          <li><a href="https://www.linkedin.com/in/xiuhanhu" title="LinkedIn">
            <lottie-player
              id="linkedin-lottie"
              ref={linkedInRef}
              loop
              src="/images/linkedin-lottie.json"
              style={{ width: "128px", height: "128px", margin: "-32px", transform:"translateY(40px)"}}
            ></lottie-player>
          </a></li>
          <li><a href="mailto:huxiuhan@gmail.com" title="Email">
            <lottie-player
              id="email-lottie"
              ref={emailRef}
              loop
              src="/images/email-lottie.json"
              style={{ width: "96px", height: "96px", margin: "-24px", transform:"translateY(22px)"}}
            ></lottie-player>
          </a></li>
        </ul>
      </header>

      <div className="about">

        <div className="wrapper">
          <h1> About </h1>
          <p>Hello, welcome to my homepage. My name is Hu Xiuhan (family name first, 胡修涵 in Chinese Characters). I name myself as <a href="https://0xStory.eth">0xStory.eth</a> in web3 world, since I believe storytelling is most key factor for consensus.</p>

          <p>I define myself as a technology enthusiast and a curious observer. I'm most interested in Computer Vision and Robotics, but I also enjoy programming generally. I started to write program when I was in middle school with Pascal and PHP. I love programming in Ruby and I wrote JavaScript most.
          </p>

          <p>I was a M.S. student in Computer Science from Columbia University and an undergraduate from <a href="http://www.cis.pku.edu.cn/">Machine Intelligence Department</a>, Peking University.
          </p>

          <p>I was working on Nearby Friends and Video Publishing Experience as a full-time employee at Facebook (now Meta) during 2016 - 2018.
          </p>

          <p>I worked on Big Data Infra and Data Visualization at Alibaba, Hangzhou. My team was responsible for data-driven storytelling in 2019 Tmall Double-11 Shopping Festival.
          </p>

          <p>
            Currently, I'm responsible for Digital Asset Management product infra at <a href="https://tezign.com">Tezign</a> and leading innovative product initiatives such as Marketing Content Management and Analysis, partener with global leading brands such as Unilever, Shiseido, McDonald's etc.
          </p>
        </div>
      </div>

      <div className="project-content">
        <div className="wrapper">
          <MDXRemote {...indexContent} />
        </div>
      </div>
      <footer className="site-footer">
        <div className="wrapper">
          <a href="/"><h2 className="footer-heading">Hu, Xiuhan © 2022</h2></a>
        </div>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const indexData = getIndexData();
  const indexContent = await serialize(indexData.content);
  return {
    props: {
      indexData,
      indexContent
    }
  }
}