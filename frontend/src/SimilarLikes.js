import { useState, ReactComponentElement,  useEffect} from "react";


function SimilarLikes(props) {
    const [similarUserLikes, setSimilarUserLikes] = useState({});

    useEffect(() => {
    fetch('/api/similar-likes')
        .then((response) => response.json())
        .then((similarLikes) => {
        setSimilarUserLikes(similarLikes);
        });
    }, []);

    return(
        <div>

        </div>
    )
}

export default SimilarLikes;