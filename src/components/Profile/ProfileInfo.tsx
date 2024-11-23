import { renderObject } from "../../utils/renderObject/renderObject";

const ProfileInfo = ({ info }: { info: Record<string, any> }) => {
  return <div>{renderObject(info)}</div>;
};

export { ProfileInfo };
