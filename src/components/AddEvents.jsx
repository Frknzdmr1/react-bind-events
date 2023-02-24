const AddEvents = () => {

  function clickHandler() {
    alert('Button Clicked');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    alert('Form submitted')
  }

  return (
  <div>
    <div>AddEvents</div>

    <form onSubmit ={ submitHandler }>
      <input type="text" />
      <button>Submit</button>
    </form>

    <button onClick={ clickHandler}>Click me </button>

  </div>
  )
}

export default AddEvents