
const BenefitComponent = ({ icon, text }: IBenefitComponent) => {
  return (
    <div className="benefits-component">
      <img src={icon} alt={text} width={150}/>
      <p className="text-white text-center">{text}</p>
    </div>
  );
};
interface IBenefitComponent {
  icon: string;
  text: string;
}
export default BenefitComponent;
