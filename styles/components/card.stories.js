export default {
  title: "Components/card",
};

export const Default = () => `<section class="card">
<button class="card__bookmark">Bookmark</button>
<h2 class="card__heading">Question:</h2>
<p class="card__question">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi earum
voluptas quisquam numquam aut nostrum, voluptatum voluptatibus nobis.</p>
<details>
          <summary class="card__summary">Show answer</summary>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </details>
<ul class="card__ul">
  <li class="card__ul__li">Tag 1</li>
  <li class="card__ul__li">Tag 2</li>
  <li class="card__ul__li">Tag 3</li>
  <li class="card__ul__li">Tag 4</li>
</ul>
</section>`;
