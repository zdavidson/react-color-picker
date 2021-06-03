const Color = (props) => {
  const color = props.color;
  const selectColor = props.selectColor;
  return (
    <div className={`${color} dot`} onClick={() => selectColor(color)}></div>
  );
};

export default Color;
