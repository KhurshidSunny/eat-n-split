import Button from "./Button";

export default function AddFriend() {
  return (
    <form className="form-split-bill">
      <lable> 👩🏼‍🤝‍👩🏼 Friend name</lable>
      <input type="text" />
      <label> 💽 Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}
