export default {
  title: 'Components/Card',
};

export const Default = () => `<section class="card">
<button class="card__bookmark">Bookmark</button>
<h2 class="card__heading">Question:</h2>
<p class="card__question">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi earum
voluptas quisquam numquam aut nostrum, voluptatum voluptatibus nobis.</p>
<button data-js="answer-button" class="card__answer-button">Show Answer</button>
<p data-js="answer-text" class="card__answer dp-hide">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua.</p>
<ul role="list" class="card__ul">
  <li class="card__ul__li">Tag 1</li>
  <li class="card__ul__li">Tag 2</li>
  <li class="card__ul__li">Tag 3</li>
  <li class="card__ul__li">Tag 4</li>
</ul>
</section>`;
