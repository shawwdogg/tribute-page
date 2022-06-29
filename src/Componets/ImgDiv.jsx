export default function ImgDiv(props) {
  return (
    <div id="img-div">
      <img src={props.img} />
      <p id="img-caption">{props.picture_info}</p>
    </div>
  );
}
