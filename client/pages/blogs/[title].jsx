import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home(props) {
    const router = useRouter()
    const { title } = router.query
    let dataa = props.data.articles.find(news => news.title == title);
    return (
        <>
            <Head>
                <title>Blog 1 - Blogyway</title>
                <meta name="name" content="Your one stop place to read article" />
                <meta name="description" content="Blogyway is a theme for blog writing with fetaures like category , search, etc." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/thirteen.svg" />
            </Head>
            <main >
                <header className="navbar-sec section">
                    <div className="navbar-area">
                        <Link href="/">
                            <div className="logo-area">
                                <h1 className="font-size-medium font-weight-regular color-primary">Blogyway</h1>
                                {/* <!-- <img src="images/logo.png" alt="DSC Easy" className="logo-img"> --> */}
                            </div>
                        </Link>
                        {/* <!-- // Navbar file >>>> --> */}
                        <ul className="navbar-item-ul">
                            <li className="navbar-item-li  navbar-item-li-active">
                                <Link href="/" className="font-size-regular font-weight-regular color-black">Home</Link>
                            </li>
                            <li className="navbar-item-li">
                                <Link href="#" className="font-size-regular font-weight-regular color-black">Blogs</Link>
                            </li>
                            <li className="navbar-item-li">
                                <Link href="#" className="font-size-regular font-weight-regular color-black">About me</Link>
                            </li>
                            <li className="navbar-item-li">
                                <Link href="contact-us.html"><button className="primary-btn">Contact Us</button></Link>
                            </li>
                        </ul>
                        <div className="navbar-icon">
                            <svg width="35px" height="35px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <line x1="0" y1="17" x2="48" y2="17" strokeWidth="2" />
                                    <line x1="0" y1="31" x2="48" y2="31" strokeWidth="2" />
                                </g>

                                <g>
                                    <line x1="0" y1="24" x2="48" y2="24" strokeWidth="2" />
                                    <line x1="0" y1="24" x2="48" y2="24" strokeWidth="2" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </header>
                <div className="trending-sec section tgpx75">
                    <div className="trending-area tgpx30">
                        {
                            <div className="blog-box" style={{width: '100%'}}>
                                <img className='blog-box-img' src={dataa["urlToImage"]} alt="Image" />
                                <h1 className="font-size-medium font-weight-medium color-primary tgpx15"><Link href={'/blogs/' + dataa['title']}>{dataa["title"]}</Link></h1>
                                <p className="font-size-regular font-weight-regular color-light-black tgpx15">{dataa["description"]}</p>
                                <p className="font-size-regular font-weight-medium color-primary tgpx15">{dataa["publishedAt"]}, {dataa["author"]}</p>
                            </div>
                        }
                    </div>
                </div>
            </main>
        </>
    )
}


export async function getServerSideProps() {
    const api = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=223a48e2b8804866a037abf4aae0cddd');
    const data = await api.json()
    return {
        props: { data },
    }
}