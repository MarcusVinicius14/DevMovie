import { BackGroundImage,BackGroundLinear } from "./style";

export const BackGround = ({imageBanner, children }) => {
  return (
    <BackGroundImage bgImage={imageBanner}>
      <BackGroundLinear>{children}</BackGroundLinear>
    </BackGroundImage>
  );
};
