const Button = (props) => {
  //  Write your code here.
  text = props;
  <button className="button">{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="shadow bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button font="Like" className="bg-color1" />
      <Button font="Comment" className="bg-color2" />
      <Button font="Share" className="bg-color3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
