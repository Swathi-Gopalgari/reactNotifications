const Notification = (props) => {
  const { className, text, imageClass, img } = props;
  /* return (
    <div className="one">
      <img src={img} className={imageClass} />
      <p className={className}>{text}</p>
    </div>
  );
  */
  return (
    <div className={`${className} notificatonCard`}>
      <div className="imageandpara">
        <img src={img} className={imageClass} />
        <p>{text}</p>
      </div>
    </div>
  );
};

const element = (
  <div className="container">
    <h1>Notifications</h1>
    <div>
      <Notification
        text="Information message"
        className="info"
        img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        imageClass="icon"
      />
      <Notification
        text="Success message"
        className="success"
        img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        imageClass="icon"
      />
      <Notification
        text="Warning message"
        className="war"
        img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        imageClass="icon"
      />
      <Notification
        text=" Error message"
        className="error"
        img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        imageClass="icon"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
