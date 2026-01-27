
export default function DivLock(props) {
  return (
    <div className={props.class}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="25"
          y="75"
          width="100"
          height="100"
          stroke="#45b05d"
          fill="none"
          stroke-width="1"
        />
        <rect
          x="75"
          y="25"
          width="100"
          height="100"
          stroke="#45b05d"
          fill="none"
          stroke-width="1"
        />
        <rect
          x="75"
          y="75"
          width="50"
          height="50"
          stroke="#45b05d"
          fill="none"
          stroke-width="1"
        />
      </svg>
    </div>
  );
}
