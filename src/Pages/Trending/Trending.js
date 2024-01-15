import React, {useEffect, useState} from "react"
import axios from "axios";
import { TRENDING_API } from "../../Utils/constants";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import "./Trending.css";

export default function Trending () {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        try {
            const { data } = await axios.get(TRENDING_API(page));
            setContent(data.results);
        } catch (error) {
            //handle error
        } 
    }

    useEffect(() => {
        window.scroll(0,0);
        fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div>
            <span className="pageTitle">Trending Today</span>
            <div className="trending">
                {content? content.map(c => {
                    return (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            mediaType={c.media_type}
                            vote_average={c.vote_average}
                        />
                    )
                })
            : null}
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}