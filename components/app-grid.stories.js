export default {
  title: 'Components/app-grid',
};

export const Default = () => `<div class="app-grid h-500">
<header class="bg-hotpink">top</header>
<main class="app-grid__scrollarea bg-blue">
  <div class="h-100vh">scroll me</div>
</main>
<nav class="bg-coral">bottom</nav>
</div>`;
