import Button from "./components/Button";

export default function SplitBills() {
  return (
    <form className="form-split-bill">
      <h2>split a bill with sarah</h2>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♀️ Your expense</label>
      <input type="text" />

      <label>👭 Sarah's expense</label>
      <input type="text" />

      <label>😅 who is paying the bill</label>
      <select>
        <option value="you">Your</option>
        <option value="your-friend">Sarah</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
