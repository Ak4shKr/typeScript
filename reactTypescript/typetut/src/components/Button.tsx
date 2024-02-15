import React, { useState } from "react";
interface MyButtonProps {
  text: string | number | boolean;
  onClick?: () => void;
}

interface Book {
  name: string;
  price: number;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  const { text, onClick } = props;

  // const [value, setValue] = useState<Book>({ name: "physics", price: 10 });
  const [value, setValue] = useState<string | undefined>();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      {/* <h2>
        {value.name} - {value.price}
      </h2>
      <button onClick={() => setValue({ name: "chemistry", price: 20 })}>
        {text}
      </button> */}

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      <h1>{value}</h1>
    </>
  );
};

export default MyButton;
