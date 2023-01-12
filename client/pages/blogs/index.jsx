import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from '@next/font/google'

const poppins = Poppins(
  {
    weight: ['300', '400', '500', '700'],
    subsets: ['latin']
  }
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogs - Blogyway</title>
        <meta name="name" content="Your one stop place to read article" />
        <meta name="description" content="Blogyway is a theme for blog writing with fetaures like category , search, etc." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thirteen.svg" />
      </Head>
      <main >
        <header class="navbar-sec section">
          <div class="navbar-area">
            <a href="index.html">
              <div class="logo-area">
                <h1 class="font-size-medium font-weight-regular color-primary">Blogs - Blogyway</h1>
                {/* <!-- <img src="images/logo.png" alt="DSC Easy" class="logo-img"> --> */}
              </div>
            </a>
            {/* <!-- // Navbar file >>>> --> */}
            <ul class="navbar-item-ul">
              <li class="navbar-item-li  navbar-item-li-active">
                <a href="/" class="font-size-regular font-weight-regular color-black">Home</a>
              </li>
              <li class="navbar-item-li">
                <a href="#" class="font-size-regular font-weight-regular color-black">Blogs</a>
              </li>
              <li class="navbar-item-li">
                <a href="#" class="font-size-regular font-weight-regular color-black">About me</a>
              </li>
              <li class="navbar-item-li">
                <a href="contact-us.html"><button class="primary-btn">Contact Us</button></a>
              </li>
            </ul>
            <div class="navbar-icon">
              <svg width="35px" height="35px" viewbox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <line x1="0" y1="17" x2="48" y2="17" stroke-width="2" />
                  <line x1="0" y1="31" x2="48" y2="31" stroke-width="2" />
                </g>

                <g>
                  <line x1="0" y1="24" x2="48" y2="24" stroke-width="2" />
                  <line x1="0" y1="24" x2="48" y2="24" stroke-width="2" />
                </g>
              </svg>
            </div>
          </div>
        </header>
        <div className="trending-sec section tgpx75">
        <h1 className="font-size-medium font-weight-medium color-black tgpx15">All Blogs {'>>>>'}</h1>
          <div className="trending-area tgpx30">
            <div className="blog-box-area">
            <div className="blog-box">
                <img className='blog-box-img' src="/thumb.png" alt="Image" />
                <h1 className="font-size-medium font-weight-medium color-primary tgpx15"><a href="#">Blog 1</a></h1>
                <p className="font-size-regular font-weight-regular color-light-black tgpx15">I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post.</p>
                <p className="font-size-regular font-weight-medium color-primary tgpx15">13 Jan 2023, Mohit Kumawat</p>
              </div>
              <div className="blog-box">
                <img className='blog-box-img' src="/thumb.png" alt="Image" />
                <h1 className="font-size-medium font-weight-medium color-primary tgpx15"><a href="#">Blog 2</a></h1>
                <p className="font-size-regular font-weight-regular color-light-black tgpx15">I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post.</p>
                <p className="font-size-regular font-weight-medium color-primary tgpx15">13 Jan 2023, Mohit Kumawat</p>
              </div>
              <div className="blog-box">
                <img className='blog-box-img' src="/thumb.png" alt="Image" />
                <h1 className="font-size-medium font-weight-medium color-primary tgpx15"><a href="#">Blog 3</a></h1>
                <p className="font-size-regular font-weight-regular color-light-black tgpx15">I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post.</p>
                <p className="font-size-regular font-weight-medium color-primary tgpx15">13 Jan 2023, Mohit Kumawat</p>
              </div>
              <div className="blog-box">
                <img className='blog-box-img' src="/thumb.png" alt="Image" />
                <h1 className="font-size-medium font-weight-medium color-primary tgpx15"><a href="#">Blog 4</a></h1>
                <p className="font-size-regular font-weight-regular color-light-black tgpx15">I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post.</p>
                <p className="font-size-regular font-weight-medium color-primary tgpx15">13 Jan 2023, Mohit Kumawat</p>
              </div>
              <div className="blog-box">
                <img className='blog-box-img' src="/thumb.png" alt="Image" />
                <h1 className="font-size-medium font-weight-medium color-primary tgpx15"><a href="#">Blog 5</a></h1>
                <p className="font-size-regular font-weight-regular color-light-black tgpx15">I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post. I am the description of this blog post.</p>
                <p className="font-size-regular font-weight-medium color-primary tgpx15">13 Jan 2023, Mohit Kumawat</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
