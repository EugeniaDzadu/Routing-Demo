import Link from "next/link";


const Page = ()=>{
  return(
    <>
      <h1>Welcome page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products"> Products</Link>
    </>
  )
}

export default Page;