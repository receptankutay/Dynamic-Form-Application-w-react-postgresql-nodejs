import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("Önümüzdeki Dönemler İçin STK Önerilerinizi Burada Belirtiniz.");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (

    <Fragment>
      <h1 className="text-center mt-5">Dynamic Form Application</h1>
      <form className="mt-5">
        <h2>EĞİTİM
          <button
            type="button"
            class="btn btn-secondary"
            data-toggle="modal"
          >
            Edit
          </button>
        </h2>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
          <label class="form-check-label" for="exampleRadios1">
            Optional Button
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
          <label class="form-check-label" for="exampleRadios2">
            Optional Button
          </label>
        </div>
      </form>
      <form className="mt-5">
        <h2>SAĞLIK
          <button
            type="button"
            class="btn btn-secondary"
            data-toggle="modal"
          >
            Edit
          </button>
        </h2>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" checked />
          <label class="form-check-label" for="exampleRadios3">
            Optional Button
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
          <label class="form-check-label" for="exampleRadios4">
            Optional Button
          </label>
        </div>
      </form>

      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;