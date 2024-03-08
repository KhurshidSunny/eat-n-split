import Button from "./Button.js";

export default function Friend({ name, imageLink }) {
  return (
    <li>
      <img src={imageLink} alt="frinedPhoto" />
      <h3>{name}</h3>
      <p>You owe clark 8$</p>
      <Button>Select</Button>
    </li>
  );
}
