import Button from "./Button.js";

export default function Friend({ name, imageLink, balance }) {
  return (
    <li>
      <img src={imageLink} alt="frinedPhoto" />
      <h3>{name}</h3>
      {balance === 0 && <p>You and {name} are even</p>}
      {balance < 0 && (
        <p className="red">
          You owe {name} {`${Math.abs(balance)}$`}
        </p>
      )}

      {balance > 0 && (
        <p className="green">
          {name} owes you ${balance}$
        </p>
      )}

      <Button>Select</Button>
    </li>
  );
}
