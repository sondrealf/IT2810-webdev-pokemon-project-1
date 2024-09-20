import "./TypeBadge.css";

const TypeBadge = ({ pokeType }: { pokeType: string }) => {
  return (
    <div>
      <div className={`pokemon-page__type pokemon-page__type-${pokeType}`}>
        {pokeType}
      </div>
    </div>
  );
};

export default TypeBadge;
