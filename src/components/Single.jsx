import React, {useState, useEffect} from 'react'
import Header from './partials/Header';
import Footer from './partials/Footer';
import Sidebar from './partials/Sidebar';
import ReactHtmlParser from 'react-html-parser'; 

export default function Single(props) {

    var controller = new AbortController();
    var signal = controller.signal;

    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true);

    console.log(props.match.params.id);

    const fetchItem = async () => { await fetch('https://jsparrow.uk/api/post/' + props.match.params.id, signal).then(async(response) => {
        const data = await response.json();    
        await setState(data);
        setLoading(false);
        console.log(state.post);
        })
    }

    useEffect(() => {
        if (loading) {fetchItem()}
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
                        <div className="post">
                            <img className="post_thumbnail" src={"https://jsparrow.uk" + state.post.image} alt={state.post.title}></img>
                            <div className="post_container">
                                <div className="timestamp">{state.post.created_at}</div>
                                <h1>{state.post.title}</h1>
                                {ReactHtmlParser(state.post.body)}
                            </div>
                        </div>


                        <Sidebar />
                </div>

                }
                <Footer />
            </main>
        </div>
    )
}
