import { PrimaryCard, SecondaryCard } from "./cardImage";

export default function CardImage({ primary }) {
  const primaryContainer = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delayChildren: 0.5, staggerChildren: 0.1 },
    },
    hidden: { y: 100 },
  };

  // const miniModal = {
  //   visible: {
  //     y: 0,
  //     transition: { duration: 0.5, delay: 0.5 },
  //   },
  //   hidden: {
  //     y: 100,
  //   },
  // };

  if (primary)
    return (
      <PrimaryCard
        primaryContainer={primaryContainer}
        // miniModal={miniModal}
        // fakeProfiles={inDoor}
      />
    );

  return <SecondaryCard primaryContainer={primaryContainer} />;
}
