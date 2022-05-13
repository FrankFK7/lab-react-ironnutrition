import { Divider, Input } from 'antd';

function AddFoodForm({ addFood }) {
  return (
    <form onSubmit={addFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} name="name" type="text" onChange={() => {}} />

      <label>Image</label>
      <Input value={undefined} name="image" type="text" onChange={() => {}} />

      <label>Calories</label>
      <Input
        value={undefined}
        name="calories"
        type="number"
        onChange={() => {}}
      />

      <label>Servings</label>
      <Input
        value={undefined}
        name="servings"
        type="number"
        onChange={() => {}}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
