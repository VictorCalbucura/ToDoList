import { TextInput, Button, Group } from '@mantine/core';
import { useField } from '@mantine/form';

function Input({ addTask }) {
  const field = useField({
    initialValue: '',
    validate: (value) => (value.trim() !== '' ? addTask(value) : 'Task cannot be empty'),
  });
  
  return (
    <Group>
      <TextInput
        {...field.getInputProps()}
        placeholder="Add task"
        mb="md"
        flex={1}
        style={{ marginTop: 15 }}
      />
      <Button
      variant="outline"
      color="green"
      size="md"
      onClick={field.validate}
    >
      Add
    </Button>
    </Group>
  );
}

export default Input;