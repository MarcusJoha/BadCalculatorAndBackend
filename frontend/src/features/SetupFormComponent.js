export default function SetupFormComponent(props, { emit }) {
  const updateValue = (event) => {
    let val = event.target.value;
    emit("update:modelValue", val);
  };

  return { updateValue };
}
