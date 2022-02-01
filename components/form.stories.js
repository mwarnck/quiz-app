export default {
  title: 'Components/Form',
};

export const Default =
  () => `<form class="form w-375" action="" aria-labelledby="form-create-question">
<label for="your-question" class="form__label">Your question:</label>
<output data-js="output-question" class="form__output">200 characters remaining</output>
<textarea
  data-js="textarea-question"
  id="your-question"
  class="form__textarea"
  cols="10"
  rows="5"
  required
></textarea>
<label for="your-answer" class="form__label">Your answer:</label>
<output data-js="output-answer" class="form__output">200 characters remaining</output>
<textarea
  data-js="textarea-answer"
  id="your-answer"
  class="form__textarea"
  cols="10"
  rows="5"
  required
></textarea>
<label for="your-tags">Your tags:</label>
<input id="your-tags" type="text" required />
<button type="submit" class="form__button">Submit</button>
</form>`;
