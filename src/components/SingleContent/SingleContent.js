import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModel";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  mediaType,
  vote_average,
}) => {
  return (
    <ContentModal mediaType={mediaType} id={id}>
        <Badge 
            badgeContent={vote_average}
            color={vote_average > 6 ? 'primary': 'secondary'}  
            overlap="rectangular"  
        />
        <img
            className="poster"
            src={poster ? `${img_300}${poster}` : unavailable}
            alt={title}
        />
        <b className="title">{title}</b>

        <span className="subTitle">
            <span>{mediaType === 'tv'? 'TV Series': 'Movie'}</span>
            <span>{date}</span>
        </span>
      
    </ContentModal>
  )
}

export default SingleContent
