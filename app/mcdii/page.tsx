import Card from "../components/card";

export default function DungeonsII() {
  return (
    <div className="grid grid-cols-3 gap-10 p-10">
      <Card
        name="Soul Storm"
        description="Track Soul Storms live"
        image="/images/mcdii/soul_storm.png"
        link="/mcdii/soul-storm"
      />
    </div>
  );
}
