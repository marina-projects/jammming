import './searchResults.css';
import Track from '../Track/Track';

function SearchResults (props) {
    return(
        <div>
            {props.results.map((i) => {
                return (
                    <Track song={i.track.name} singer={i.track.artists[0].name} onAdd={props.onAddTrack} track={i} />
                )
            })}
        </div>
    )            
}

export default SearchResults;