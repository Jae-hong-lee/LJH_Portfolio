import { Player } from "@lottiefiles/react-lottie-player";

export default function ProfileAni() {
  return (
    <>
      <Player
        autoplay
        loop
        src="/animation/developer.json"
        style={{ height: "100%", width: "100%" }}
      ></Player>
    </>
  );
}
