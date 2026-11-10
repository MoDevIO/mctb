import Card from "../components/card";

export default function Minecraft() {
  return (
    <div className="grid grid-cols-3 gap-10 p-10">
      <Card
        name="Nether Coords Calculator"
        description="Nether < > Overworld Coordinates Calculator"
        image="/images/mc/nethercalc.png"
        link="/mc/nethercalc"
      />
    </div>
  );
}
