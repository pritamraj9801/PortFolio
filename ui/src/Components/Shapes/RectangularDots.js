export default function RectangularDots(props){
     const dots = [];
  for (let col = 0; col < props.cols; col++) {
    dots.push(<span key={col} className="dot"></span>);
  }
  let divs = [];
  for(let row = 0;row < props.rows;row++){
    divs.push(<div className="dotsContainer">{dots}</div>);
  }
  return (
    <div className={props.class}>
      {divs}
    </div>
  );
}