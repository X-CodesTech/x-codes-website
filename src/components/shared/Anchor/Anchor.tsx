const Anchor = ({
  fileURL,
  buttonText,
}: {
  fileURL: string;
  buttonText: string;
}) => {
  return (
    <a
      href={fileURL}
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary rounded my-2 text-white text-uppercase fw-bold"
      style={{
        backgroundColor: "#00192b",
        borderColor: "#00192b",
      }}
    >
      {buttonText}
    </a>
  );
};

export default Anchor;
