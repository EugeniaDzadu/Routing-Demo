import { Metadata } from "next";
import Link from "next/link";

export const metadata ={
    title: {
        absolute: "Blog",
    },
}


const Blog = ()=>{
    return(
        <>
        <Link href="/">Home</Link>
        <h1>My Blog</h1>
        </>
    )
  }
  
  export default Blog;