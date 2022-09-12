import useFetch from "../helper/useFetch";
import BlogList from "../components/BlogList";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    return (  
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}
 
export default Home;
