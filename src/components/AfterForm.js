import "../styles/components/afterForm.css";

const AfterForm = (props) => {
  console.log("props afterform", props);
  return (
    <div className="after-form-container">
      <h1>Thank you</h1>
      <button onClick={() => props.sent(false)}>Enviar nova mensagem</button>
    </div>
  );
};

export default AfterForm;
