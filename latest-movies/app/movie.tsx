import Image from "next/image";
export default function Movie(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.overview}</p>
      <p>Popularity: {props.popularity}</p>
      <p>Release Date: {props.releaseDate}</p>
    </div>
  );
}
