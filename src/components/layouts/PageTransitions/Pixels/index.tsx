import PixelBackground from "./PixelBackground";

function Pixels({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PixelBackground />
      {children}
    </div>
  );
}

export default Pixels;
