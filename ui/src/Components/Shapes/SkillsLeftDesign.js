import RectangularDots from "./RectangularDots";
import RectangleBox from "./RectangleBox";
import DivLock from "./DivLock";
export default function SkillsLeftDesign() {
  return (
    <div>
      <div className="flex-row flex-space-between">
        <RectangularDots rows="5" cols="5" />
        <RectangleBox height="80px" width="80px" />
      </div>
      <div className="flex-row flex-space-between">
        <DivLock />
        <RectangularDots rows="4" cols="4" />
        <RectangleBox height="100px" width="100px" />
      </div>
    </div>
  );
}
