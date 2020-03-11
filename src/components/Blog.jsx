import React, {useState, useEffect} from 'react';
import ReactHtmlParser from 'react-html-parser';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Sidebar from './partials/Sidebar';

const Blog = () => {

    // abort controller
    var controller = new AbortController();
    var signal = controller.signal;


    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [posts, setPosts] = useState([]);

    
    // fetch("https://swapi.co/api/people")
    //         .then(response => response.json())
    //         .then(data => {
    //             setLoading(false);
    //             setPosts(data.results);
    //             console.log(posts);
    //         });

    const fetchItems = async (apiUrl = `https://www.jsparrow.uk/api/posts`) =>  {
        console.log("load");
                await fetch(apiUrl)
                    .then(async (response) => {
                        
                        //throw errors if issues
                        if (response.status === 500) {
                            console.log("500");
                        }
                        else if(response.status === 404) {
                            console.log("404");
                        }
                        else if(response.status === 419) {
                            console.log("419");
                        }
        
                        const data = await response.json();
                        setResults(data);
                        setPosts(data.posts.data);
                        setLoading(false);
                })
            }

    useEffect(() => {
        if (loading) {fetchItems()}
        return () => {
            controller.abort();
        };
    })
    

    return (
        <div className="main-container">
            <Header />

        <main>
                {loading ? "loading" : 
                <div className="container">
                    <div className="posts_container">
                        {posts.map((post) => {
                            return (
                                <a key={post.id} href={"/post/" + post.slug} className="unlinkStyle">
                                    <article className="section post_link">
                                        <img className="post_thumbnail" src={"https://jsparrow.uk/" + post.image} alt={post.title} />

                                        <div className="post_container">
                                            <p className="timestamp">{post.created_at}</p>
                                            <h2 className="post_title">{post.title}</h2>
                                            <p>{ReactHtmlParser(post.body.substring(0,200) + "...")}</p>
                                        </div>
                                    </article>
                                </a>
                            )
                        })}
                    </div>
                
                    <Sidebar />
                    </div>
                }

            <Footer />
        </main>
            
        </div>
    );
}

export default Blog;
