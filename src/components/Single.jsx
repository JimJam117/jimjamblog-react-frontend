import React, {useState, useEffect} from 'react'
import Header from './partials/Header';
import Footer from './partials/Footer';


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
                <div className="single-container">
                        <div className="post">
                            <img className="post_thumbnail" src={"https://jsparrow.uk" + state.post.image} alt={state.post.title}></img>
                            <div className="post_container">
                                <div className="timestamp">{state.post.created_at}</div>
                                <h1>{state.post.title}</h1>
                                {state.post.body}
                            </div>
                        </div>

                        <div className="sidebar">
                            <h3>Links</h3>
                            <ul style={{'listStyle': 'none'}}>
                                <li><a className="btn sidebar-btn" href="/github"><i className="fab fa-github"></i> Github</a></li>
                                <li><a className="btn sidebar-btn" href="/contact"><i className="fas fa-envelope-square"></i> Contact</a></li>
                            </ul>
                        </div>
                </div>

                }
                <Footer />
            </main>
        </div>
    )
}
