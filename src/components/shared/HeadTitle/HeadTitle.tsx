const HeadTitle = ({ text }: { text: string }) => {
  return (
    <p
      className="text-center my-2 fs-5 fw-bolder text-uppercase"
      style={{ color: "#00192b" }}
    >
      {text}
    </p>
  );
};

export default HeadTitle;
