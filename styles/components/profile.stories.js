export default {
  title: 'Components/Profile',
};

export const Default = () => `<section class="profile w-375">
<figure class="profile__img">
  <img
    src="https://source.unsplash.com/random/120x120?portrait"
    alt=""
    width="120"
    height="120"
  />
  <figcaption>Profile name</figcaption>
</figure>
<p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi earum
  voluptas quisquam numquam aut nostrum, voluptatum voluptatibus nobis.
  Illum, dignissimos delectus voluptate possimus voluptatem suscipit
  magni odit! Optio, qui ullam.
</p>
<p>Skills</p>
<ul role="list" class="profile__ul">
  <li>Skill 1</li>
  <li>Skill 2</li>
  <li>Skill 3</li>
  <li>Skill 4</li>
</ul>
<button class="profile__button" type="submit">Logout</button>
</section>`;
