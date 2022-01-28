export default {
  title: 'Components/Form',
};

export const Default =
  () => `<form class="form w-375" action="" aria-labelledby="form-create-question">
<label for="your-question">Your question:</label>
<textarea
  id="your-question"
  cols="10"
  rows="5"
  required
></textarea>
<label for="your-answer">Your answer:</label>
<textarea
  id="your-answer"
  cols="10"
  rows="5"
  required
></textarea>
<label for="your-tags">Your tags:</label>
<input id="your-tags" type="text" required />
<button type="submit" class="form__button">Submit</button>
</form>`;
