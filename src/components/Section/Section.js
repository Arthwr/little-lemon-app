const Section = ({ width, height, backgroundColor, children }) => {
  const sectionStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
  };

  return <div style={sectionStyle}>{children}</div>;
};

export default Section;
