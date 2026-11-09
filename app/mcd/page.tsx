import Card from "../components/card";

export default function Dungeons() {
  return (
    <div className="grid grid-cols-3 gap-10 p-10">
      <Card
        name="Tower"
        description="See current tower"
        image="/images/tower.png"
        link="/mcd/tower"
      />
      <Card
        name="Enchantments"
        description="See all enchantments"
        image="/images/enchantment.png"
        link="/mcd/enchantments"
      />
    </div>
  );
}
