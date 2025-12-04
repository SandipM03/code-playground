//import Image, { type ImageProps } from "next/image";
import InfiniteGallery from "./components/3d-gallery-photography";
import "./globals.css";

// type Props = Omit<ImageProps, "src"> & {
//   srcLight: string;
//   srcDark: string;
// };

// const ThemeImage = (props: Props) => {
//   const { srcLight, srcDark, ...rest } = props;

//   return (
//     <>
//       <Image {...rest} src={srcLight} className="imgLight" />
//       <Image {...rest} src={srcDark} className="imgDark" />
//     </>
//   );
// };

export default function Home() {
  return (
    <>
    <div className="">
      <p className="background-white text-black">
        nav
      </p>
      helllo
    </div>
    <div className="heros">
      <InfiniteGallery />
    </div>
    <div>
      footer
    </div>
    </>
  );
}
