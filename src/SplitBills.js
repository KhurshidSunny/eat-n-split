import Button from "./components/Button";

export default function SplitBills({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>split a bill with {selectedFriend.name} </h2>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♀️ Your expense</label>
      <input type="text" />

      <label>👭 {selectedFriend.name}'s expense</label>
      <input type="text" />

      <label>😅 who is paying the bill</label>
      <select>
        <option value="you">Your</option>
        <option value="your-friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
