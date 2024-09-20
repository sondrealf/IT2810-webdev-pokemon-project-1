import "./InfoCard.css";

interface InfoCardInterface {
  label: string;
  value: string;
  icon: string;
}

const InfoCard = (props: InfoCardInterface) => {
  return (
    <div className="infoCard">
      <div className="infoCard__iconAndLabel">
        <img className="infoIcon" src={props.icon} />
        <p>{props.label}</p>
      </div>
      <p className="text">{props.value}</p>
    </div>
  );
};
export default InfoCard;
